/* @flow */
'use strict'

// Import
const {equal} = require('assert-helpers')
const joe = require('joe')
const ignorefs = require('../')

// Tests
joe.suite('ignorefs', function (suite) {

	suite('common patterns', function (suite, test) {
		// Prepare
		const ignoreExpected = {
			// Vim
			'~': true,
			'~something': true,
			'something~': true,
			'something~something': false,

			// Emacs
			'.#': true,
			'.#something': true,
			'something.#': false,
			'something.#something': false,

			// Vi
			'.swp': true,
			'aswp': false,
			'something.swp': true,
			'.swpsomething': false,

			// SVN
			'.svn': true,
			'asvn': false,
			'something.svn': false,
			'something.svnsomething': false,

			// GIT
			'.git': true,
			'agit': false,
			'something.git': false,
			'something.gitsomething': false,

			// HG
			'.hg': true,
			'ahg': false,
			'something.hg': false,
			'something.hgsomething': false,

			// DS_Store
			'.DS_Store': true,
			'something.DS_Store': false,
			'something.DS_Storesomething': false,

			// Node
			'node_modules': true,
			'somethingnode_modules': false,
			'somethingnode_modulessomething': false,

			// CVS
			'CVS': true,
			'somethingCVS': false,
			'somethingCVSsomething': false,

			// Thumbs
			'thumbs.db': true,
			'thumbsadb': false,

			// Desktop
			'desktop.ini': true,
			'desktopaini': false
		}

		// Tests
		Object.keys(ignoreExpected).forEach(function (path) {
			const resultExpected = ignoreExpected[path]
			const testName = `${resultExpected ? 'should' : 'should not'} ignore ${path}`
			test(testName, function () {
				const resultActual = ignorefs.isIgnoredPath(path)
				equal(resultActual, resultExpected, 'ignored result was as expected')
			})
		})
	})

	suite('ignore paths', function (suite, test) {
		// Prepare
		const ignoreExpected = {
			'/usr/awesome': false,
			'/tmp/awesome': true,
			'/usr/tmp/awesome': true
		}

		// Tests
		Object.keys(ignoreExpected).forEach(function (path) {
			const resultExpected = ignoreExpected[path]
			const testName = `${resultExpected ? 'should' : 'should not'} ignore ${path}`
			test(testName, function () {
				const resultActual = ignorefs.isIgnoredPath(path, {
					ignorePaths: ['/tmp', '/usr/tmp']
				})
				equal(resultActual, resultExpected, 'ignored result was as expected')
			})
		})
	})
})
