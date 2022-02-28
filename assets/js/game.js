//-------------------------------------------------------------------------------------------------------------------
// Info Section
//-------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------
// Player Robot Info
//-------------------------------------------------------------------------------------------------------------------
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//-------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------
// Enemy Robot Info
//-------------------------------------------------------------------------------------------------------------------
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50
var enemyAttack = 12;
//-------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------
// Player Starter Stats
//-------------------------------------------------------------------------------------------------------------------
console.log(playerName + ",", "Attack:", playerAttack, "Health:", playerHealth, "Money:", playerMoney);
//-------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------
// Fight Mechanics
//-------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------
// Fight Function Start
//-------------------------------------------------------------------------------------------------------------------
var fight = function(enemyName) {
//-------------------------------------------------------------------------------------------------------------------
    //While Player is Alive
//-------------------------------------------------------------------------------------------------------------------
    while(playerHealth > 0 && enemyHealth > 0){
//-------------------------------------------------------------------------------------------------------------------
        // Fight or Skip Choice
//-------------------------------------------------------------------------------------------------------------------
        var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
//-------------------------------------------------------------------------------------------------------------------
        // If Skip is Chosen
//-------------------------------------------------------------------------------------------------------------------
        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
//-------------------------------------------------------------------------------------------------------------------
            // Confirm Window Pops Up
//-------------------------------------------------------------------------------------------------------------------
            var confirmSkip = window.confirm("Are you sure you's like to quit?");
//-------------------------------------------------------------------------------------------------------------------
            // If Skip Confirmed
//-------------------------------------------------------------------------------------------------------------------
            if (confirmSkip) {
//-------------------------------------------------------------------------------------------------------------------
                // Skip Alert
//-------------------------------------------------------------------------------------------------------------------
                window.alert(playerName + " has chosen to skip the fight. Goodbye!");
//-------------------------------------------------------------------------------------------------------------------
                // Money Deducted
//-------------------------------------------------------------------------------------------------------------------
                playerMoney = Math.max(0, playerMoney - 10);
//-------------------------------------------------------------------------------------------------------------------
                // Money Deduction Log
//-------------------------------------------------------------------------------------------------------------------
                console.log("playerMoney-10 playerMoney:", playerMoney)
//-------------------------------------------------------------------------------------------------------------------
                break;
            }
        }
//-------------------------------------------------------------------------------------------------------------------
        // If Fight is Chosen
//-------------------------------------------------------------------------------------------------------------------
        if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
//-------------------------------------------------------------------------------------------------------------------
            // Player Damage Math
//-------------------------------------------------------------------------------------------------------------------
            var playerDamage = Math.floor(Math.random() * (playerAttack - 3) + playerAttack);
//-------------------------------------------------------------------------------------------------------------------
            // Remaining Enemy Health
//-------------------------------------------------------------------------------------------------------------------
            enemyHealth = Math.max(0, enemyHealth - playerDamage);
//-------------------------------------------------------------------------------------------------------------------
            // Player Attack Description
//-------------------------------------------------------------------------------------------------------------------    
            console.log(playerName + " attacked " + enemyName + " for " + playerDamage + " damage! " + enemyName + " now has " + enemyHealth + " health remaining ");            
//-------------------------------------------------------------------------------------------------------------------            
            // If Enemy is Defeated
//-------------------------------------------------------------------------------------------------------------------
            if (enemyHealth <= 0) {
//-------------------------------------------------------------------------------------------------------------------
                // Enemy Has Died Notice
//-------------------------------------------------------------------------------------------------------------------
                window.alert( enemyName + " has died!");
//-------------------------------------------------------------------------------------------------------------------
                // Player Victory Reward
//-------------------------------------------------------------------------------------------------------------------
                playerMoney = playerMoney + 20;
//-------------------------------------------------------------------------------------------------------------------
                // Money Reward Log
//-------------------------------------------------------------------------------------------------------------------
                console.log("playerMoney+20 playerMoney:" + playerMoney);
//-------------------------------------------------------------------------------------------------------------------
                break;
            }
//-------------------------------------------------------------------------------------------------------------------
            // If Enemy is Still Alive
//-------------------------------------------------------------------------------------------------------------------
            else {
//-------------------------------------------------------------------------------------------------------------------
                // Enemy Health Remaining
//-------------------------------------------------------------------------------------------------------------------
                window.alert( enemyName + " still has " +enemyHealth + " health left.");
            }
//-------------------------------------------------------------------------------------------------------------------
            // Enemy Damage Math
//-------------------------------------------------------------------------------------------------------------------
            var enemyDamage = Math.floor(Math.random() * (enemyAttack - 3) + enemyAttack);
//-------------------------------------------------------------------------------------------------------------------
            // Remaining Player Health
//-------------------------------------------------------------------------------------------------------------------
            playerHealth = Math.max(0, playerHealth - enemyDamage);
//-------------------------------------------------------------------------------------------------------------------
            // Enemy Attack Description
//-------------------------------------------------------------------------------------------------------------------            
            console.log(enemyName + " attacked " + playerName + " for " + enemyDamage + " damage! " + playerName + " now has " + playerHealth + " health remaining ");
//-------------------------------------------------------------------------------------------------------------------            
            // If Player is Defeated
//-------------------------------------------------------------------------------------------------------------------
            if (playerHealth <= 0) {
//-------------------------------------------------------------------------------------------------------------------
                // Player Has Died Notice
//-------------------------------------------------------------------------------------------------------------------
                window.alert(playerName + " has died!");
//-------------------------------------------------------------------------------------------------------------------
                break;
            }
//-------------------------------------------------------------------------------------------------------------------
            // If Player is Still Alive
//-------------------------------------------------------------------------------------------------------------------
            else {
//-------------------------------------------------------------------------------------------------------------------
                // Player Health Remaining
//-------------------------------------------------------------------------------------------------------------------
                window.alert(playerName + " still has " + playerHealth + " health left.");
//-------------------------------------------------------------------------------------------------------------------
            }
        }
