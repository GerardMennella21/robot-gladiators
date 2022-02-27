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

// Game State

// Shop

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
        }else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame();
};
startGame();
