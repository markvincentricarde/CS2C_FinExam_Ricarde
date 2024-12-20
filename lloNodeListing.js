//Linked List Operations - Node Listing

// Class representing a single node in the linked list
class Node {
    constructor(value) {
        this.value = value; // Set the value of the node
        this.next = null; // Initialize next node as null
    }
}

// Class representing the linked list
class LinkedList {
    constructor() {
        this.head = null; // Initialize head as null
        this.size = 0; // Initialize size as 0
    }

    // Method to append a new node to the linked list
    append(value) {
        const newNode = new Node(value); // Create a new node with the given value
        
        if (this.head === null) {  // If the list is empty
            this.head = newNode; // Set head to the new node
        } else {
            let current = this.head; // Start from the head
            while (current.next !== null) { // Traverse to the end of the list
                current = current.next;
            }
            current.next = newNode; // Link the new node at the end
        }
        
        this.size++; // Increment size of the list
        this.print(); // Print the updated list
    }

    // Method to print all nodes in the linked list
    print() {
        let current = this.head; // Start from head
        let result = [];  // Array to hold values for printing
        
        while (current !== null) { // Traverse through the list
            result.push(current.value);// Add each value to result array
            current = current.next;
        }
        
        console.log("Current Linked List: ", result.join(" -> ")); // Print the linked list
    }
}

// Example usage:
const myLinkedList = new LinkedList();
myLinkedList.append("Data Structures-Array");
myLinkedList.append("Variable Type-Integer");
myLinkedList.append("Sorting Algorithm-Bubble Sort");
