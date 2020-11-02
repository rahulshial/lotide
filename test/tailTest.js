// TEST CODE
const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const oneWord = ["Yo Yo"];
tail(oneWord);
assertEqual(oneWord.length, 1);