function sumOfArray(arr1, arr2) {
    let result = 0
    // the logic 
    // type the code below
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const array1 = arr1.reduce(reducer);
    const array2 = arr2.reduce(reducer);
    result = array1 + array2;
    // type the code above
    return result
}

console.log(sumOfArray([1, 2, 3, 5], [1, 2, 3])) // expected output : 17
console.log(sumOfArray([1, 2, 3], [1, 2, 3, 2])) // expected output : 14