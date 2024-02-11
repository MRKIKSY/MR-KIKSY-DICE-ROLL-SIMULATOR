# MR-KIKSY-DICE-ROLL-SIMULATOR
This simple html, css and js files was created with VANILLA JAVASCRIPT. 
It consists of the following key components:

Initialization: It initializes variables to reference HTML elements such as the roll button, dice element, and roll history list.

Event Listener: It adds an event listener to the roll button, triggering a roll animation and the rollDice() function when clicked.

Dice Rolling Logic: The rollDice() function generates a random number between 1 and 6, representing a dice roll. It then updates the dice face displayed and adds the roll result to the roll history.

Update Roll History: The updateRollHistory() function clears the existing roll history and updates it with the latest rolls, displaying them as a list of rolls with their corresponding dice faces.

Get Dice Face: The getDiceFace() function takes a roll result as input and returns the corresponding Unicode character for the dice face.

Animation: When the roll button is clicked, the dice element receives a CSS class for a roll animation. After a short delay, the animation class is removed, and the rollDice() function is called to update the dice face and roll history.

Overall, this code provides a basic implementation of a dice roll simulator with a visual representation of the dice face and a history of previous rolls.
