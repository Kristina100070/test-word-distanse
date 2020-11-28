const a = document.querySelector('.word1');
const b = document.querySelector('.word2');
const string = document.querySelector('.string');

function countMinDistance(str, wordA, wordB) {
    let wordAIndex = null;
    let wordBIndex = null;
    let words = str.split(" ");
    let length = words.length;
    for (var i = 0; i < length; i++) {
      
      if (words[i] === wordA) {
        wordAIndex = words.indexOf(words[i]);
      }
  
      if (words[i] === wordB) {
        wordBIndex = words.indexOf(words[i]);
      }
  
      if (wordAIndex !== null && wordBIndex !== null) {
        let distance = Math.abs(wordAIndex - wordBIndex) - 1;
        document.querySelector('.result1').textContent = `Минимальная дистанция  ${distance} `;
        return distance;
      }
    }
}

document.querySelector('.min-count').addEventListener('click', (event) => {
event.preventDefault;
countMinDistance(string.value, a.value, b.value)
});

function countMaxDistance(str, wordA, wordB) {
    let wordAIndex = null;
    let wordBIndex = null;
    let words = str.split(" ");
    let length = words.length;
    for (var i = 0; i < length; i++) {
      
      if (words[i] === wordA) {
        wordAIndex = words.indexOf(words[i]);
      }
  
      if (words[i] === wordB) {
        wordBIndex = words.lastIndexOf(words[i]);
      }
  
      if (wordAIndex !== null && wordBIndex !== null) {
        let distance = Math.abs(wordAIndex - wordBIndex) - 1;
        document.querySelector('.result2').textContent = `Максимальная дистанция  ${distance}`;
        return distance;
      }
      
    }
}

document.querySelector('.max-count').addEventListener('click', (event) => {
event.preventDefault;
countMaxDistance(string.value, a.value, b.value)
});
