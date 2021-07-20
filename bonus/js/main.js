
var nome = prompt("Scrivi il tuo nome");

var cognome = prompt("Scrivi il tuo cognome");

var colore = prompt("Scrivi il tuo colore preferito"); 

alert("Password sicura:" + nome + cognome + colore + "21");

function casuale() {
    var num = Math.round(Math.random() * 100);
    document.getElementById("casuale").innerHTML ="Numero casuale " + num;
}

