
var valorDolar = "";
var taxaDolar = "";

function calculaDolar () {
    valorDolar = document.getElementById('valorDolar').value;
    
    taxaDolar = document.getElementById('taxaDolar').value;
    //prompt("Qual o valor em dolar que você quer converter?")
    //var valorEmDolarNumero = parseFloat(document.getElementById(valorDolar));
    //alert(valorEmDolarNumero.toString());

    var valorEmReal = valorDolar * taxaDolar;
    var valorEmRealFixado = valorEmReal.toFixed(2);    
    //alert(valorEmRealFixado);
    document.getElementById('valorCalculado').innerHTML = "Valor em R$ " + valorEmRealFixado;
}



//Revisão
// variaveis var int- float - string
// alert parseInt parseFloat prompt
// operações + somar * multiplicar 
// comentario final