// Player Robot
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Player Console Log
console.log(playerName + ",", "Attack:", playerAttack, "Health:", playerHealth, "Money:", playerMoney);


// Enemy Robot
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Enemy Names
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index")
    console.log(enemyNames[i], ",", "Attack:", enemyAttack, "Health:", enemyHealth);
}

// Fight Function
var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0){
        // Fight Prompt
        var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // Skip
        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
            var confirmSkip = window.confirm("Are you sure you's like to quit?");
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight. Goodbye!");
                playerMoney = playerMoney - 10;
                console.log("playerMoney-10 playerMoney:", playerMoney)
                break;
            }
        }
        // Fight
        if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
            // Damage Enemy
            enemyHealth = enemyHealth - playerAttack;
            // Damage Enemy Log    
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining ");            
            // Defeat/Damage Enemy
            if (enemyHealth <= 0) {
                window.alert( enemyName + " has died!");
                playerMoney = playerMoney + 20;
                console.log("playerMoney+20 playerMoney:" + playerMoney);
                break;
            }
            else {
                window.alert( enemyName + " still has " +enemyHealth + " health left.");
            }
            // Damage Player
            playerHealth = playerHealth - enemyAttack;
            // Damage Player Log
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining "
            );            
            // Defeat/Damage Player
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
        // Invalid Entry
        else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }
};

// Start Function
var startGame = function() {
    playerHealth = 100
    playerMoney = 10
    playerAttack = 10
    for (var i = 0; i <enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                var storeconfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeconfirm) {
                    shop();
                }
            }
        }else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame();
};

// End Function
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!")
    if (playerHealth > 0) {
        window.alert("Great job, you survived the game!, You now have a score of " + playerMoney +".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you  like to play again?")
    if (playAgainConfirm) {
        startGame()
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
};

// Shop Function
var shop = function() {
    console.log("entered the shop");
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
        case "Refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "upgrade":
        case "UPGRADE":
        case "Upgrade":    
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "leave":
        case "LEAVE":
        case "Leave":        
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
};
startGame();
