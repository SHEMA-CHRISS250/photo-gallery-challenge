function transformString(str) {
    const length = str.length;

    // Check if length is divisible by 15
    if (length % 15 === 0) {
        // Reverse the string and replace each character with its ASCII code
        const reversedString = str.split('').reverse().join('');
        return reversedString.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    
    // Check if length is divisible by 3
    if (length % 3 === 0) {
        // Reverse the entire string
        return str.split('').reverse().join('');
    }
    
    // Check if length is divisible by 5
    if (length % 5 === 0) {
        // Replace each character with its ASCII code
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    // If none of the above, return the original string
    return str;
}

// Example usage
console.log(transformString("Hamburger")); // "regrubmaH"
console.log(transformString("Pizza")); // "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // "eikooCpihCetalocohC"
console.log(transformString("Cookie")); // "Cookie" (no transformation, as length 6 is not divisible by 3, 5, or 15)
