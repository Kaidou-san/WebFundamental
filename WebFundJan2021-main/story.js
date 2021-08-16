// Mario and his adventure through the JavaScript Kingdom

// Create our character
// String -- we can treat this like an index
var character = "Mario";
// fun fact about strings:
// console.log(character[3]);

// Numbers
var health = 100;
// Remember that === are EXACT and == is a little more arbitrary 
// if (health === "100"){
//     console.log("It matches!")
// }

// Arrays -- collections of data
var moves = ["Jump", "Double jump", "Fireball", "Bomb"];
// How would I call on Double Jump?
// console.log(moves[1]);

// Boolean
var isAlive = true;
// it can ONLY be true or false, never anything else

var coinsCollected = 0;

console.log("Welcome to Super JavaScript Adventures! Use your skills in Javascript to get to the end of the game!");

console.log("*************************");

console.log(character + " enters the screen as is faced by a horde of goombs! How many goombas??")
console.log("Render all the goombas!!")
console.log("*************************");
console.log("CHALLENGE ONE: Given a specific number of goomba enemies, render the word 'goomba' for each enemy and its associated number! Ex: 'Goomba #10'");

var numGoombas = 10;

// So how do I render all these Goombas?

for(var goombas = 1; goombas <= numGoombas; goombas++){
    console.log("Goomba #" + goombas)
}

console.log("Wow, that's a lot of goomba! What will " + character + " do?!")

// function displayGoombas(num){
//     for(var goombas = 1; goombas <= num; goombas++){
//         console.log("Goomba #" + goombas)
//     }
// }

// displayGoombas(numGoombas)

// WHILE LOOPS
// While loops are used when you DON'T know how long your loop will run
var chance = 0;
while(numGoombas > 0) {
    if(chance % 3 == 0){
        console.log(character + " uses " + moves[0] + " to destroy a Goomba!");
        numGoombas--;
    } else {
        console.log("You did not kill the goomba!");
    }
    chance++;
}

console.log(character + " successfully defeated all the goombas and progresses to the next stage!");

console.log("*******************");

console.log("Uh oh! Mario encounters a Pirahna plant! What should he do?! He can't pass by with that thing around!")

console.log("CHALLENGE TWO: Pirahna Plants can only be defeated by a Fireball! Write a function that accepts a move from Mario's moveset and defeat the enemy! Then write another function that checks that they're dead!");

var piranhaIsAlive = true;

// var moves = ["Jump", "Double jump", "Fireball", "Bomb"];

// GOAL 1: we need to set PirhanaIsAlive to false
// GOAL 2: we need to use Mario's fireball to make this happen
// Goal 3: we need to check that pirhanaIsAlive IS set to false

// This checks if pihranaIsAlive == false
if(piranhaIsAlive){
    console.log(character + " can't proceed!")
} else {
    console.log(character + " made it through!")
}

// Make Mario call on a fireball
function useMove(move){
    console.log(character + " used " + move + "!");
    if(move == "Fireball"){
        console.log(character + " used " + move + " and roasted the Pihrana Plant!");
        piranhaIsAlive = false;
    } else {
        health = health - 20;
        console.log("The move did not work and you lost 20 health!");
    }
}

useMove(moves[1]);

if(piranhaIsAlive){
    console.log(character + " can't proceed!")
} else {
    console.log(character + " made it through!")
}

useMove(moves[2]);

if(piranhaIsAlive){
    console.log(character + " can't proceed!")
} else {
    console.log(character + " made it through!")
}

console.log("**********************");

console.log(character + " made it to his final obstacle! Make it to the top of the mountain to clear the level!")

console.log("FINAL CHALLENGE: Use your jumping and function writing skills to make it to floor height 6! Jump as much as you need to, but don't write too much code!")

var floorHeight = 0;

// var moves = ["Jump", "Double jump", "Fireball", "Bomb"];

// GOAL 1: call on a move that allows us to ascend a level
// GOAL 2: call on these moves until we reach the top of the mountain 

var endOfLevel = false;

function useJumps(move){
    if(move == moves[0]){
        floorHeight+=1;
        console.log(character + " used jump and moved up one level!")
    } else if (move == moves[1]){
        floorHeight+=2
        console.log(character + " used double jump and moved up 2 levels!")
    } else {
        console.log("You used the wrong move! You fell down one floor!")
        floorHeight--;
    }
}

while(!endOfLevel){
    useJumps(moves[1]);
    useJumps(moves[2]);
    if(floorHeight >= 6){
        endOfLevel = true;
        console.log("You made it!")
    }
}

console.log("***************************");
console.log("Congratulations!! You conquered the JavaScript Kingdom! Too bad the Princess is in ANOTHER CASTLE!! Maybe write a function that lets her save herself...");