/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasRope = true;
const hasGoldCoins = true;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  console.log("Once through the mountains, you find yourself at an eerie cave.");
  const choice2 = readline.question("Do you bravely enter the 'cave' to explore, or do you keep on your path to the 'river'?")
  
  if (choice2 === "cave" && hasRope) {
    console.log("You have your rope with you, so why not go exploring?!");
  }
  else if (choice2 === "cave" && !hasRope) {
    console.log("The cave is looking a bit too crazy for your liking, so you decide to keep trudging on to the river");
  }
  else if (choice2 === "river" && hasGoldCoins) {
    console.log("You safely get to the river where you meet a magical Unicorn!");
    console.log("The magical Unicorn is in distress!  An evil Gnome has stolen her baby, and she needs someone to help her get it back!");
    const choice3 = readline.question("Do you decide to 'help her', or tell her you'll go to the village to 'seek help and weapons'??");
  }
} 
if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
}
if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} 
else if (choice === "village" && !hasMap) {
  console.log("You get lost and wander aimlessly.");
}
 
  

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/