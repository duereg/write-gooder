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

    var reason = [
      suggestion.reason,
      'line: ' + (lineColumn.line + 1) + ', column: ' + (lineColumn.column)
    ].join('\n');

    if(lineSegment.length) {
      reason = lineSegment + '\n' + reason;
    }

    return reason;
  });
}

function repeatChar (ch, times) {
  var str = '';
  for (var i = times; i > 0; i--) {
    str += ch;
  }
  return str;
}