//-------------------------------------------------------------------------------------------------------------------
        // If Other Text is Entered
//-------------------------------------------------------------------------------------------------------------------
        else {
//-------------------------------------------------------------------------------------------------------------------
            // Invalid Entry Alert
//-------------------------------------------------------------------------------------------------------------------
            window.alert("You need to choose a valid option. Try again!");
//-------------------------------------------------------------------------------------------------------------------
        }
    }
};
//-------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------
// Game States
//-------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------
// Game Start Function
//-------------------------------------------------------------------------------------------------------------------
var startGame = function() {
//-------------------------------------------------------------------------------------------------------------------
    // Player Stat Reset
//-------------------------------------------------------------------------------------------------------------------
    playerHealth = 100
    playerMoney = 10
    playerAttack = 10
//-------------------------------------------------------------------------------------------------------------------
    // New Enemy Loop
//-------------------------------------------------------------------------------------------------------------------
    for (var i = 0; i <enemyNames.length; i++) {
//-------------------------------------------------------------------------------------------------------------------
        // If Player is Alive
//-------------------------------------------------------------------------------------------------------------------
        if (playerHealth > 0) {
//-------------------------------------------------------------------------------------------------------------------
            // Welcome + Round Alert
//-------------------------------------------------------------------------------------------------------------------
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
//-------------------------------------------------------------------------------------------------------------------
            // Current Enemy Variable
//-------------------------------------------------------------------------------------------------------------------
            var pickedEnemyName = enemyNames[i];
//-------------------------------------------------------------------------------------------------------------------
            // Current Enemy Entrance Log
//-------------------------------------------------------------------------------------------------------------------
            console.log(pickedEnemyName, "has entered the arena!");
//-------------------------------------------------------------------------------------------------------------------
            // Random Enenmy Health Math
//-------------------------------------------------------------------------------------------------------------------            
            var randomNumber = function() {
                var value = Math.floor(Math.random() * 21) + 40;
              
                return value;
            };
//-------------------------------------------------------------------------------------------------------------------
            // Random Enemy Health Value
//-------------------------------------------------------------------------------------------------------------------
            enemyHealth = randomNumber(40, 60);
//-------------------------------------------------------------------------------------------------------------------
            // Current Enemy Info Log
//-------------------------------------------------------------------------------------------------------------------
            console.log(pickedEnemyName, "- Health:", enemyHealth, " Attack:", enemyAttack);
//-------------------------------------------------------------------------------------------------------------------
            // Initiate Fight Sequence With Current Enemy
//-------------------------------------------------------------------------------------------------------------------
            fight(pickedEnemyName);
//-------------------------------------------------------------------------------------------------------------------
            // As Long As Player Is Alive and There Are Enemies Remaining
//-------------------------------------------------------------------------------------------------------------------
            if (playerHealth > 0 && i < enemyNames.length - 1) {
//-------------------------------------------------------------------------------------------------------------------
                // Option to Enter The Shop Appears
//-------------------------------------------------------------------------------------------------------------------
                var storeconfirm = window.confirm("The fight is over, visit the store before the next round?");
//-------------------------------------------------------------------------------------------------------------------
                // If Enter Shop is Confirmed
//-------------------------------------------------------------------------------------------------------------------
                if (storeconfirm) {
//-------------------------------------------------------------------------------------------------------------------
                    // Shop Opens
//-------------------------------------------------------------------------------------------------------------------
                    shop();
//-------------------------------------------------------------------------------------------------------------------
                }
            }
//-------------------------------------------------------------------------------------------------------------------
        // If Player Is Defeated
//-------------------------------------------------------------------------------------------------------------------
        }else {
//-------------------------------------------------------------------------------------------------------------------
            // Defeated Window Appears
//-------------------------------------------------------------------------------------------------------------------
            window.alert("You have lost your robot in battle! Game Over!");
//-------------------------------------------------------------------------------------------------------------------
            break;
        }
    }
//-------------------------------------------------------------------------------------------------------------------
    // End Game Function Initiates
//-------------------------------------------------------------------------------------------------------------------
    endGame();
};

