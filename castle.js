// object function for each character's info
function castleChar(desc, startweapon, magic, unlock, wikitier){
  this.desc = desc;
  this.startweapon = startweapon;
  this.magic = magic;
  this.unlock = unlock;
  this.wikitier = wikitier;
}

//variables for each character
var red = new castleChar("Description", "Mace", "Electricity", "Default", "B");
var green = new castleChar("Description", "Thin Sword", "Poison", "Default", "D");
var blue = new castleChar("Description", "Sheathed Sword", "Ice", "Default", "S");
var orange = new castleChar("Description", "Broad Ax", "Fire", "Default", "B");
var gray = new castleChar("Description", "Skinny Sword", "Non-Elemental (Fire)", "Unlock the barbarian boss", "");


// function to update the html page
function update() {
// DOM variables regarding input & title / picture.
var charvalue = document.getElementById('castleinput').value;
var charpic = document.getElementById('charpic');
var title = document.getElementById('chartitle');
var castlethumb = document.getElementById('castlethumb');

//DOM variables regarding character information 
var castleweapon = document.getElementById('startweapon');
var castlemagic = document.getElementById('magic');
var castleunlock = document.getElementById('unlock');

//variables for common prefixs
var weaponprefix = "Starting Weapon: ";
var unlockprefix = "Unlock: ";
var magicprefix = "Magic: ";

title.textContent = charvalue; //sets title to the name of the picked character

castlethumb.style.display = "initial";

switch(charvalue) { //sorts between character values and sets the coressponding info
  case 'Red Knight':
  charpic.src='images/castle/red.png';
  castleweapon.textContent = weaponprefix + red.startweapon;
  castlemagic.textContent = magicprefix + red.magic;
  castleunlock.textContent = unlockprefix + red.unlock;
  break;
  case 'Green Knight':
  charpic.src= 'images/castle/green.png';
  castleweapon.textContent = weaponprefix + green.startweapon;
  castlemagic.textContent = magicprefix + green.magic;
  castleunlock.textContent = unlockprefix + green.unlock;
  break;
  case 'Blue Knight':
  charpic.src = "images/castle/blue.png";
  castleweapon.textContent = weaponprefix + blue.startweapon;
  castlemagic.textContent = magicprefix + blue.magic;
  castleunlock.textContent = unlockprefix + blue.unlock;
  break;
  case 'Orange Knight':
  charpic.src = "images/castle/orange.png";
  castleweapon.textContent = weaponprefix + orange.startweapon;
  castlemagic.textContent = magicprefix + orange.magic;
  castleunlock.textContent = unlockprefix + orange.unlock; 
  break;
  case 'Gray Knight':
  charpic.src = "images/castle/gray.png";
  castleweapon.textContent = weaponprefix + gray.startweapon;
  castlemagic.textContent = magicprefix + gray.magic;
  castleunlock.textContent = unlockprefix + gray.unlock;
  break;
}
title.scrollIntoView(true);
}