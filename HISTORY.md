# History

## v5.0.1 2024 January 2

-   Compatibility layer sets `absolutePath` and `relativePath` appropriately
-   Thank you to the sponsors: [Andrew Nesbitt](https://nesbitt.io), [Balsa](https://balsa.com), [Codecov](https://codecov.io), [Poonacha Medappa](https://poonachamedappa.com), [Rob Morris](https://github.com/Rob-Morris), [Sentry](https://sentry.io), [Syntax](https://syntax.fm)

## v5.0.0 2024 January 2

-   Rewrote to coincide with the v8 rewrite of [scandirectory](https://github.com/bevry/scandirectory), which if you use the default export it will remain backwards compatible
-   Solves `ignoreCustomPatterns` requiring `ignoreCommonPatterns` to be `false`
    -   Closes [issue #2017](https://github.com/bevry/ignorefs/issues/3) by [julrichkieffer](https://github.com/julrichkieffer)
-   Adds `ignoreCustomCallback` enabling custom ignore logic, such as adopting a globber or whatever
    -   Closes [issue #2](https://github.com/bevry/ignorefs/issues/2)
    -   Closes [issue bevry/watchr#44](https://github.com/bevry/watchr/issues/44) by [Vaughan Rouesnel](https://github.com/vjpr) and [C Dorn](https://github.com/cadorn)
-   `isIgnorePath` export now accepts a `Path` object comprising of `absolutePath`, `relativePath`, and `basename` for specific filtering
    -   `default` export can also accept a traditional `string`, which will fill `absolutePath`, `relativePath`, and resolve `basename`
-   Added `ignoreAbsolutePaths`, `ignoreRelativePaths`, and `ignoreBasenames` options to match specific forms of the path, against a prefix or a RegExp, with b/c for `ignorePaths` to append to each of them
-   `ignoreHiddenFiles` renamed with b/c to `ignoreHiddenBasenames` to match its expectation, as it only evaluates basenames not paths
-   `ignoreCommonPatterns` renamed with b/c to `ignoreUndesiredBasenames` to match its expectation, as it only evaluates basenames not paths
    -   `ignoreCommonPatterns` now only accepts a boolean (no longer accepts a regular expression), use `ignoreCustomPatterns` or `ignoreCustomCallback` instead
-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)
-   Thank you to the sponsors: [Andrew Nesbitt](https://nesbitt.io), [Balsa](https://balsa.com), [Codecov](https://codecov.io), [Poonacha Medappa](https://poonachamedappa.com), [Rob Morris](https://github.com/Rob-Morris), [Sentry](https://sentry.io), [Syntax](https://syntax.fm)

## v4.8.0 2023 December 31

-   Export Options type
-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)
-   Thank you to the sponsors: [Andrew Nesbitt](https://nesbitt.io), [Balsa](https://balsa.com), [Codecov](https://codecov.io), [Poonacha Medappa](https://poonachamedappa.com), [Rob Morris](https://github.com/Rob-Morris), [Sentry](https://sentry.io), [Syntax](https://syntax.fm)

## v4.6.0 2023 December 30

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)
-   Thank you to the sponsors: [Andrew Nesbitt](https://nesbitt.io), [Balsa](https://balsa.com), [Codecov](https://codecov.io), [Poonacha Medappa](https://poonachamedappa.com), [Rob Morris](https://github.com/Rob-Morris), [Sentry](https://sentry.io), [Syntax](https://syntax.fm)

## v4.5.0 2023 December 28

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)
-   Thank you to the sponsors: [Andrew Nesbitt](https://nesbitt.io), [Balsa](https://balsa.com), [Codecov](https://codecov.io/), [Poonacha Medappa](https://poonachamedappa.com), [Rob Morris](https://github.com/Rob-Morris), [Sentry](https://sentry.io), [Syntax](https://syntax.fm)

## v4.4.0 2023 December 6

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v4.3.0 2023 November 25

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v4.2.0 2023 November 21

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v4.1.0 2023 November 15

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v4.0.0 2023 November 14

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)
-   Minimum required Node.js version changed from `node: >=10` to `node: >=4` adapting to ecosystem changes

## v3.18.0 2023 November 1

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)
-   Updated license from [`MIT`](http://spdx.org/licenses/MIT.html) to [`Artistic-2.0`](http://spdx.org/licenses/Artistic-2.0.html)

## v3.17.0 2021 July 30

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v3.16.0 2021 July 29

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v3.15.0 2021 July 28

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v3.14.0 2020 October 29

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v3.13.0 2020 September 5

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v3.12.0 2020 August 18

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v3.11.0 2020 August 4

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v3.10.0 2020 July 22

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v3.9.0 2020 June 25

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v3.8.0 2020 June 21

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v3.7.0 2020 June 21

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v3.6.0 2020 June 20

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v3.5.0 2020 June 10

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v3.4.0 2020 June 10

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v3.3.0 2020 May 22

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v3.2.0 2020 May 21

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v3.1.0 2020 May 21

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v3.0.0 2020 May 6

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)
-   Minimum required node version changed from `node: >=8` to `node: >=10` to keep up with mandatory ecosystem changes

## v2.3.0 2019 December 9

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v2.2.0 2019 December 1

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v2.1.0 2019 December 1

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v2.0.0 2019 November 18

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)
-   Minimum required node version changed from `node: >=0.12` to `node: >=8` to keep up with mandatory ecosystem changes

## v1.4.1 2019 November 18

-   Converted from Flow Type to TypeSCript
-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v1.3.0 2019 November 11

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v1.2.0 2016 November 6

-   Rejigged internals, functionality should remain exactly the same
    -   Documentation is now generated from source code
    -   Added Flow Type Comments
    -   More efficient evaluation of ignore checks

## v1.1.1 2016 May 2

-   Fixed `browser` field

## v1.1.0 2016 May 2

-   Converted from CoffeeScript to ESNext

## v1.0.0 2013 December 10

-   Initial release extracted from [balupton/bal-util](https://github.com/balupton/bal-util/blob/6501d51bc0244fce3781fc0150136f7493099237/src/lib/paths.coffee#L298-L329)
