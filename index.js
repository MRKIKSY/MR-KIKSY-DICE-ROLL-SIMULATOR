// Get references to HTML elements
const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice"); // Get the dice element
const rollHistoryEl = document.getElementById("roll-history"); // Get the roll history element

// Initialize an empty array to store roll history
let historyList = [];

// Function to simulate rolling a dice
function rollDice() {
  // Generate a random number between 1 and 6 (inclusive)
  const rollResult = Math.floor(Math.random() * 6) + 1;
  
  // Get the Unicode character representing the dice face for the roll result
  const diceFace = getDiceFace(rollResult);
  
  // Update the inner HTML of the dice element to display the current dice face
  diceEl.innerHTML = diceFace;
  
  // Add the roll result to the roll history
  historyList.push(rollResult);
  
  // Update the roll history displayed on the page
  updateRollHistory();
}

// Function to update the roll history displayed on the page
function updateRollHistory() {
  // Clear the existing roll history displayed on the page
  rollHistoryEl.innerHTML = "";
  
  // Iterate through the roll history list and create list items to display each roll
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    // Set the inner HTML of each list item to display the roll number and corresponding dice face
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
    // Append each list item to the roll history element
    rollHistoryEl.appendChild(listItem);
  }
}

// Function to get the Unicode character representing the dice face for a given roll result
function getDiceFace(rollResult) {
  // Use a switch statement to return the corresponding Unicode character for the roll result
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}

// Event listener for the roll button click event
buttonEl.addEventListener("click", () => {
  // Add a CSS class for roll animation to the dice element
  diceEl.classList.add("roll-animation");
  
  // Set a timeout to remove the roll animation class and call the rollDice function after a delay
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000); // Delay for 1000 milliseconds (1 second)
});
