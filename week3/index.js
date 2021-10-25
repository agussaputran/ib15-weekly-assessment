function sumOfArray(arr1, arr2) {
  let result = 0;
  // the logic
  // type the code below
  let arrayBaru = arr1.concat(arr2);
  let jumlah = (result = arrayBaru.reduce(function (akumulasi, valueNow) {
    return akumulasi + valueNow;
  }));

  return result;
}

console.log(sumOfArray([1, 2, 3, 5], [1, 2, 3])); // expected output : 17
console.log(sumOfArray([1, 2, 3], [1, 2, 3, 2])); // expected output : 14
