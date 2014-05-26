[![Build Status](https://travis-ci.org/duereg/write-good.png)](https://travis-ci.org/duereg/write-good)
[![Dependencies](https://david-dm.org/duereg/write-good.png)](https://david-dm.org/duereg/write-good)
[![devDependencies](https://david-dm.org/duereg/write-good/dev-status.png)](https://david-dm.org/duereg/write-good#info=devDependencies&view=table)
[![NPM version](https://badge.fury.io/js/write-gooder.svg)](http://badge.fury.io/js/write-gooder)

# write gooder

Naive linter for English prose for developers who can't write good and wanna do other stuff good too.

A fork of [write-good](http://www.github.com/btford/write-good) by Brian Ford.

## Use

```shell
npm install write-gooder
```

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

`writeGooder` takes an optional second argument that allows you to disable certain checks.

You can disable checking for passive voice like this:

```javascript
var writeGooder = require('write-gooder');

var suggestions = writeGooder('So the cat was stolen', { passive: false});
// suggestions: []
```


## CLI

You can use `write-gooder` as a command-line tool by installing it globally:

```shell
npm install -g write-gooder
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


## Checks

You can disable any combination of the following by providing a key with value `false` as the second argument to `writeGooder`.

### `passive`
Checks for passive voice.

### `illusion`
Checks for lexical illusions – cases where a word is repeated.

### `so`
Checks for `so` at the beginning of the sentence.

### `weasel`
Checks for "weasel words."


## See also

I came across these resources while doing research to make this module.
They might be helpful.

### Code

* [shell script for avoiding "weasel words"](http://matt.might.net/articles/shell-scripts-for-passive-voice-weasel-words-duplicates/) – I based my initial implementation on this
* [Academic Writing Check](https://github.com/devd/Academic-Writing-Check) – a perl script similar to above
* [writegood mode](https://github.com/bnbeckwith/writegood-mode) for emacs
* [natural](https://github.com/NaturalNode/natural) – general purpose NLP toolkit in JavaScript
* [WordNet](http://wordnet.princeton.edu/) – lexical database of the English language

### Prose

* [Elements of Style](http://www.bartleby.com/141/)
* [Flesch–Kincaid readability](http://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_test)
* [Fear and Loathing of the English passive](http://www.lel.ed.ac.uk/~gpullum/passive_loathing.pdf)

### Apps

This is not an endorsement.
These apps have similar functionality that you may find useful.

* [Hemingway App](http://www.hemingwayapp.com/)
* [Nitpicker](http://nitpickertool.com)

## License
MIT
