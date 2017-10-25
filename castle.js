// object function for character's info
function castleChar(name, desc, img, startweapon, magic, unlock){
  this.name = name;
  this.desc = desc;
  this.img = img;
  this.startweapon = startweapon;
  this.magic = magic;
  this.unlock = unlock;
}

//function to uppercase the first letter of a string
function first(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//variables for each character
var red = new castleChar("Red Knight", "Description", "image", "Mace", "Electricity", "Default");
var green = new castleChar("Green Knight", "Description", "image", "Thin Sword", "Poison", "Default");

// function to update the html page
function update() {
var charput = document.getElementById('castleinput');
var charvalue = document.getElementById('castleinput').value;
var charpic = document.getElementById('charpic');
var title = document.getElementById('chartitle');
var castlethumb = document.getElementById('castlethumb');
var castleweapon = document.getElementById('startweapon');
var castlemagic = document.getElementById('magic');
var castleunlock = document.getElementById('unlock');
title.textContent = first(charvalue); //sets title to the name of the picked character
castlethumb.style.display = "initial";
switch(charvalue) { //sorts between character values
  case 'choose':
  title.textContent = "";
  castlethumb.style.display = "none";
  charpic.src = "";
  break;
  case 'Red Knight':
  charpic.src='images/castle/red.png';
  castleweapon.textContent = red.startweapon;
  castlemagic.textContent = red.magic;
  castleunlock.textContent = red.unlock;
  break;
  case 'Green Knight':
  charpic.src= 'images/castle/green.png';
  castleweapon.textContent = green.startweapon;
  castlemagic.textContent = green.magic;
  castleunlock.textContent = green.unlock;
  break;
}



}