//-------------------------------------------------------------------------------------------------------------------
// End Game State
//-------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------
// End Game Function
//-------------------------------------------------------------------------------------------------------------------
var endGame = function() {
//-------------------------------------------------------------------------------------------------------------------
    // Game Ended Alert
//-------------------------------------------------------------------------------------------------------------------
    window.alert("The game has now ended. Let's see how you did!")
//-------------------------------------------------------------------------------------------------------------------
    // If Player is Alive
//-------------------------------------------------------------------------------------------------------------------
    if (playerHealth > 0) {
//-------------------------------------------------------------------------------------------------------------------
        // Congrats + Score Window
//-------------------------------------------------------------------------------------------------------------------
        window.alert("Great job, you survived the game!, You now have a score of " + playerMoney +".");
//-------------------------------------------------------------------------------------------------------------------
    }
//-------------------------------------------------------------------------------------------------------------------
    // If Player is Defeated
//-------------------------------------------------------------------------------------------------------------------
    else {
//-------------------------------------------------------------------------------------------------------------------
        // You Lose Window
//-------------------------------------------------------------------------------------------------------------------
        window.alert("You've lost your robot in battle.");
    }
//-------------------------------------------------------------------------------------------------------------------
    // Play Again Prompt
//-------------------------------------------------------------------------------------------------------------------
    var playAgainConfirm = window.confirm("Would you  like to play again?")
//-------------------------------------------------------------------------------------------------------------------
    // If Play Again Confirmed
//-------------------------------------------------------------------------------------------------------------------
    if (playAgainConfirm) {
//-------------------------------------------------------------------------------------------------------------------
        // Game Start Function Initiates Again
//-------------------------------------------------------------------------------------------------------------------
        startGame()
//-------------------------------------------------------------------------------------------------------------------
    }
//-------------------------------------------------------------------------------------------------------------------
    // If Play Again Declined
//-------------------------------------------------------------------------------------------------------------------
    else {
//-------------------------------------------------------------------------------------------------------------------
        // Goodbye Window Appears
//-------------------------------------------------------------------------------------------------------------------
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
//-------------------------------------------------------------------------------------------------------------------
    }
};

