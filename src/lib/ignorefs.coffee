# Import
pathUtil = require('path')
ignorePatterns = require('ignorepatterns')

# Define
ignoreFS =
	# Is Ignored Path
	# opts={ignorePaths, ignoreHiddenFiles, ignoreCommonPatterns, ignoreCustomPatterns}
	# returns true/false
	isIgnoredPath: (path, opts={}) ->
		# Prepare
		result = false
		basename = pathUtil.basename(path)
		opts.ignorePaths ?= false
		opts.ignoreHiddenFiles ?= false
		opts.ignoreCommonPatterns ?= true
		opts.ignoreCustomPatterns ?= false

		# Fetch the common patterns to ignore
		if opts.ignoreCommonPatterns is true
			opts.ignoreCommonPatterns = ignorePatterns

		# Test Ignore Paths
		if opts.ignorePaths
			for ignorePath in opts.ignorePaths
				if path.indexOf(ignorePath) is 0
					result = true
					break

		# Test Ignore Patterns
		result =
			result or
			(opts.ignoreHiddenFiles    and /^\./.test(basename)) or
			(opts.ignoreCommonPatterns and opts.ignoreCommonPatterns.test(basename)) or
			(opts.ignoreCommonPatterns and opts.ignoreCommonPatterns.test(path)) or
			(opts.ignoreCustomPatterns and opts.ignoreCustomPatterns.test(basename)) or
			(opts.ignoreCustomPatterns and opts.ignoreCustomPatterns.test(path)) or
			false

		# Return
		return result

# Export
module.exports = ignoreFS