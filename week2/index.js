const removeFirstAndLastCharacter = (input) => {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    if (i === 0 || i === input.length - 1) continue;
    result += input[i];
  }
  return result;
};

const reversedString = (input) => {
  let result = "";
  for (let i = input.length - 1; 0 <= i; i--) {
    result += input[i];
  }
  return result;
};

console.log(removeFirstAndLastCharacter("malam"));
console.log(reversedString("siang"));
