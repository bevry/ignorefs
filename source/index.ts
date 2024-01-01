// builtin
import { basename as getBasename } from 'path'

// external
import undesiredBasenamesRegExp from 'ignorepatterns'

/** A path to check its ignore status */
export interface Path {
	/** The absolute path, if any */
	absolutePath?: string
	/** The relative path, if any */
	relativePath?: string
	/** If not provided, will be determined from {@link absolutePath}/{@link relativePath} */
	basename?: string
}

/** Ignore Options */
export interface Options {
	/** Absolute paths to ignore */
	ignoreAbsolutePaths?: Array<string | RegExp>
	/** Relative paths to ignore */
	ignoreRelativePaths?: Array<string | RegExp>
	/** Basenames to ignore */
	ignoreBasenames?: Array<string | RegExp>
	/** @deprecated alias for {@link ignoreAbsolutePaths}, {@link ignoreRelativePaths}, and {@link ignoreBasenames} */
	ignorePaths?: Array<string | RegExp>

	/** Ignore basenames that begin with a `.` character */
	ignoreHiddenBasenames?: boolean
	/** @deprecated alias for {@link Options.ignoreHiddenBasenames} */
	ignoreHiddenFiles?: boolean

	/** Ignore commonly undesirable basenames: https://github.com/bevry/ignorepatterns */
	ignoreUndesiredBasenames?: boolean
	/** @deprecated alias for {@link Options.ignoreUndesiredBasenames} */
	ignoreCommonPatterns?: boolean

	/** Test against each {@link Path} property */
	ignoreCustomPatterns?: RegExp

	/** Your own ignore handler */
	ignoreCustomCallback?: (path: Path) => boolean | void
}

/** Tests the path against provided prefixes and regular expressions */
function matches(path: string, matches: Array<string | RegExp>): boolean {
	for (const match of matches) {
		if (typeof match === 'string') {
			if (path.startsWith(match)) return true
		} else if (match.test(path)) return true
	}
	return false
}

/** Tests whether the path should be ignored */
export function isIgnoredPath(
	path: Path,
	opts: Options = {
		ignoreCommonPatterns: true,
	}
) {
	// handle deprecations
	opts = {
		ignoreHiddenBasenames: opts.ignoreHiddenFiles,
		ignoreUndesiredBasenames: opts.ignoreCommonPatterns,
		...opts,
		ignoreAbsolutePaths: [
			...(opts.ignoreAbsolutePaths || []),
			...(opts.ignorePaths || []),
		],
		ignoreRelativePaths: [
			...(opts.ignoreRelativePaths || []),
			...(opts.ignorePaths || []),
		],
		ignoreBasenames: [
			...(opts.ignoreBasenames || []),
			...(opts.ignorePaths || []),
		],
	}

	// extract path, fallback basename, and reconstruct path with its custom properties if any (helpful for scandirectory)
	const { absolutePath, relativePath } = path
	let { basename } = path
	if (!basename && (absolutePath || relativePath))
		basename = getBasename(absolutePath || relativePath || '')
	path = { ...path, basename }

	// custom callback
	if (opts.ignoreCustomCallback && opts.ignoreCustomCallback(path) === true)
		return true

	// absolute path checks
	if (absolutePath) {
		// match
		if (
			opts.ignoreAbsolutePaths?.length &&
			matches(absolutePath, opts.ignoreAbsolutePaths)
		)
			return true

		// custom?
		if (
			opts.ignoreCustomPatterns &&
			opts.ignoreCustomPatterns.test(absolutePath)
		)
			return true
	}

	// relative path checks
	if (relativePath) {
		// match
		if (
			opts.ignoreRelativePaths?.length &&
			matches(relativePath, opts.ignoreRelativePaths)
		)
			return true

		// custom?
		if (
			opts.ignoreCustomPatterns &&
			opts.ignoreCustomPatterns.test(relativePath)
		)
			return true
	}

	// basename checks
	if (basename) {
		// match
		if (opts.ignoreBasenames?.length && matches(basename, opts.ignoreBasenames))
			return true

		// hidden?
		if (opts.ignoreHiddenBasenames && basename[0] === '.') return true

		// common?
		if (
			opts.ignoreUndesiredBasenames &&
			undesiredBasenamesRegExp.test(basename)
		)
			return true

		// custom?
		if (opts.ignoreCustomPatterns && opts.ignoreCustomPatterns.test(basename))
			return true
	}

	// not ignored
	return false
}

/** Compatibility wrapper for {@link isIgnoredPath} */
export default function isIgnoredPathCompatibility(
	path: Path | string,
	opts?: Options
) {
	if (typeof path === 'string')
		path = {
			absolutePath: path,
			relativePath: path,
			basename: getBasename(path),
		}
	return isIgnoredPath(path, opts)
}
