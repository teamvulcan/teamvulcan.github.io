// document accessing variables 
var charput = document.getElementById('charinput');
var charimg = document.getElementById('charpic');
var title = document.getElementById('chartitle');
var info = document.getElementById('charinfo');
//event listener for a change
document.getElementById('charinput').addEventListener("change", update());

//character variables
var red = new castleChar("Red", "Description", "Image", "Mace", "Electricity", "Default");
var green = new castleChar("Green", "Description", "Image", "Thin Sword", "Poison", "Default");
var blue = new castleChar();
var orange = new castleChar();
var gray = new castleChar();
var opengray = new castleChar();
var blacksmith = new castleChar();
var pink = new castleChar();
var alien = new castleChar();
var barbarian = new castleChar();
var bear = new castleChar();
var brute = new castleChar();
var civilian = new castleChar();
var conehead = new castleChar();
var cultminion = new castleChar();
var fencer = new castleChar();
var firedemon = new castleChar();
var hatty = new castleChar();
var iceskimo = new castleChar();
var industrialist = new castleChar();
var beekeeper = new castleChar();
var king = new castleChar();
var necromancer = new castleChar();
var ninja = new castleChar();
var peasant = new castleChar();
var royalguard = new castleChar();
var saracen = new castleChar();
var skeleton = new castleChar();
var snakey = new castleChar();
var stoveface = new castleChar();
var thief = new castleChar(); 


// function to change to uppercase the title
function first(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// function ran on change
function update() {
  var vaa = charput.value;
    title.textContent = first(vaa);
    switch(vaa) {
      case 'choose':
       title.textContent = "Pick a character you would like to receive information on.";
       charimg.innerHTML = "";
       info.textContent = "";
       break;
      case 'red':
      info.textContent = red.desc;
      charimg.innerHTML = red.img;
      break;
      case 'green':
      info.textContent = green.desc;
      charimg.innerHTML = green.img;
      break;
      
}
}

// object function to set character's info
function castleChar(name, desc, img, startweapon, magic, unlock){
  this.name = name;
  this.desc = desc;
  this.img = img;
  this.startweapon = startweapon;
  this.magic = magic;
  this.unlock = unlock;
}


