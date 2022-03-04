
var welcomefight = window.alert("Welcome to the Thunder Dome");

// function to start a new game
var startGame = function() {

// reset player stats

  playerInfo.reset();

   // fight each enemy-robot by looping over them and fighting them one at a time.  Create the loop and call
    // the fight function within the loop.  this is still an open function itself.

    for (var i = 0; i < enemyInfo.length; i++) {
      if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
        var pickedEnemyObj = enemyInfo[i];
  
        pickedEnemyObj.health = randomNumber(40, 60);
  
        fight(pickedEnemyObj);

           // if player is still alive and we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
       
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      
        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
    }

    // if player is not alive, break out of the loop and let endGame function run
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

    var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function

    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
// Conditional Recursive Function Call
    if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }
  
    // if player picks "skip" confirm and then stop the loop
    promptFight = promptFight.toLowerCase();
    if (promptFight === "skip") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping, but don't let them go into the negative
        playerInfo.money = Math.max(0, playerInfo.money - 10);
  
        // return true if player wants to leave
        return true;

        //retun false if they don't

        return false;
      }
    }
  }

/* this creates the fight function which is custom and can be replaced by any word and
can also be done with random words.  this defines the function */

var fight = function(enemy) {

    //below are the function statements

    var isPlayerTurn = true;

      // randomly change turn order
  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }

    // insert condition about health points since those need to be positive to fight
      while (playerInfo.health > 0 && enemy.health > 0) {
      if (isPlayerTurn) {
    // ask player if they'd like to fight or skip using fightOrSkip function
    if (fightOrSkip()) {
      // if true, leave fight by breaking loop
      break;
    }
        
    // generate random damage value based on player's attack power

    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(playerInfo.name + " atttacked " + enemy.name + " . " + enemy.name + " now has " + enemy.health+ " left ");
    
    //check enemy's health
    
    if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');
    
    // award player money for winning
    
    playerInfo.money = playerInfo.money + 10;
    console.log(" player money ", playerInfo.money)
    
    // leave the "while" loop since enemy is dead
    
    break;
    } else {
    window.alert(enemy.name + " still has " + enemy.health + " left ");
    
    } 
    
} else {

    // remove players's health by subtracting the amount set in the enemyAttack variable
    
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " left ");
    
    //check players health
    
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died! ' + enemy.name + " is taking your house now ");
    
    // leave the "while" loop since player is dead
    
    break;
    } else {
    window.alert(playerInfo.name + " still has " + playerInfo.health + " left ");
    
    }
    }
      // switch turn order for next round
      isPlayerTurn = !isPlayerTurn;
     

}
    };


// function to end the entire game

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    //if the player is still alive, the player wins!

    if (playerInfo.health > 0) {
    window.alert(" Congrats, on surviving the Thunder Dome.  You now have a score of "  + playerInfo.money + ".");
 
    } else {
        window.alert(" Uh, oh.  You have no money. ");
    }

    // ask them if they want to play again

    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert(" Fine, be a quitter ");
    }

  };

  var shop = function() {
   
    // ask player what they'd like to do

    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
      );
  
    // use switch to carry out action.  switch only accepts strings. use parseInt to make a switch accept numbers

shopOptionPrompt = parseInt(shopOptionPrompt);

switch (shopOptionPrompt) {
    case 1:
  playerInfo.refillHealth();
  break;
case 2:
  playerInfo.upgradeAttack();
  break;
    case 3:
      window.alert("Leaving the store.");
  
      // do nothing, so function will end

      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
  
      // call shop() again to force player to pick a valid option

      shop();
      break;
  }
  };
  
// function to generate a random numeric value

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };

  

// function to set name
var getPlayerName = function() {
    var name = "";
  
while (name === "" || name === "null") {
name = prompt("What is your robot's name?");
    
}
console.log("Your robot's name is " + name);
    return name;
  };

   

// Player and Enemy info

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    }, 
    refillHealth: function() {
      this.health += 20;
      this.money -= 7;
    }, // comma!
    upgradeAttack: function() {
      this.attack += 6;
      this.money -= 7;
    }
  };

    
    
    var enemyInfo = [
        {
          name: "Robot Killer",
          attack: randomNumber(10, 14),
          health: randomNumber (40, 60),
        },
        {
          name: "Amy The Beautiful",
          attack: randomNumber(10, 14),
          health: randomNumber (40, 60),
        },
        {
          name: " Ivan The Terrible",
          attack: randomNumber(10, 14),
          health: randomNumber (40, 60),
        }
      ];


// start the game when the page loads
startGame()
