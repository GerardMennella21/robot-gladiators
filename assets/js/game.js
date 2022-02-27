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

// Enemy Console Log
console.log(",", "Attack:", enemyAttack, "Health:", enemyHealth);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index")
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
for (var i = 0; i <enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Wlcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
    }else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}