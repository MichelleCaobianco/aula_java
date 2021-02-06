var nome = "Dark Side of the Force";
alert("Welcome to the " + nome);
var frase = "Through Passion I gain Strength,Through Strength I gain Power,Through Power I gain Victory,Through Victory my chains are Broken,The Force shall free me."; 
console.log(frase);

function clicou(){
    document.getElementById("SithCode").innerHTML = "Through Passion I gain Strength.Through Strength I gain Power.Through Power I gain Victory.Through Victory my chains are Broken.The Force shall free me!";
   
}

var Sith = prompt("Escolha um número e direi seu Sith Lord!");
if (Sith <= 100){
    alert("Darth Sidious");
} else {
    alert("Darth Plagueis");
};
