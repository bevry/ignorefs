<!-- TITLE/ -->

<h1>IgnoreFS</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-travisci"><a href="http://travis-ci.org/bevry/ignorefs" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/bevry/ignorefs/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/ignorefs" title="View this project on NPM"><img src="https://img.shields.io/npm/v/ignorefs.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/ignorefs" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/ignorefs.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/bevry/ignorefs" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/bevry/ignorefs.svg" alt="Dependency Status" /></a></span>
<span class="badge-daviddmdev"><a href="https://david-dm.org/bevry/ignorefs#info=devDependencies" title="View the status of this project's development dependencies on DavidDM"><img src="https://img.shields.io/david/dev/bevry/ignorefs.svg" alt="Dev Dependency Status" /></a></span>
<br class="badge-separator" />
<span class="badge-slackin"><a href="https://slack.bevry.me" title="Join this project's slack community"><img src="https://slack.bevry.me/badge.svg" alt="Slack community badge" /></a></span>
<span class="badge-patreon"><a href="http://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-gratipay"><a href="https://www.gratipay.com/bevry" title="Donate weekly to this project using Gratipay"><img src="https://img.shields.io/badge/gratipay-donate-yellow.svg" alt="Gratipay donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-bitcoin"><a href="https://bevry.me/bitcoin" title="Donate once-off to this project using Bitcoin"><img src="https://img.shields.io/badge/bitcoin-donate-yellow.svg" alt="Bitcoin donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Ignore common and custom patterns of the file system

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

<h2>Install</h2>

<a href="https://npmjs.com" title="npm is a package manager for javascript"><h3>NPM</h3></a><ul>
<li>Install: <code>npm install --save ignorefs</code></li>
<li>Module: <code>require('ignorefs')</code></li></ul>

<a href="http://browserify.org" title="Browserify lets you require('modules') in the browser by bundling up all of your dependencies"><h3>Browserify</h3></a><ul>
<li>Install: <code>npm install --save ignorefs</code></li>
<li>Module: <code>require('ignorefs')</code></li>
<li>CDN URL: <code>//wzrd.in/bundle/ignorefs@1.1.0</code></li></ul>

<a href="http://enderjs.com" title="Ender is a full featured package manager for your browser"><h3>Ender</h3></a><ul>
<li>Install: <code>ender add ignorefs</code></li>
<li>Module: <code>require('ignorefs')</code></li></ul>

<h3><a href="https://github.com/bevry/editions" title="Editions are the best way to produce and consume packages you care about.">Editions</a></h3>

<p>This package is published with the following editions:</p>

<ul><li><code>ignorefs</code> aliases <code>ignorefs/index.js</code> which uses <a href="https://github.com/bevry/editions" title="Editions are the best way to produce and consume packages you care about.">Editions</a> to automatically select the correct edition for the consumers environment</li>
<li><code>ignorefs/source/index.js</code> is Source + <a href="https://babeljs.io/docs/learn-es2015/" title="ECMAScript Next">ESNext</a> + <a href="https://nodejs.org/dist/latest-v5.x/docs/api/modules.html" title="Node/CJS Modules">Require</a></li>
<li><code>ignorefs/es2015/index.js</code> is <a href="https://babeljs.io" title="The compiler for writing next generation JavaScript">Babel</a> Compiled + <a href="http://babeljs.io/docs/plugins/preset-es2015/" title="ECMAScript 2015">ES2015</a> + <a href="https://nodejs.org/dist/latest-v5.x/docs/api/modules.html" title="Node/CJS Modules">Require</a></li></ul>

<p>Older environments may need <a href="https://babeljs.io/docs/usage/polyfill/" title="A polyfill that emulates missing ECMAScript environment features">Babel's Polyfill</a> or something similar.</p>

<!-- /INSTALL -->


## Usage

``` javascript
var isIgnored = require('ignorefs').isIgnoredPath(path, {
	ignorePaths: false, // array of paths to ignore
	ignoreHiddenFiles: false, // whether or not we should ignore files that start with a dot
	ignoreCommonPatterns: true, // whether or not we should common patterns like "thumbs.db" etc, uses https://github.com/bevry/ignorepatterns
	ignoreCustomPatterns: false, // can be a regex that is tested against the basename of the file and the file's path
});
console.log(isIgnored);  // true or false
```


<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/bevry/ignorefs/blob/master/HISTORY.md#files">Discover the release history by heading on over to the <code>HISTORY.md</code> file.</a>

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

<h2>Contribute</h2>

<a href="https://github.com/bevry/ignorefs/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

<h2>Backers</h2>

<h3>Maintainers</h3>

These amazing people are maintaining this project:

<ul><li><a href="http://balupton.com">Benjamin Lupton</a></li></ul>

<h3>Sponsors</h3>

No sponsors yet! Will you be the first?

<span class="badge-patreon"><a href="http://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-gratipay"><a href="https://www.gratipay.com/bevry" title="Donate weekly to this project using Gratipay"><img src="https://img.shields.io/badge/gratipay-donate-yellow.svg" alt="Gratipay donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-bitcoin"><a href="https://bevry.me/bitcoin" title="Donate once-off to this project using Bitcoin"><img src="https://img.shields.io/badge/bitcoin-donate-yellow.svg" alt="Bitcoin donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>

<h3>Contributors</h3>

These amazing people have contributed code to this project:

<ul><li><a href="http://balupton.com">Benjamin Lupton</a></li>
<li><a href="https://balupton.com">Benjamin Lupton</a> — <a href="https://github.com/bevry/ignorefs/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository bevry/ignorefs">view contributions</a></li></ul>

<a href="https://github.com/bevry/ignorefs/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /BACKERS -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2012+ <a href="http://bevry.me">Bevry Pty Ltd</a></li>
<li>Copyright &copy; 2011 <a href="http://balupton.com">Benjamin Lupton</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
