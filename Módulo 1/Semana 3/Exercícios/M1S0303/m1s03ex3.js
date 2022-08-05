

function parImpar(num = []) {
    let qImpar = 0;
    let qPar = 0;
    

    for (let i = 0; i<num.length ;i++) {
    var resto = num[i]%2;
if(resto==0) {
    qPar++;
}
else{
    qImpar++;
}
  
  }
  document.write ("A quantidade de elementos na lista é: ",num.length ,". A quantidade de números pares é: ", qPar,". A quantidade de números ímpares é: ", qImpar);
}

  parImpar(num = [1, 12, 14, 7, 8, 9, 13]);