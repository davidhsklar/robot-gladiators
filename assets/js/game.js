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
can also be done with random words.  this defines the function */

// function to start a new game
var startGame = function() {

// reset player stats

  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
      if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
        var pickedEnemyName = enemyNames[i];
  
        enemyHealth = 50;
  
        fight(pickedEnemyName);
      }
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    }

    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();

      // play again

  startGame();
};

// function to end the entire game

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    //if the player is still alive, the player wins!

    if (playerHealth > 0) {
    window.alert(" Congrats, on surviving the Thunder Dome.  You now have a score of "  + playerMoney + ".");
 
    } else {
        window.alert(" Uh, oh.  You are dead. ");
    }

    // ask them if they want to play again

    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert(" Fine, be a quitter ");
    }

  }
  


var fight = function(enemyName) {

//below are the function statements
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


// start the game when the page loads
startGame()
