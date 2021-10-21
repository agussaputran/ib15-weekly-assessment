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
    for (let j = input.length - 1; j >= 0; j--) {
        data += input[j];
    }
    return data;
};

console.log(removeFirstAndLastCharacter("malam")); // expected output : ala
console.log(reversedString("siang")); // expected output : gnais
