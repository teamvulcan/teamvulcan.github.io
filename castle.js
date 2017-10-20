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

var red = new castleChar("Red", "Description", "image");

// function to update the html page
function update() {
var charput = document.getElementById('castleinput');
var charvalue = document.getElementById('castleinput').value;
var charpic = document.getElementById('charpic');
var title = document.getElementById('chartitle');
  title.textContent = first(charvalue);
var realpic = document.getElementById('castlechara');
switch(charvalue) { //sorts between character values
  case 'choose':
  title.textContent = "";
  break;
  case 'red':
  break;
}



}
