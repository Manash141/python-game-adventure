function processInput() {
    var userInput = document.getElementById("user-input").value;
    var output = document.getElementById("game-output");
    if (userInput.toLowerCase() === "enter") {
        output.textContent = "You entered the forest! What do you want to do next?";
    } else if (userInput.toLowerCase() === "leave") {
        output.textContent = "You walked away from the forest.";
    } else {
        output.textContent = "Invalid choice, try again!";
    }
}
