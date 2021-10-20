const removeFirstAndLastCharacter = (input) => {
  // the process
  var input = "glints";
  var newInput = input.substring(1, input.length - 1);
  return newInput; // the result
};

const reversedString = (input) => {
  // the process
  var input = "hadiyansyah yusril";
  var newInput = "";

  for (i = input.length - 1; i >= 0; i--) {
    newInput += input[i];
  }
  return newInput; // the result
};

console.log(removeFirstAndLastCharacter("glints")); // expected output : lint
console.log(reversedString("hadiyansyah yusril")); // expected output : lirsuy haysnayidah
