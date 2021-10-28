function sumOfArray(arr1, arr2) {
  let result = 0;
  // the logic
  // type the code below

  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  for (let j = 0; j < arr1.length; j++) {
    result += arr1[j];
  }
  // type the code above
  return result;
}

console.log(sumOfArray([1, 2, 3, 5], [1, 2, 3])); // expected output : 17
console.log(sumOfArray([1, 2, 3], [1, 2, 3, 2])); // expected output : 14

//   arr1.concat(arr2).forEach((data) => (result += data));

//   let c = [];
//   for (var i = 0; i < Math.max(arr1.length, arr2.length); i++) {
//     c.push((arr1[i] || 0) + (arr2[i] || 0));

// result = arr1.map((a, i) => a + arr2[i]);

// return arr1;

// arr1.forEach(result);

// function hasil(arr1) {
//   hasil += arr1;
// }
