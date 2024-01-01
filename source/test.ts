/* eslint camelcase:0 */

// external
import { equal } from 'assert-helpers'
import kava from 'kava'

// local
import isIgnoredPathCompatibility, { isIgnoredPath } from './index.js'
import { deepEqual } from 'assert'

// Tests
kava.suite('ignorefs', function (suite, test) {
	suite('common patterns', function (suite, test) {
		// Prepare
		const ignoreExpected: { [basename: string]: boolean } = {
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
			aswp: false,
			'something.swp': true,
			'.swpsomething': false,

			// SVN
			'.svn': true,
			asvn: false,
			'something.svn': false,
			'something.svnsomething': false,

			// GIT
			'.git': true,
			agit: false,
			'something.git': false,
			'something.gitsomething': false,

			// HG
			'.hg': true,
			ahg: false,
			'something.hg': false,
			'something.hgsomething': false,

			// DS_Store
			'.DS_Store': true,
			'something.DS_Store': false,
			'something.DS_Storesomething': false,

			// Node
			node_modules: true,
			somethingnode_modules: false,
			somethingnode_modulessomething: false,

			// CVS
			CVS: true,
			somethingCVS: false,
			somethingCVSsomething: false,

			// Thumbs
			'thumbs.db': true,
			thumbsadb: false,

			// Desktop
			'desktop.ini': true,
			desktopaini: false,
		}

		// Tests
		Object.keys(ignoreExpected).forEach(function (basename) {
			const resultExpected = ignoreExpected[basename]
			const testName = `${
				resultExpected ? 'should' : 'should not'
			} ignore ${basename}`
			test(testName, function () {
				const resultActual = isIgnoredPath({ basename })
				equal(resultActual, resultExpected, 'ignored result was as expected')
			})
		})
	})

	suite('ignore paths', function (suite, test) {
		// Prepare
		const ignoreExpected: { [absolutePath: string]: boolean } = {
			'/usr/awesome': false,
			'/tmp/awesome': true,
			'/usr/tmp/awesome': true,
		}

		// Tests
		Object.keys(ignoreExpected).forEach(function (absolutePath) {
			const resultExpected = ignoreExpected[absolutePath]
			const testName = `${
				resultExpected ? 'should' : 'should not'
			} ignore ${absolutePath}`
			test(testName, function () {
				const resultActual = isIgnoredPath(
					{ absolutePath },
					{
						ignoreAbsolutePaths: ['/tmp', '/usr/tmp'],
					}
				)
				equal(resultActual, resultExpected, 'ignored result was as expected')
			})
		})
	})

	test('callback includes custom', function () {
		const resultActual = isIgnoredPath(
			Object.assign({ custom: true, basename: 'file' }),
			{
				ignoreBasenames: ['file'],
				ignoreCustomCallback(path: any) {
					deepEqual(
						path,
						{ custom: true, basename: 'file' },
						'custom properties were as expected'
					)
				},
			}
		)
		equal(resultActual, true, 'ignored result was as expected')
	})

	suite('compatibility layer works', function (suite, test) {
		test('absolute', function () {
			const resultActual = isIgnoredPathCompatibility('/root', {
				ignorePaths: ['/root'],
				ignoreCustomCallback(path) {
					deepEqual(path, { absolutePath: '/root', basename: 'root' })
				},
			})
			equal(resultActual, true, 'ignored result was as expected')
		})
		test('relative', function () {
			const resultActual = isIgnoredPathCompatibility('dir/file', {
				ignorePaths: ['dir/'],
				ignoreCustomCallback(path) {
					deepEqual(path, { relativePath: 'dir/file', basename: 'file' })
					return true
				},
			})
			equal(resultActual, true, 'ignored result was as expected')
		})
		test('basename', function () {
			const resultActual = isIgnoredPathCompatibility('file', {
				ignorePaths: ['file'],
				ignoreCustomCallback(path) {
					deepEqual(path, { relativePath: 'file', basename: 'file' })
					return true
				},
			})
			equal(resultActual, true, 'ignored result was as expected')
		})
	})
})
