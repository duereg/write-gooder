// annotate file contents with suggestions
module.exports = function (contents, suggestions) {
  var translocator = require('translocator')(contents);

  return suggestions.map(function (suggestion) {
    var lineColumn = translocator.location(suggestion.index);

    var fix = 0;

    if (lineColumn.column > 25) {
      fix = lineColumn.column - 25;
    }

    var lineSegment = translocator._lines[lineColumn.line].substr(fix, 80);

    return [
      lineSegment,
      repeatChar(' ', lineColumn.column - fix) + repeatChar('^', suggestion.offset),
      suggestion.reason + ' on line ' + (lineColumn.line + 1) + ' at column ' + (lineColumn.column)
    ].join('\n');
  });
}

function repeatChar (ch, times) {
  var str = '';
  for (var i = times; i > 0; i--) {
    str += ch;
  }
  return str;
}
