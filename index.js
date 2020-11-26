
 //const string = document.querySelector('.string');
 const a = document.querySelector('.word1');
 const b = document.querySelector('.word2');
 const wo1 = 'hello';
 const wo2 = 'cat';

 const s = 'dog cat hello cat dog dog hello cat dog world dog hello';
 console.log(s);
const arrStr = s.split(' ');
console.log(arrStr[3]);

function countNum(arrStr, w1, w2) {
 //  if (w1 === w2) { return 0} 

return arrStr.reduce(function(memo, item, index, array)
	{
        let count;
       if (item === w1) {
           console.log(count = 0);
         
       }
       else if (item === w2) {
        console.log(item);
           console.log(count);
       }
       count = count + 1;
		
	}, 0);
};

countNum(arrStr, wo1, wo2);


 //document.querySelector('.min-count').addEventListener('click', smallestWordDistance(s, a, b))
