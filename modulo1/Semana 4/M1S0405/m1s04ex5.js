let array1 = [1,3,4,5,3,7];
let array2 = [1,2,6,4,8,5];

let arrayT = array1.concat(array2);
console.log (arrayT);
let arrayF = arrayT.filter(function(item, pos){
   return arrayT.indexOf(item) == pos;
})
 console.log(arrayF);
 let arrayFinal = arrayF.sort((a, b) => a - b);
 console.log(arrayFinal);

   

