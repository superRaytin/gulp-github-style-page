# gulp-github-style-page
> Converting markdown content with [github-style-page](https://github.com/superRaytin/github-style-page).

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![Build Status](https://travis-ci.org/superRaytin/gulp-github-style-page.svg?branch=master)](https://travis-ci.org/superRaytin/gulp-github-style-page)

[![gulp-github-style-page](https://nodei.co/npm/gulp-github-style-page.png)](https://npmjs.org/package/gulp-github-style-page)

[npm-url]: https://npmjs.org/package/gulp-github-style-page
[downloads-image]: http://img.shields.io/npm/dm/gulp-github-style-page.svg
[npm-image]: http://img.shields.io/npm/v/gulp-github-style-page.svg

# Installation

```
npm install gulp gulp-github-style-page --save-dev
```

# Quick Start

```js
var gulp = require('gulp');
var githubStylePage = require('gulp-github-style-page');

gulp.task('taskName', function() {
    return gulp.src('path/to/README.md')
        .pipe(githubStylePage())
        .pipe(gulp.dest('dist'));
});
```

Customize template:

```js
gulp.task('taskName2', function() {
    return gulp.src('path/to/README.md')
        .pipe(githubStylePage({
            customizeTemplatePath: 'path/to/customTemplate.html',
            vars: {
                t: 'awesome',
                v: '0.1.2'
            }
        }))
        .pipe(gulp.dest('dist'));
});
```

Use built-in template:

```js
gulp.task('taskName3', function() {
    return gulp.src('path/to/README.md')
        .pipe(githubStylePage({
            template: 'project',
            vars: {
                pkg: {
                    name: 'awesome',
                    version: '0.1.0'
                },
                examples: ['simple', 'complex']
            }
        }))
        .pipe(gulp.dest('dist'));
});
```

## Options

See [github-style-page#options](https://github.com/superRaytin/github-style-page#options) for detail.

# Testing

```
npm test
```

# License

MIT, see the [LICENSE](/LICENSE) file for detail.
