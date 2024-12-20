//Multi-dimensional Array-Array Restructuring

//1st subArray containing names
subArray1 = [
    ["Genevieve"],
    ["juan"],
    ["Luna"],
    ["Gabriel"],
    ["Elise"]
];

//2nd subArray containing age
subArray2 = [
    [24],
    [65],
    [21],
    [5],
    [9]
];

// Create a new multi-dimensional array which contains both subArray 
let combinedArray = subArray1.map((name, index) => [name, subArray2[index]]);

// Log each [name, age] pair per line to the console
combinedArray.forEach(item => console.log(item));