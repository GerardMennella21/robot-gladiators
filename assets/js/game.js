// Player Robot
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Player Console Log
console.log(playerName + ",", "Attack:", playerAttack, "Health:", playerHealth, "Money:", playerMoney);

// Enemy Robot
var enemyName = "Roborto"
var enemyHealth = 50;
var enemyAttack = 12;

// Enemy Console Log
console.log(enemyName + ",", "Attack:", enemyAttack, "Health:", enemyHealth);

// Fight Function
var fight = function() {
    // Alert players they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    // Fight Prompt
    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // Fight Prompt Log
    console.log(promptFight);

    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {

        // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;    
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining "
        );
        
        // Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " +enemyHealth + " health left.");
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining "
        );
        
        // Check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
     // If player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
        var confirmSkip = window.confirm("Are you sure you's like to quit?");
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");
            playerMoney = playerMoney - 2;
            console.log(playerName, ", Money - 2 Money: ", playerMoney)
        }
        else {
            fight()
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
};

fight();