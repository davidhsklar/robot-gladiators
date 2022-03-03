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
    
        playerMoney = Math.max(0, playerMoney - 10);
        window.alert("You have been penalized ten coins");
        console.log(" player money ", playerMoney);
        break;
    }
    }
    
    // if they don't skip, we fight. remove health points after attack.
    
    // generate random damage value based on player's attack power

    var damage = randomNumber(playerAttack - 3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - damage);
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
    
    var damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - damage);
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " left ");
    
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
    

// function to start a new game
var startGame = function() {

// reset player stats

  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

   // fight each enemy-robot by looping over them and fighting them one at a time.  Create the loop and call
    // the fight function within the loop.  this is still an open function itself.

    for (var i = 0; i < enemyNames.length; i++) {
      if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
        var pickedEnemyName = enemyNames[i];
  
        enemyHealth = randomNumber(40, 60);
  
        fight(pickedEnemyName);

           // if player is still alive and we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
       
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

// function to end the entire game

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    //if the player is still alive, the player wins!

    if (playerHealth > 0) {
    window.alert(" Congrats, on surviving the Thunder Dome.  You now have a score of "  + playerMoney + ".");
 
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
    case "refill":
      window.alert("Refilling player's health by 20 for 7 dollars.");
  
      // increase health and decrease money

      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
      break;
    case "upgrade":
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
  
      // increase attack and decrease money

      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
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



// start the game when the page loads
startGame()
