let numArr = [3,4,56,6,23,-12,-45,-5,7];
let positivos = [];
let soma = 0;
let media;

let arr = (item) => {
  item.forEach(pos => {
  if (pos>0){
    positivos.push(pos);
  }
})};

arr(numArr);
console.log(numArr);
console.log (positivos);
