function sumOfArray(arr1, arr2) {
    let result = 0;
    // the logic
    // type the code below
    let newArray = arr1.concat(arr2);

    for (let i = 0; i < newArray.length; i++) {
    result += newArray[i];
    }

    return result;
  }
  
  console.log(sumOfArray([1, 2, 3, 5], [1, 2, 3])); // expected output : 17
  console.log(sumOfArray([1, 2, 3], [1, 2, 3, 2])); // expected output : 14