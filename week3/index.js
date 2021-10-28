function sumOfArray(arr1, arr2) {
  let result = 0;
  // the logic
  // type the code below
  for (let i = 0; i < arr1.length; i++) {
    result += arr1[i];
  }
  for (let j = 0; j < arr2.length; j++) {
    result += arr2[j];
  }

  // type the code above
  return result;
}

console.log(sumOfArray([1, 2, 3, 5], [1, 2, 3])); // expected output : 17
console.log(sumOfArray([1, 2, 3], [1, 2, 3, 2])); // expected output : 14
