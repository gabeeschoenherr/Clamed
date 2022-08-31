let numArr = [3,4,56,6,23];
let soma = 0;
let media;

let arr = (item) => {
  item.forEach(somar => {
   soma += somar;
   });
  media = soma / numArr.length; 
}



arr(numArr);
console.log(soma);
console.log(media);