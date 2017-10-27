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
var gray = new castleChar("Description", "Skinny Sword", "Non-Elemental (Fire)", "Defeat the barbarian boss", "S");
var opengray = new castleChar("Description", "Skinny Sword", "Non-Elemental", "D", "Defeat the catfish boss on insane mode");
var blacksmith = new castleChar("Description", "Hammer", "Non-Elemental (Fire)", "DLC (Regular), At start of game (Remastered)", "E");
var pink = new castleChar("Description", "NG Lollipop", "Love", "DLC (Regular), At start of game (Remastered)", "A");
var alien = new castleChar("Description", "Alien Gun", "Non-Elemental (Fire)", "Beat level 1-1 in Alien Hominid HD (360), Complete Alien Ship", "E");


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
var castlewikitier = document.getElementById('wikitier');

//variables for common prefixs
var weaponprefix = "Starting Weapon: ";
var unlockprefix = "Unlock: ";
var magicprefix = "Magic: ";
var wikitierprefix = "Wiki Tier: ";

title.textContent = charvalue; //sets title to the name of the picked character

castlethumb.style.display = "initial";

switch(charvalue) { //sorts between character values and sets the coressponding info
  case 'Red Knight':
  charpic.src='images/castle/red.png';
  castlewikitier.textContent = wikitierprefix + red.wikitier;
  castleweapon.textContent = weaponprefix + red.startweapon;
  castlemagic.textContent = magicprefix + red.magic;
  castleunlock.textContent = unlockprefix + red.unlock;
  break;
  case 'Green Knight':
  charpic.src= 'images/castle/green.png';
  castlewikitier.text = wikitierprefix + green.wikitier;
  castleweapon.textContent = weaponprefix + green.startweapon;
  castlemagic.textContent = magicprefix + green.magic;
  castleunlock.textContent = unlockprefix + green.unlock;
  break;
  case 'Blue Knight':
  charpic.src = "images/castle/blue.png";
  castlewikitier.textContent = wikitierprefix + blue.wikitier;
  castleweapon.textContent = weaponprefix + blue.startweapon;
  castlemagic.textContent = magicprefix + blue.magic;
  castleunlock.textContent = unlockprefix + blue.unlock;
  break;
  case 'Orange Knight':
  charpic.src = "images/castle/orange.png";
  castlewikitier.textContent = wikitierprefix + orange.wikitier;
  castleweapon.textContent = weaponprefix + orange.startweapon;
  castlemagic.textContent = magicprefix + orange.magic;
  castleunlock.textContent = unlockprefix + orange.unlock;
  break;
  case 'Gray Knight':
  charpic.src = "images/castle/gray.png";
  castlewikitier.textContent = wikitierprefix + gray.wikitier;
  castleweapon.textContent = weaponprefix + gray.startweapon;
  castlemagic.textContent = magicprefix + gray.magic;
  castleunlock.textContent = unlockprefix + gray.unlock;
  break;
  case 'Open Faced Gray Knight':
  charpic.src = "images/castle/opengray.png";
  castlewikitier.textContent = wikitierprefix + opengray.wikitier;
  castleweapon.textContent = weaponprefix + opengray.startweapon;
  castlemagic.textContent = magicprefix + opengray.magic;
  castleunlock.textContent = unlockprefix + opengray.unlock;
  break;
  case 'Blacksmith':
  charpic.src = "images/castle/blacksmith.png";
  castlewikitier.textContent = wikitierprefix + blacksmith.wikitier;
  castleweapon.textContent = weaponprefix + blacksmith.startweapon;
  castlemagic.textContent = magicprefix + blacksmith.magic;
  castleunlock.textContent = unlockprefix + blacksmith.unlock;
  break;
  case 'Pink Knight':
  charpic.src = "images/castle/pink.png";
  castlewikitier.textContent = wikitierprefix + pink.wikitier;
  castleweapon.textContent = weaponprefix + pink.startweapon;
  castlemagic.textContent = magicprefix + pink.magic;
  castleunlock.textContent = unlockprefix + pink.unlock;
  break;
}
title.scrollIntoView(true);
}
