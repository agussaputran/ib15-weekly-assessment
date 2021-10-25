const removeFirstAndLastCharacter = (input) => {
    let data = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] != "m") {
            data += input[i];
        }
    }
    return data;
};

const reversedString = (input) => {
    let data = "";
    for (let i = input.length - 1; i >= 0; i--) {
        data += input[i]
    }
    return data;
};

console.log(removeFirstAndLastCharacter("malam")); // expected output : ala
console.log(reversedString("siang")); // expected output : gnais
