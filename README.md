# Upper Dot Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]

Upper dot case a string.

Supports Unicode (non-ASCII characters) and non-string entities, such as objects with a `toString` property, numbers and booleans. Empty values (`null` and `undefined`) will result in an empty string.

## Installation

```
npm install upper-dot-case --save
```

## Usage

```javascript
var upperDotCase = require('upper-dot-case')

upperDotCase('string')        //=> "String"
upperDotCase('camelCase')     //=> "Camel.Case"
upperDotCase('sentence case') //=> "Sentence.Case"

upperDotCase('MY STRING', 'tr') //=> "My.Strıng"
```

## Typings

Includes a [TypeScript definition](upper-dot-case.d.ts).

## License

MIT

[npm-image]: https://badge.fury.io/js/upper-dot-case.svg?style=flat
[npm-url]: https://npmjs.org/package/upper-dot-case
[downloads-image]: https://img.shields.io/npm/dm/upper-dot-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/upper-dot-case
[travis-image]: https://travis-ci.org/dsappet/upper-dot-case.svg?branch=master&style=flat
[travis-url]: https://travis-ci.org/dsappet/upper-dot-case