//castle crashers tool js scripts

function picking(){
var charput = document.getElementById('charinput').value;
var title = document.getElementById('chartitle');
var info = document.getElementById('charinfo');
var castlepic = document.getElementById('charpic');

switch(charput) {
case 'red':
title.innerHTML = "<h2>Red Knight</h2>";
info.innerHTML = "This is the red knight.";
castlepic.innerHTML ="<div class='row'><div class='col-md-4'><div class='thumbnail'> <img src='images/castle/red.png'></img> </div></div>";
break;
}
}
