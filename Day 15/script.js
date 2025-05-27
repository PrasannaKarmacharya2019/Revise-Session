function countCharacters(str) {
    let counts = {}; // Object to store character counts

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // Check if character already exists in the object
        if (counts[char]) {
            counts[char] = counts[char] + 1; // Increment count
        } else {
            counts[char] = 1; // Initialize count to 1
        }
    }

    // Print the result
    for (let key in counts) {
        console.log(key + " : " + counts[key]);
    }
}

// Example usage
let input = prompt("Enter a string:");
countCharacters(input);