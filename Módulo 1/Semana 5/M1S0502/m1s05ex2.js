let num = 2;
let numArr = [3,5,6,7,8,9,20,54,87];
let arrayFiltrado = [];
let item;

function par (item){
 if (item%2 == 0){
    return true;

 }
 else {
    return false;
 }
}

function impar(item){
    if (item%2 != 0){
        return true;
    
     }
     else {
        return false;
     }
}

function principal (item, callback){
  arrayFiltrado = item.map(callback);
}

principal (numArr, impar);
console.log (arrayFiltrado);
