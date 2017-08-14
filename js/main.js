// JavaScript file!
//case for castle crashers tool
function castlecrash(){
var k = document.getElementById('in').value;
var title = document.getElementById('char');
var info = document.getElementById('info');

switch(k) {
  case 'char':
  title.innerHTML = "Select a character!";
  info.innerHTML = " ";
  break;
  case 'red':
  title.innerHTML = "Red Knight";
  info.innerHTML = "";
  break;
  case 'blue':
  title.innerHTML = "Blue Knight";
  info.innerHTML = "<div class='bio'> <div class='fix'> <img class='castlepic' src='images/castle/blue.png'> <p class='biotext'>This is the blue knight's bio.</p> </div> </div>";
  break;
  case 'green':
  title.innerHTML = "Green Knight";
  info.innerHTML = "<div class='bio'> <div class='fix'> <img class='castlepic' src='images/castle/green.png'> <p class='biotext'>This is the green knight's bio.</p></div></div>";
  break;
  case 'orange':
  title.innerHTML = "Orange Knight";
  info.innerHTML = "<div class='bio'> <div class='fix'> <img class='castlepic' src='images/castle/orange.png'> <p class='biotext'>This is the orange knight's bio.</p> </div></div>";
  break;
  case 'gray':
  title.innerHTML = "Gray Knight";
  info.innerHTML = "<div class='bio'> <div class='fix'> <img class='castlepic' src='images/castle/gray.png'> <p class='biotext'>This is the gray knight's bio.</p></div></div>";
  break;
  case 'opengray':
  title.innerHTML = "Open Face Gray Knight";
  info.innerHTML = "<div class='bio'> <div class='fix'> <img class='castlepic' src='images/castle/opengray.png'> <p class='biotext'>This is the open face gray knight's bio.</p></div></div>";
  break;
  case 'blacksmith':
  title.innerHTML = "Blacksmith";
  info.innerHTML = "<div class='bio'> <div class='fix'> <img class='castlepic' src='images/castle/blacksmith.png'> <p class='biotext'>This is the blacksmith's bio.</p></div></div>";
  break;
  case 'pink':
  title.innerHTML = "Pink Knight";
  info.innerHTML = "<div class='bio'> <div class='fix'> <img class='castlepic' src='images/castle/pink.png'> <p class='biotext'>This is the pink knight's bio.</p></div></div>";
  break;
  case 'alien':
  title.innerHTML = "Alien";
  info.innerHTML = "<div class='bio'> <div class='fix'><img class='castlepic' src='images/castle/alien.png'> <p class='biotext'>This is the aliens's bio.</p></div></div>";
  break;
  case 'barbarian':
  title.innerHTML = "Barbarian";
  info.innerHTML = "<div class='bio'> <div class='fix'> <img class='castlepic' src='images/castle/barbarian.png'> <p class='biotext'>This is the barbarian's bio.</p></div></div>";
  break;
  case 'bear':
  title.innerHTML = "Bear";
  info.innerHTML = "<div class='bio'> <div class='fix'><img class='castlepic' src='images/castle/bear.png'> <p class='biotext'>This is the bear's bio.</p></div></div>";
  break;
  case 'brute':
  title.innerHTML = "Brute";
  info.innerHTML = "<div class='bio'> <div class='fix'><img class='castlepic' src='images/castle/brute.png'> <p class='biotext'>This is the brute's bio.</p></div></div>";
  break;
  case 'civilian':
  title.innerHTML = "Civilian";
  info.innerHTML = "<div class='bio'> <div class='fix'><img class='castlepic' src='images/castle/civilian.png'> <p class='biotext'>This is the civilians's bio.</p></div></div>";
  break;
  case 'conehead':
  title.innerHTML = "Conehead";
  info.innerHTML = "<div class='bio'> <div class='fix'> <img class='castlepic' src='images/castle/conehead.png'> <p class='biotext'>This is the conehead's bio.</p></div></div>";
  break;
  case 'cult':
  title.innerHTML = "Cult Minion";
  info.innerHTML = "<div class='bio'> <div class='fix'> <img class='castlepic' src='images/castle/cultminion.png'> <p class='biotext'>This is the cult minion's bio.</p> </div></div>";
  break;
  case 'fencer':
  title.innerHTML = "Fencer";
  info.innerHTML = "<div class='bio'> <div class='fix'><img class='castlepic' src='images/castle/fencer.png'> <p class='biotext'>This is the fencer's bio.</p></div></div>";
  break;
  case 'firedemon':
  title.innerHTML = "Fire Demon";
  info.innerHTML = "<div class='bio'> <div class='fix'><img class='castlepic' src='images/castle/firedemon.png'> <p class='biotext'>This is the fire demon's bio.</p></div></div>";
  break;
  case 'hatty':
  title.innerHTML = "Hatty Hattington";
  info.innerHTML = "<div class='bio'> <div class='fix'><img class='castlepic' src='images/castle/hatty.png'> <p class='biotext'>This is the Hatty Hattington's bio.</p></div></div>";
  break;
  case 'iceskimo':
  title.innerHTML = "Iceskimo";
  info.innerHTML = "<div class='bio'> <div class='fix'><img class='castlepic' src='images/castle/iceskimo.png'> <p class='biotext'>This is the iceskimo's bio.</p></div></div>";
  break;
  case 'industrialist':
  title.innerHTML = "Industrialist";
  info.innerHTML = "<div class='bio'> <div class='fix'><img class='castlepic' src='images/castle/industrialist.png'> <p class='biotext'>This is the industrialist's bio.</p></div></div>";
  break;
  case 'beekeeper':
  title.innerHTML = "Killer Beekeeper";
  info.innerHTML = "<div class='bio'> <div class='fix'><img class='castlepic' src='images/castle/beekeeper.png'> <p class='biotext'>This is the killer beekeeper's bio.</p></div></div>";
  break;
  case 'king':
  title.innerHTML = "King";
  info.innerHTML = "<div class='bio'> <div class='fix'><img class='castlepic' src='images/castle/king.png'> <p class='biotext'>This is the king's bio.</p></div></div>";
  break;
  case 'necromancer':
  title.innerHTML = "Necromancer";
  info.innerHTML = "<div class='bio'> <div class='fix'><img class='castlepic' src='images/castle/necromancer.png'> <p class='biotext'>This is the necromancer's bio.</p></div></div>";
  break;
  case 'ninja':
  title.innerHTML = "Ninja";
  info.innerHTML = "<div class='bio'> <div class='fix'><img class='castlepic' src='images/castle/ninja.png'> <p class='biotext'>This is the ninja's bio.</p></div></div>";
  break;
  case 'peasant':
  title.innerHTML = "Peasant";
  info.innerHTML = "<div class='bio'> <div class='fix'><img class='castlepic' src='images/castle/peasant.png'> <p class='biotext'>This is the peasant's bio.</p></div></div>";
  break;
  case 'royalguard':
  title.innerHTML = "Royal Guard";
  info.innerHTML = "<div class='bio'> <div class='fix'><img class='castlepic' src='images/castle/royalguard.png'> <p class='biotext'>This is the royal guard's bio.</p></div></div>";
  break;
  case 'saracen':
  title.innerHTML = "Saracen";
  info.innerHTML = "<div class='bio'> <div class='fix'><img class='castlepic' src='images/castle/saracen.png'> <p class='biotext'>This is the saracen's bio.</p></div></div>";
  break;
  case 'skeleton':
  title.innerHTML = "Skeleton";
  info.innerHTML = "<div class='bio'> <div class='fix'><img class='castlepic' src='images/castle/skeleton.png'> <p class='biotext'>This is the skeleton's bio.</p></div></div>";
  break;
  case 'snakey':
  title.innerHTML = "Snakey";
  info.innerHTML = "<div class='bio'> <div class='fix'><img class='castlepic' src='images/castle/snakey.png'> <p class='biotext'>This is the snakey's bio.</p></div></div>";
  break;
  case 'stoveface':
  title.innerHTML = "Stove Face";
  info.innerHTML = "<div class='bio'> <div class='fix'><img class='castlepic' src='images/castle/stove.png'> <p class='biotext'>This is the stove face's bio.</p></div></div>";
  break;
  case 'thief':
  title.innerHTML = "Thief";
  info.innerHTML = "<div class='bio'> <div class='fix'><img class='castlepic' src='images/castle/thief.png'> <p class='biotext'>This is the thief's bio.</p></div></div>";
  break;
 }
}
