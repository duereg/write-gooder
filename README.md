[![Build Status](https://travis-ci.org/duereg/write-gooder.svg)](https://travis-ci.org/duereg/write-gooder)
[![Dependencies](https://david-dm.org/duereg/write-gooder.svg)](https://david-dm.org/duereg/write-gooder)
[![devDependencies](https://david-dm.org/duereg/write-gooder/dev-status.svg)](https://david-dm.org/duereg/write-gooder#info=devDependencies&view=table)

# write gooder

Naive linter for English prose for developers who can't write good and wanna do other stuff good too.

A fork of [write-good](http://www.github.com/btford/write-good) by Brian Ford.

## Use

```shell
npm install duereg/write-gooder
```

**Important:** Do not use this tool to be a jerk to other people about their writing.

## API

`writeGooder` is a function that takes a string and returns an array of suggestions.

```javascript
var writeGooder = require('write-gooder');

var suggestions = writeGooder('So the cat was stolen.');

// suggestions:
//
// [{
//   suggestion: "omit 'So' from the beginning of sentences",
//   index: 0, offset: 2
// }, {
//   suggestion: "'was stolen' is passive voice",
//   index: 11, offset: 10
// }]
```

## CLI

You can use `write-gooder` as a command-line tool by installing it globally:

```shell
npm install -g duereg/write-gooder
```

`write-gooder` takes a [glob](https://github.com/isaacs/node-glob) and prints suggestions to stdout:

```shell
$ write-gooder *.md

In README.md
=============
 = writeGooder('So the cat was stolen.');
"was stolen" is passive voice
line 20 column 40
-------------
//   suggestion: "'was stolen' is passive voice",
"was stolen" is passive voice
line 28 column 19
```

You can run just specific checks like this:

```shell
write-gooder *.md --weasel --so
```

Or exclude checks like this:

```shell
write-gooder *.md --no-passive
```

## License
MIT
