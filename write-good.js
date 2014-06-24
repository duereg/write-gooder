var checks = {
  weasels  : { fn: require('weasel-words'),            explanation: 'is a weasel word' },
  illusion : { fn: require('./lib/lexical-illusions'), explanation: 'is repeated' },
  so       : { fn: require('./lib/starts-with-so'),    explanation: 'adds no meaning' },
  thereIs  : { fn: require('./lib/there-is'),          explanation: 'is wordy or unneeded' },
  passive  : { fn: require('passive-voice'),           explanation: 'is passive voice' },
  adverb   : { fn: require('adverb-where'),            explanation: 'can weaken meaning'},
  complex  : { fn: require('too-wordy'),               explanation: 'is wordy or unneeded'},
  readable : { fn: require('automated-readability-index'), explanation: 'is hard to read'}
};

module.exports = function (text, opts) {
  opts = opts || {};
  var suggestions = [];
  Object.keys(checks).forEach(function (checkName) {
    if (opts[checkName] !== false) {
      suggestions = suggestions.concat(checks[checkName].fn(text).
                          map(reasonable(checks[checkName].explanation)));
    }
  });

  return dedup(suggestions).sort(function (a, b) {
    return a.index < b.index ? -1 : 1;
  });

  function reasonable (reason) {
    return function (suggestion) {
      suggestion.reason = '"' +
          text.substr(suggestion.index, suggestion.offset) +
          '" ' + reason;
      return suggestion;
    };
  }

  function dedup (suggestions) {
    var dupsHash = {},
        uniqSuggestions = [];

    suggestions.forEach(function(suggestion) {
      var key = suggestion.index + ":" + suggestion.offset;
      if (!dupsHash[key]) {
        dupsHash[key] = true;
        uniqSuggestions.push(suggestion);
      }
    });

    return uniqSuggestions;
  }
};

module.exports.annotate = require('./lib/annotate');
