// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

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

/* this creates the fight function which is custom and can be replaced by any word and
can also be done with random words.  this defines the function */

var fight = function(enemy) {

    //below are the function statements
    // insert condition about health points since those need to be positive to fight
       while (playerInfo.health > 0 && enemy.health > 0) {
    
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
    
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        window.alert("You have been penalized ten coins");
        console.log(" player money ", playerInfo.money);
        break;
    }
    }
    
    // if they don't skip, we fight. remove health points after attack.
    
    // generate random damage value based on player's attack power

    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemyHealth = Math.max(0, enemy.health - damage);
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
      "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
  
    // use switch to carry out action

switch (shopOptionPrompt) {
    case "REFILL":
case "refill":
  playerInfo.refillHealth();
  break;
case "UPGRADE":
case "upgrade":
  playerInfo.upgradeAttack();
  break;
    case "leave":
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

// Player and Enemy info

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
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
          name: "Roborto",
          attack: randomNumber(10, 14)
        },
        {
          name: "Amy Android",
          attack: randomNumber(10, 14)
        },
        {
          name: "Robo Trumble",
          attack: randomNumber(10, 14)
        }
      ];


// start the game when the page loads
startGame()
