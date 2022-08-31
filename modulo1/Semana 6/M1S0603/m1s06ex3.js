let num = 3;
const par = new Promise((resolve, reject) => {
 
    if (num%2 == 0) {
       
            resolve();
    } else {
        reject("Erro: número impar!");
    }
})
console.log(num);
par.then((resolve)=>{
   console.log("Número validado é par.");
}).catch(
  (err)=>{console.error(err)}
);
