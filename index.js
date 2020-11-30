const a = document.querySelector('.word1');
const b = document.querySelector('.word2');
const string = document.querySelector('.string');

function countMinDistance(str, wordA, wordB, e) {
    ;
    let wordAIndex = null;
    let wordBIndex = null;
    let words = str.split(" ");
    let length = words.length;
    for (var i = 0; i < length; i++) {
     
      if (words[i] === wordA) {
        wordAIndex = words.indexOf(words[i]);
      }
  
      if (words[i] === wordB && e.target.classList.contains("min-count")) {
           wordBIndex = words.indexOf(words[i]);
           console.log(wordBIndex);
        }
      if (words[i] === wordB && e.target.classList.contains("max-count")) {
           wordBIndex = words.lastIndexOf(words[i]);
       }
      
      if (wordAIndex !== null && wordBIndex !== null) {
        let distance = Math.abs(wordAIndex - wordBIndex) - 1;
        document.querySelector('.result').textContent = `Минимальная дистанция  ${distance} `;
        return distance;
      }
    }
}

document.querySelector('.button').addEventListener('click', (event) => {
event.preventDefault;
countMinDistance(string.value, a.value, b.value, event)
});

