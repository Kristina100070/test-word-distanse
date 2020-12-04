const a = document.querySelector('.word1');
const b = document.querySelector('.word2');
const string = document.querySelector('.string');

function countDistance(str, wordA, wordB, e) {
    
    let wordAIndex = null;
    let wordBIndex = null;
    let words = str.split(" ");

    words.forEach(function(item, i, arr) {
      if (item === wordA) {
        wordAIndex = arr.indexOf(arr[i]);
      }
      if (item === wordB && e.target.classList.contains("min-count")) {
        wordBIndex = arr.indexOf(arr[i]);
      }
      if (item === wordB && e.target.classList.contains("max-count")) {
        wordBIndex = arr.lastIndexOf(arr[i]);
      }
      if (wordAIndex !== null && wordBIndex !== null) {
      let distance = Math.abs(wordAIndex - wordBIndex) - 1;
      document.querySelector('.result').textContent = `Дистанция  ${distance} `;
      }
    });
} 

document.querySelector('.button').addEventListener('click', (event) => {
event.preventDefault;
countDistance(string.value, a.value, b.value, event)
});