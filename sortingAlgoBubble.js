//Sorting Algorithms with Bubble Sort

// Initialize an empty array to hold the numbers
let numbersArray = [];

// Function to add numbers to the array using prompt
function populateArray() {
    for (let i = 0; i < 10; i++) {
        const number = prompt(`Enter number ${i + 1} (current default: ${[42, 25, 12, 63, 48, 10, 16, 5, 30, 78][i]}):`);
        // If user does not provide input, use the default value
        numbersArray.push(number ? Number(number) : [42, 25, 12, 63, 48, 10, 16, 5, 30, 78][i]);
    }
}

// Bubble Sort function
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    // Outer loop for each element in the array
    for (let i = 0; i < n - 1; i++) {
        swapped = false; // Track if a swap occurred in this pass

        // Inner loop for comparing adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`); // Log comparison

            // If the current element is greater than the next one, swap them
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap using destructuring
                swapped = true; // Mark that a swap occurred
                console.log(`Swapped ${arr[j]} and ${arr[j + 1]}`); // Log swap
            }
        }

        // If no swaps occurred in this pass, the array is sorted
        if (!swapped) {
            break;
        }
    }
}

// Populate the array with user input or defaults
populateArray();

// Sort the array using bubble sort
bubbleSort(numbersArray);

// Log the sorted array
console.log("Sorted Array:", numbersArray);
