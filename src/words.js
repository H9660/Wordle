
import wordBank from "./wordbanks/general_bank.txt"
import citiesBank from "./wordbanks/cities_bank.txt";
import animalsBank from "./wordbanks/animal_bank.txt";

export const defaultState = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordSet = new Array(wordArr);
    });
  return { wordSet, todaysWord };
};

export const generateAnimalset = async () => {
  let wordSet;
  let todaysWord;
  await fetch(animalsBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordSet = new Array(wordArr);
    });
  return { wordSet, todaysWord };
};

export const generateCitiesSet = async () => {
  let wordSet;
  let todaysWord;
  await fetch(citiesBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordSet = new Array(wordArr);
    });
  return { wordSet, todaysWord };
};