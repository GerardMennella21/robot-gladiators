// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };

//Player Name Function
var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
}

// Player Robot Info
var playerInfo = {
    name : getPlayerName(),
    health : 100,
    attack : 15,
    money : 10,
    // New Game Stat Reset
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    // Shop Health Refill
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!")
        }
    },
    // Shop Attack Upgrade
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!")
        }
    }
};
// Enemy Robot Info
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

// Player Starter Stats
console.log(playerInfo.name + ", Attack:" + playerInfo.attack + " Health:" + playerInfo.health + " Money:" + playerInfo.money);

// Fight Function
var fight = function(enemy) {
    //While Player is Alive
    while(playerInfo.health > 0 && enemy.health > 0){
        // Fight or Skip Choice
        var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // If Skip is Chosen
        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
            // Confirm Window Pops Up
            var confirmSkip = window.confirm("Are you sure you's like to quit?");
            // If Skip Confirmed
            if (confirmSkip) {
                // Skip Alert
                window.alert(playerInfo.name + " has chosen to skip the fight. Goodbye!");
                // Money Deducted
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                // Money Deduction Log
                console.log(playerInfo.name + " has lost 10 dollars for skipping round. " + playerInfo.name + " now has " + playerInfo.money + " Remaining.");
                break;
            }
        }
        // If Fight is Chosen
        if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
            // Player Damage Math
            var playerDamage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            // Remaining Enemy Health
            enemy.health = Math.max(0, enemy.health - playerDamage);
            // Player Attack Description
            console.log(playerInfo.name + " attacked " + enemy.name + " for " + playerDamage + " damage! " + enemy.name + " now has " + enemy.health + " health remaining ");            
            // If Enemy is Defeated
            if (enemy.health <= 0) {
                // Enemy Has Died Notice
                window.alert( enemy.name + " has died!");
                // Player Victory Reward
                playerInfo.money = playerInfo.money + 20;
                // Money Reward Log
                console.log(playerInfo.name + " has been awarded 20 dollars for winning! " + playerInfo.name + " now has " + playerInfo.money + " dollars.");
                break;
            }
            // If Enemy is Still Alive
            else {
                // Enemy Health Remaining
                window.alert( enemy.name + " still has " +enemy.health + " health left.");
            }
            // Enemy Damage Math
            var enemyDamage = randomNumber(enemy.attack - 3, enemy.attack);
            // Remaining Player Health
            playerInfo.health = Math.max(0, playerInfo.health - enemyDamage);
            // Enemy Attack Description
            console.log(enemy.name + " attacked " + playerInfo.name + " for " + enemyDamage + " damage! " + playerInfo.name + " now has " + playerInfo.health + " health remaining ");
            // If Player is Defeated
            if (playerInfo.health <= 0) {
                // Player Has Died Notice
                window.alert(playerInfo.name + " has died!");
                break;
            }
            // If Player is Still Alive
            else {
                // Player Health Remaining
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        }
        // If Other Text is Entered
        else {
            // Invalid Entry Alert
            window.alert("You need to choose a valid option. Try again!");
        }
    }
};

// Game Start Function
var startGame = function() {
    // Player Stat Reset
    playerInfo.reset();
    // New Enemy Loop
    for (var i = 0; i <enemyInfo.length; i++) {
        // If Player is Alive
        if (playerInfo.health > 0) {
            // Welcome + Round Alert
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            // Current Enemy Variable
            var pickedEnemyObj = enemyInfo[i];
            // Current Enemy Entrance Log
            console.log(pickedEnemyObj.name + " has entered the arena!");
            // Random Enenmy Health Math
            var randomNumber = function() {
                var value = Math.floor(Math.random() * 21) + 40;
                return value;
            };
            // Random Enemy Health Value
            pickedEnemyObj.health = randomNumber(40, 60);
            // Current Enemy Info Log
            console.log(pickedEnemyObj.name + ": Health = " + pickedEnemyObj.health + " Attack = " + pickedEnemyObj.attack);
            // Initiate Fight Sequence With Current Enemy
            fight(pickedEnemyObj);
            // As Long As Player Is Alive and There Are Enemies Remaining
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // Option to Enter The Shop Appears
                var storeconfirm = window.confirm("The fight is over, visit the store before the next round?");
                // If Enter Shop is Confirmed
                if (storeconfirm) {
                    // Shop Opens
                    shop();
                }
            }
        // If Player Is Defeated
        }else {
            // Defeated Window Appears
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // End Game Function Initiates
    endGame();
};

// End Game Function
var endGame = function() {
    // Game Ended Alert
    window.alert("The game has now ended. Let's see how you did!")
    // If Player is Alive
    if (playerInfo.health > 0) {
        // Congrats + Score Window
        window.alert("Great job, you survived the game!, You now have a score of " + playerInfo.money +".");
    }
    // If Player is Defeated
    else {
        // You Lose Window
        window.alert("You've lost your robot in battle.");
    }
    // Play Again Prompt
    var playAgainConfirm = window.confirm("Would you  like to play again?")
    // If Play Again Confirmed
    if (playAgainConfirm) {
        // Game Start Function Initiates Again
        startGame()
    }
    // If Play Again Declined
    else {
        // Goodbye Window Appears
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
};

// Shop Function
var shop = function() {
    // Entered Shop Notice
    console.log("entered the shop");
    // Shop Prompt
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    // Shop Options
    switch (shopOptionPrompt) {
        // Refill Text Options
        case "refill":
        case "REFILL":
        case "Refill":
            // Refill Health
            playerInfo.refillHealth();
            break;
        // Attack Text Options
        case "upgrade":
        case "UPGRADE":
        case "Upgrade":
            // UpgradeAttack
            playerInfo.upgradeAttack();
            break;
        // Leave Text Options
        case "leave":
        case "LEAVE":
        case "Leave":
            // Leave Store Alert
            window.alert("Leaving the store.");
            break;
        // Invalid Entry
        default:
            // Invalid Entry Alert
            window.alert("You did not pick a valid option. Try again.");
            // Reopen Shop
            shop();
            break;
    }
};

// Game Start Function Execution
startGame();
