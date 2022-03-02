// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple var values
console.log(playerName, playerAttack, playerHealth)

var enemyNames = ["Roberto" , "Amy the Beautiful" , "Ivan the Terrible"];
var enemyHealth = 50;
var enemyAttack = 12;

/* this creates the fight function which is custom and can be replaced by any word and
can also be done with random words */

var welcomefight = function() {
    window.alert("Welcome to Robot Gladiators");
}

var promptfight = function(enemyName) {


// fight skip prompt
var promptfight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

//if a player chooses to fight

if (promptfight === "fight" || promptfight === "FIGHT") {
// reduces enemy health
enemyHealth = enemyHealth - playerAttack;
//logs enemy health loss message
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
//check enemy health
if (enemyHealth <=0) {
    window.alert(enemyName + " has died ");
} else {
    window.alert(enemyName + " still has " + enemyHealth + " left ");
}

//reduces player health
playerHealth = playerHealth - enemyAttack;

//logs player health loss message
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining ");

//check player health

if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }

// if player chooses to skip

} else if (promptfight === "skip"  || promptfight === "SKIP") {
window.alert("Player has chosen to skip the fight!");
var confirmSkip = window.confirm("Are you sure you'd like to quit?");

if (confirmSkip) {
    window.alert("Fine, see ya later loser!");
} else welcomefight();
   

} else if (confirmSkip === "skip" || confirmSkip === "SKIP") {
    
} else {
    window.alert("Invalid option, please try again");

}



//if skipped penalize money

if (promptfight === "skip" || promptfight === "SKIP") {
    window.alert("You have been penalized 2 Robot coins!");
} 

if (confirmSkip = "Invalid option, please try again") {
}


//logs money loss
if (promptfight === "skip" || promptfight === "SKIP") {
console.log(playerName + " has skipped a fight so " + playerName + " has lost money! ");
}
}

//checks player money

if (playerMoney <=7) {
    window.alert(playerName + " stop skipping! ");
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

// How to do a loop, i refers to starting index point which should be 0 as that is the start
of the index, next is boolean execution which is true or false expression
then how much you want the loop to increase by should always be i++ or ++i which is equal to index+1

*/


// this executes the created function
for(var i = 0; i < enemyNames.length; i++) {
  promptfight(enemyNames[i]);
}

