const removeFirstAndLastCharacter = (input) => {
    const arrOfLetter = input.split('')
    arrOfLetter.pop()
    arrOfLetter.shift()
    const result2 = arrOfLetter.join('')
    return result2
}
const reversedString = (input) => {
    // the process
    const word = input.split('')
    const wordLength = input.length

    const subKataTerbalik = word.map(
        function(huruf, index) {
            return word[wordLength-(1+index)]
        }
    ) 
    const kataFinal = subKataTerbalik.join('')
    return kataFinal // the result
}

console.log(removeFirstAndLastCharacter("malam")) // 
console.log(reversedString("siang")) 