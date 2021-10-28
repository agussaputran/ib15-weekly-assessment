const removeFirstAndLastCharacter = (input) => {
  // the process
  let entry = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] != "m") {
      entry += input[i];
    }
  }
  return entry; // the result
};

const reversedString = (input) => {
  let entry = "";
  for (let i = input.length - 1; i >= 0; i--) {
    entry += input[i];
  }
  return entry; // the result
};

console.log(removeFirstAndLastCharacter("malam")); // expected output : ala
console.log(reversedString("siang")); // expected output : gnais
