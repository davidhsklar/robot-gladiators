var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple var values
console.log(playerName, playerAttack, playerHealth)

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

/* this creates the fight function which is custom and can be replaced by any word and
can also be done with random words */

var welcomefight = function() {
    window.alert("Welcome to Robot Gladiators");
}

var promptfight = function() {


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
    window.alert("Please reload your page and try again");
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
  


// this executes the created function
welcomefight();
promptfight();
