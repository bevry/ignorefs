// builtin
import { basename as getBasename, isAbsolute, sep } from 'path'

// external
import undesiredBasenamesRegExp from 'ignorepatterns'

/** Is the path relative? */
function isRelative(path: string): boolean {
	if (!path) return false
	return !isAbsolute(path)
}

/** Is the path a basename? */
function isBasename(path: string): boolean {
	if (!path) return false
	return !path.includes(sep)
}

/** A path to check its ignore status */
export interface Path {
	/** The absolute path, if any */
	absolutePath?: string
	/** The relative path, if any */
	relativePath?: string
	/** If basename of the path, if any */
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
	/** @deprecated alias for {@link isIgnoredPathCompatibility} that puts absolute paths in {@link ignoreAbsolutePaths}, relative paths in {@link ignoreRelativePaths}, and basenames in {@link ignoreBasenames} */
	ignorePaths?: Array<string | RegExp>

	/** Ignore basenames that begin with a `.` character */
	ignoreHiddenBasenames?: boolean
	/** @deprecated aliases {@link Options.ignoreHiddenBasenames} for {@link isIgnoredPathCompatibility} */
	ignoreHiddenFiles?: boolean

	/** Ignore commonly undesirable basenames: https://github.com/bevry/ignorepatterns */
	ignoreUndesiredBasenames?: boolean
	/** @deprecated aliases {@link Options.ignoreUndesiredBasenames} for {@link isIgnoredPathCompatibility} */
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
		ignoreUndesiredBasenames: true,
	}
) {
	// handle deprecations
	if (opts.ignoreHiddenFiles != null)
		throw new Error(
			'ignorefs: ignoreHiddenFiles is deprecated, use ignoreHiddenBasenames instead, otherwise use the default export for a compatibility layer'
		)
	if (opts.ignoreCommonPatterns != null)
		throw new Error(
			'ignorefs: ignoreCommonPatterns is deprecated, use ignoreUndesiredBasenames instead, otherwise use the default export for a compatibility layer'
		)
	if (opts.ignorePaths != null)
		throw new Error(
			'ignorefs: ignorePaths is deprecated, use ignoreAbsolutePaths, ignoreRelativePaths, and ignoreBasenames instead, otherwise use the default export for a compatibility layer'
		)

	// extract components of the path
	const { absolutePath, relativePath, basename } = path

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
		if (opts.ignoreCustomPatterns?.test(absolutePath)) return true
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
		if (opts.ignoreCustomPatterns?.test(relativePath)) return true
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
		if (opts.ignoreCustomPatterns?.test(basename)) return true
	}

	// not ignored
	return false
}

/** Verify options and upgrade deprecations, returns dereferenced copy */
export function upgradeOptions(opts: Options): Options {
	opts = Object.assign({}, opts)
	if (opts.ignoreHiddenFiles != null) {
		opts.ignoreHiddenBasenames = opts.ignoreHiddenFiles
		delete opts.ignoreHiddenFiles
	}
	if (opts.ignoreCommonPatterns != null) {
		opts.ignoreUndesiredBasenames = opts.ignoreCommonPatterns
		delete opts.ignoreCommonPatterns
	}
	if (opts.ignorePaths) {
		opts.ignoreAbsolutePaths = [
			...(opts.ignoreAbsolutePaths || []).map((match) => {
				if (typeof match === 'string' && !isAbsolute(match))
					throw new Error(
						'ignorefs: ignoreAbsolutePaths should only contain absolute paths and regular expressions'
					)
				return match
			}),
			...(opts.ignorePaths || []).filter((match) =>
				typeof match === 'string' ? isAbsolute(match) : true
			),
		]
		opts.ignoreRelativePaths = [
			...(opts.ignoreRelativePaths || []).map((match) => {
				if (typeof match === 'string' && !isRelative(match))
					throw new Error(
						'ignorefs: ignoreRelativePaths should only contain relative paths and regular expressions'
					)
				return match
			}),
			...(opts.ignorePaths || []).filter((match) =>
				typeof match === 'string' ? isRelative(match) : true
			),
		]
		opts.ignoreBasenames = [
			...(opts.ignoreBasenames || []).map((match) => {
				if (typeof match === 'string' && !isBasename(match))
					throw new Error(
						'ignorefs: ignoreBasenames should only contain basebanes and regular expressions'
					)
				return match
			}),
			...(opts.ignorePaths || []).filter((match) =>
				typeof match === 'string' ? isBasename(sep) : true
			),
		]
		delete opts.ignorePaths
	}
	return opts
}

/** Compatibility wrapper for {@link isIgnoredPath}, supporting path string, verifying path object and options, and handling option deprecations */
export default function isIgnoredPathCompatibility(
	path: Path | string,
	opts: Options = {
		ignoreUndesiredBasenames: true,
	}
) {
	// adjust path
	if (typeof path === 'string') {
		if (!path) throw new Error('ignorefs: path cannot be empty')
		const result: Path = {}
		if (isAbsolute(path)) result.absolutePath = path
		else result.relativePath = path
		result.basename = getBasename(path)
		path = result
	} else {
		// verify
		if (path.absolutePath && !isAbsolute(path.absolutePath))
			throw new Error('ignorefs: path.absolutePath must be an absolute path')
		if (path.relativePath && !isRelative(path.relativePath))
			throw new Error('ignorefs: path.relativePath must be a relative path')
		if (path.basename && !isBasename(path.basename))
			throw new Error('ignorefs: path.basename must be a basename')
	}

	// upgrade options and return result from modern api
	return isIgnoredPath(path, upgradeOptions(opts))
}
