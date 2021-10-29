
  
function sumOfArray(arr1, arr2) {
    let result = 0
  
    let newArray = arr1.concat(arr2);
 

    for (let i in newArray) {
        result += newArray[i];
    }
    // show result
    return result
}

console.log(sumOfArray([1,2,3,5], [1,2,3])) // expected output : 17
console.log(sumOfArray([1,2,3], [1,2,3,2])) // expected output : 14
