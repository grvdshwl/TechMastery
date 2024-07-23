//*
//* Word Pattern
var wordPattern = function (pattern, s) {
  const mapWord = new Map();
  const mapChar = new Map();
  const words = s.split(" ");

  if (words.length !== pattern.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (
      (mapWord.has(char) && mapWord.get(char) !== word) ||
      (mapChar.has(word) && mapChar.get(word) !== char)
    ) {
      return false;
    }

    mapWord.set(char, word);
    mapChar.set(word, char);
  }

  return true;
};
