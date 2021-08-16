// Objects in JavaScript

// Kind of like an array
// Arrays use indices (0,1,2,3) to keep track of value locations
// An object uses something called "keys" to keep track of values
// Objects have sets of data broken up into keys and values
// EX: String (key) - (value) whatever the definition of string is

var Mario = {
    // has keys and values
    character: "Mario",
    health: 100,
    moves: ["Jump", "Double Jump", "Fireball", "Bomb"],
    isAlive: true,
    coinsCollected: 0
}

var Luigi = {
    // has keys and values
    character: "Luigi",
    health: 100,
    moves: ["Double Jump", "Rapid Spin", "Bomb"],
    isAlive: true,
    coinsCollected: 0
}

// console.log(Mario.character);
// console.log(Luigi.character);
// console.log(Mario.isAlive);

// Mario.isAlive = false;

// console.log(Mario.isAlive);

// console.log(Mario.moves);
// console.log(Luigi.moves);

// Luigi.health -= 20;
// console.log(Mario.health);

// attack(Luigi, Luigi.moves[1]);

console.log("Welcome to Super JavaScript Adventures! Use your skills in Javascript to get to the end of the game!");

console.log("*************************");

console.log(Mario.character + " enters the screen as is faced by a horde of goombs! How many goombas??")
console.log("Render all the goombas!!")
console.log("*************************");
console.log("CHALLENGE ONE: Given a specific number of goomba enemies, render the word 'goomba' for each enemy and its associated number! Ex: 'Goomba #10'");

var Goomba = {
    name: "Goomba",
    attackDamage: 10,
    weakness: "Jump",
    isAlive: true
}

var PihranaPlant = {
    name: "Pihrana Plant",
    attackDamage: 15,
    weakness: "Fireball",
    isAlive: true
}

function checkPulse(player){
    if(player.health <= 0){
        player.isAlive = false;
        console.log(player.character + " has died!")
        console.log("GAME OVER!!")
        console.log("********************");
    }
}

function renderEnemies(enemyType, num){
    for(var enemy = 1; enemy <= num; enemy++){
        console.log(enemyType + " #" + enemy);
    }
}
var numGoombas = 18;
renderEnemies(Goomba.name, numGoombas);

console.log("Wow, that's a lot of goomba! What will " + Mario.character + " do?!")

function attack(player, enemy, move) {
    if(player.isAlive){
        if(move == enemy.weakness){
            console.log("Executing attack " + move + " on enemy " + enemy.name);
            console.log(enemy.name + " defeated!");
            enemy.isAlive = false;
        } else {
            console.log("Executing attack " + move + " on enemy " + enemy.name);
            console.log(player.character + " received " + enemy.attackDamage + " damage!");
            player.health -= enemy.attackDamage;
            checkPulse(player);
        }
    } else {
        console.log("You can't play if you're dead!");
    }
}

var chance = 0;
while(numGoombas > 0){
    if(chance % 5 == 0){
        attack(Mario, Goomba, Mario.moves[1]);
    } else {
        attack(Mario, Goomba, Mario.moves[0]);
        numGoombas--;
    }
    chance++;
}
console.log(chance);
chance = 0;
console.log(chance);

// attack(Mario, Goomba, Mario.moves[0]);
// attack(Mario, PihranaPlant, Mario.moves[0]);
// attack(Mario, PihranaPlant, Mario.moves[0]);
// attack(Mario, PihranaPlant, Mario.moves[0]);
// attack(Mario, PihranaPlant, Mario.moves[0]);
// attack(Mario, PihranaPlant, Mario.moves[0]);
// attack(Mario, PihranaPlant, Mario.moves[0]);

console.log(Mario.character + " successfully defeated all the goombas and progresses to the next stage!");

console.log("*******************");

console.log("Uh oh! Mario encounters a Pirahna plant! What should he do?! He can't pass by with that thing around!")

console.log("CHALLENGE TWO: Pirahna Plants can only be defeated by a Fireball! Write a function that accepts a move from Mario's moveset and defeat the enemy! Then write another function that checks that they're dead!");

function checkEnemyIsDead(enemy){
    if(enemy.isAlive){
        console.log("You can't proceed!")
    } else {
        console.log("You made it!")
    }
}

checkEnemyIsDead(PihranaPlant);
attack(Mario, PihranaPlant, Mario.moves[1]);
checkEnemyIsDead(PihranaPlant);
attack(Mario, PihranaPlant, Mario.moves[2]);
checkEnemyIsDead(PihranaPlant);

console.log("**********************");

console.log(Mario.character + " made it to his final obstacle! Make it to the top of the mountain to clear the level!")

console.log("FINAL CHALLENGE: Use your jumping and function writing skills to make it to floor height 6! Jump as much as you need to, but don't write too much code!")

var floorHeight = 0;

var endOfLevel = false;

function climbMountain(player, move){
    if(move == "Jump"){
        floorHeight+=1;
        console.log(player.character + " used jump and moved up one level!")
    } else if (move == "Double Jump"){
        floorHeight+=2
        console.log(player.character + " used double jump and moved up 2 levels!")
    } else {
        console.log("You used the wrong move! You fell down one floor!")
        floorHeight--;
    }
}

// while(!endOfLevel){
//     climbMountain(Mario, Mario.moves[1]);
//     if(floorHeight >= 6){
//         endOfLevel = true;
//         console.log("You made it!");
//     }
// }

climbMountain(Mario, Mario.moves[1]);
climbMountain(Mario, Mario.moves[1]);
climbMountain(Mario, Mario.moves[0]);
climbMountain(Mario, Mario.moves[2]);
climbMountain(Mario, Mario.moves[1]);

if(floorHeight >= 6){
    console.log("***************************");
    console.log("Congratulations!! You conquered the JavaScript Kingdom! Too bad the Princess is in ANOTHER CASTLE!! Maybe write a function that lets her save herself...");
} else {
    console.log("Keep climbing!");
}