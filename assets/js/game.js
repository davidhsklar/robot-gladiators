var playerName = window.prompt(" What is your robots name? ");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple var values
console.log(playerName, playerAttack, playerHealth)

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

/* this creates the fight function which is custom and can be replaced by any word and
can also be done by just typing function fight parentheis code block open */

//starts the round
var fight = function() {
    window.alert("Welcome to Robot Gladiators");

// reduces enemy health
enemyHealth = enemyHealth - playerAttack;

//logs enemy health loss message
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

//check enemy health

if (enemyHealth <=0) {
    window.alert(enemyName + " has died ");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " left ");
}

//reduces player health
playerHealth = playerHealth - enemyAttack

//logs player health loss message
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining ");


//check player health

if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }

}

// this executes the created function
fight();