//-------------------------------------------------------------------------------------------------------------------
// Shop Mechanics
//-------------------------------------------------------------------------------------------------------------------
// Shop Function
//-------------------------------------------------------------------------------------------------------------------
var shop = function() {
//-------------------------------------------------------------------------------------------------------------------
    // Entered Shop Notice
//-------------------------------------------------------------------------------------------------------------------
    console.log("entered the shop");
//-------------------------------------------------------------------------------------------------------------------
    // Shop Prompt
//-------------------------------------------------------------------------------------------------------------------
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
//-------------------------------------------------------------------------------------------------------------------
    // Shop Options
//-------------------------------------------------------------------------------------------------------------------
    switch (shopOptionPrompt) {
//-------------------------------------------------------------------------------------------------------------------
        // Health Refill
//-------------------------------------------------------------------------------------------------------------------
        // Refill Text Options
        case "refill":
        case "REFILL":
        case "Refill":
//-------------------------------------------------------------------------------------------------------------------
            // If Player Has 7 dollars or more
//-------------------------------------------------------------------------------------------------------------------
            if (playerMoney >= 7) {
//-------------------------------------------------------------------------------------------------------------------
                // Health Refill Alert
//-------------------------------------------------------------------------------------------------------------------
                window.alert("Refilling player's health by 20 for 7 dollars.");
//-------------------------------------------------------------------------------------------------------------------
                // Health Refilled by 20 points
//-------------------------------------------------------------------------------------------------------------------
                playerHealth = playerHealth + 20;
//-------------------------------------------------------------------------------------------------------------------
                // 7 Dollars Deducted From Player
//-------------------------------------------------------------------------------------------------------------------
                playerMoney = playerMoney - 7;
//-------------------------------------------------------------------------------------------------------------------
            }
//-------------------------------------------------------------------------------------------------------------------
            // If Player Has Less than 7 Dollars
//-------------------------------------------------------------------------------------------------------------------
            else {
//-------------------------------------------------------------------------------------------------------------------
                // Insufficent Funds Notice
//-------------------------------------------------------------------------------------------------------------------
                window.alert("You don't have enough money!");
//-------------------------------------------------------------------------------------------------------------------
            }
            break;
//-------------------------------------------------------------------------------------------------------------------
        // Attack Upgrade
//-------------------------------------------------------------------------------------------------------------------
        // Attack Text Options
//-------------------------------------------------------------------------------------------------------------------
        case "upgrade":
        case "UPGRADE":
        case "Upgrade":
//-------------------------------------------------------------------------------------------------------------------
            // If Player Has 7 dollars or more
//-------------------------------------------------------------------------------------------------------------------    
            if (playerMoney >= 7) {
//-------------------------------------------------------------------------------------------------------------------
                // Attack Upgrade Alert
//-------------------------------------------------------------------------------------------------------------------
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
//-------------------------------------------------------------------------------------------------------------------
                // Attack Increased by 6
//-------------------------------------------------------------------------------------------------------------------
                playerAttack = playerAttack + 6;
//-------------------------------------------------------------------------------------------------------------------
                // 7 Dollars Deducted From Player
//-------------------------------------------------------------------------------------------------------------------
                playerMoney = playerMoney - 7;
//-------------------------------------------------------------------------------------------------------------------
            }
//-------------------------------------------------------------------------------------------------------------------
            // If Player Has Less than 7 Dollars
//-------------------------------------------------------------------------------------------------------------------
            else {
//-------------------------------------------------------------------------------------------------------------------
                // Insufficent Funds Notice
//-------------------------------------------------------------------------------------------------------------------                
                window.alert("You don't have enough money!");
//-------------------------------------------------------------------------------------------------------------------
            }
            break;
//-------------------------------------------------------------------------------------------------------------------
            // Leave Store
//-------------------------------------------------------------------------------------------------------------------
        // Leave Text Options
//-------------------------------------------------------------------------------------------------------------------
        case "leave":
        case "LEAVE":
        case "Leave":
//-------------------------------------------------------------------------------------------------------------------
            // Leave Store Alert
//-------------------------------------------------------------------------------------------------------------------
            window.alert("Leaving the store.");
//-------------------------------------------------------------------------------------------------------------------
            break;
//-------------------------------------------------------------------------------------------------------------------
        // Invalid Entry
//-------------------------------------------------------------------------------------------------------------------
        default:
//-------------------------------------------------------------------------------------------------------------------
            // Invalid Entry Alert
//-------------------------------------------------------------------------------------------------------------------
            window.alert("You did not pick a valid option. Try again.");
//-------------------------------------------------------------------------------------------------------------------
            // Reopen Shop
//-------------------------------------------------------------------------------------------------------------------
            shop();
//-------------------------------------------------------------------------------------------------------------------
            break;
    }
};
//-------------------------------------------------------------------------------------------------------------------
// Game Start Function Execution
//-------------------------------------------------------------------------------------------------------------------
startGame();
