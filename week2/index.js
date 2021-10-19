const removeFirstAndLastCharacter = (input) => {
    // the process
    let result = '';
    for (let index = 0; index < input.length; index++) {
        if (index === 0 || index === input.length - 1) continue
        result += input[index];
    }
    return result// the result
}

const reversedString = (input) => {
    // the process
    let result = '';
    for (let index = input.length - 1; index >= 0; index--) {
        result += input[index];
    }
    return result// the result
}

console.log(removeFirstAndLastCharacter("malam")) // expected output : ala
console.log(reversedString("siang")) // expected output : gnais