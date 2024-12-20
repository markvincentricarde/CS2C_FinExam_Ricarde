//Grocery Items with Stacks

// Initialize an empty array to store grocery items
let groceryStack = [];

// Function to check if the stack is empty and return the top item
function peek() {
    if (groceryStack.length === 0) {
        console.log("The stack is empty.");
        return null; // Return null if the stack is empty
    }
    console.log("Top item in stack:", groceryStack[groceryStack.length - 1]);
    return groceryStack[groceryStack.length - 1]; // Return the top item
}

// Function to add an item to the stack
function push(item) {
    groceryStack.push(item); // Add item to the end of the array (top of the stack)
    console.log(`Added item: ${item}`); // Log added item
    peek(); // Call peek to show the current top item
    console.log("Current Stack:", groceryStack); // Print current stack
}

// Function to remove the last added item from the stack
function pop() {
    const removedItem = groceryStack.pop(); // Remove the last item from the array
    if (removedItem) {
        console.log("Removed item:", removedItem); // Show removed item
    }
    peek(); // Call peek to show the new top item
    console.log("Current Stack:", groceryStack); // Print current stack
}

// Prompt user for five grocery items and push them onto the stack
for (let i = 0; i < 5; i++) {
    const item = prompt(`Enter grocery item ${i + 1}:`); // Get user input
    push(item); // Push each item onto the stack
}

// Example usage of pop function (can be called as needed)
while (true) {
    const shouldPop = prompt("Do you want to remove the last added item? (yes/no)");
    if (shouldPop.toLowerCase() === 'yes') {
        pop(); // Remove the last added item from the stack
    } else {
        break; // Exit loop if user does not want to pop anymore
    }
}
