function sumOfArray(arr1, arr2) {
    let result = 0
    // the logic 
    // type the code below
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const fusionArr = arr1.concat(arr2);
    result = fusionArr.reduce(reducer);
    // type the code above
    return result;
}

console.log(sumOfArray([1, 2, 3, 5], [1, 2, 3])) // expected output : 17
console.log(sumOfArray([1, 2, 3], [1, 2, 3, 2])) // expected output : 14
