function removeFirstAndLastCharacter(input) {
  // the process

  var newInput = input.substring(1, input.length - 1);
  return newInput; // the result
}

function reversedString(input) {
  // the process

  var newInput = "";

  for (i = input.length - 1; i >= 0; i--) {
    newInput += input[i];
  }
  return newInput; // the result
}

console.log(removeFirstAndLastCharacter("glints")); // expected output : lint
console.log(reversedString(" yusril hadiyansyah")); // expected output : lirsuy haysnayidah
