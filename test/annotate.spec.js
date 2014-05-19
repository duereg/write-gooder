var writeGood = require('../write-good');

describe('annotate', function () {
  var annotate = writeGood.annotate;

  it('should detect weasel words', function () {
    var text = 'Remarkably few developers write well.'
    var suggestions = writeGood(text);
    var annotations = annotate(text, suggestions);

    expect(annotations[0]).toBe(
      'Remarkably few developers write well.\n' +
      '"Remarkably" is a weasel word\n' +
      'line 1 column 1');

    expect(annotations[1]).toBe(
      'Remarkably few developers write well.\n' +
      '"few" is a weasel word\n' +
      'line 1 column 12');
  });
});