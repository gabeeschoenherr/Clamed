var alt = prompt("Digite sua altura (use o ponto):");
var peso =  prompt("Digite seu peso:");
var imc = (peso / (alt * alt)).toFixed(1);

document.write("seu IMC é ",imc );

if(imc >= 25) {
    alert("Você está acima do peso, procure um médico");
}
else if(imc >= 18.5 && imc < 24.9){
    document.write("<h3>Parabéns! Você está no peso ideal</h3>");
}
else if (imc<18.5){
    document.write("<h3>Você está abaixo do peso, procure um médico.</h3>");
    
}
