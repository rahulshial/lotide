// FUNCTION IMPLEMENTATION

const letterPositions = function(sentence) {
  const letterIdxLib = {};
  // logic to update results here

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i]; // get the letter at position i
    if (letter !== ' ') {
      if (!Array.isArray(letterIdxLib[letter])) {
        // The array within the letter does not exist in the letterIdxLib
        letterIdxLib[letter] = [i];
      } else {
        letterIdxLib[letter].push(i);
      }
    }
  }
  return letterIdxLib;
};

module.exports = letterPositions;

