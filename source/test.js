# Import
{expect, assert} = require('chai')
joe = require('joe')
ignoreFS = require('../../')


# =====================================
# Tests

joe.describe 'ignorefs', (describe, it) ->
	it 'should pass with no tests', ->
		console.log(ignoreFS)
