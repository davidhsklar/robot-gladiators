// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var welcomefight = window.alert("Welcome to the Thunder Dome");
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy the Beautiful', 'Ivan the Terrible'];
var enemyHealth = 50;
var enemyAttack = 12;

/* this creates the fight function which is custom and can be replaced by any word and
can also be done with random words */

var fight = function(enemyName) {
// insert condition about health points since those need to be positive to fight
   while (playerHealth > 0 && enemyHealth > 0) {

// the condition is met, now the battle can begin.  prompt a confirm or skip for the fight
// ask player if they'd like to fight or run

var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

//if player skips, we need to stop the loop

if (promptFight === "SKIP" || promptFight === "skip") {

    //confirm the skip

var confirmSkip = window.confirm("Are you sure you want to skip?");

// if true/confirmed, skip the fight

if (confirmSkip) {
    window.alert("You have skipped the fight, coward");
    
// if skipped, reduce player money

    playerMoney = playerMoney - 10;
    window.alert("You have been penalized ten coins");
    console.log(" player money ", playerMoney);
    break;
}
};

// if they don't skip, we fight. remove health points after attack.

enemyHealth = enemyHealth - playerAttack;
console.log(playerName + " atttacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " left ");

//check enemy's health

if (enemyHealth <= 0) {
    window.alert(enemyName + ' has died!');

// award player money for winning

playerMoney = playerMoney + 10;
console.log(" player money ", playerMoney)

// leave the "while" loop since enemy is dead

break;
} else {
window.alert(enemyName + " still has " + enemyHealth + " left ");

}

// remove players's health by subtracting the amount set in the enemyAttack variable

playerHealth = playerHealth - enemyAttack;
console.log(enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " left ");

//check players health

if (playerHealth <= 0) {
    window.alert(playerName + ' has died! ' + enemyName + " is taking your house now ");

// leave the "while" loop since player is dead

break;
} else {
window.alert(playerName + " still has " + playerHealth + " left ");

}
}
};

// fight each enemy-robot by looping over them and fighting them one at a time.  Create the loop and call
// the fight function within the loop.  this is still an open function itself.

for(var i = 0; i < enemyNames.length; i++) {

// if the player is still alive, keep fighting

if (playerHealth > 0) {
    window.alert(" Welcome to Robot Gladiators! Round " + (i + 1) + " Ready? ");

 // pick new enemy to fight based on the index of the enemyNames array

 var pickedEnemyName = enemyNames[i];

 // reset enemyHealth before starting new fight

 enemyHealth = 50;

 // pass the pickedEnemyName variable's value into the fight function. 
 // it will assume the value of the enemyName parameter

 fight(pickedEnemyName);

// if player isn't alive, stop the game

} else {
    window.alert(playerName + " has died " + enemyName + " is taking your house by force ");
break;
    
}
}



/* this is a basic loop

console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i], " is at " + i + " index ");
}

// How to do a loop, line 106 is the actual loop script where i refers to starting index point 
which should be 0 as that is the start of the index, next is boolean execution which is true or false expression
then how much you want the loop to increase by should always be i++ or ++i which is equal to index+1.
you can call created functions within a loop which also defines how the function will run in the script

*/

