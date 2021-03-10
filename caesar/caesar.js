// Known array methods: reduce, sort, map, filter, some, every, find, ...

const caesar = function(str, shift) {

// // get array of the charCodes with charCodeAt()
// let charCodesArray = [];
// charCodesArray = str.charCodeAt(0);

// split("") string into array of characters
let strArray = str.split("");
console.log(strArray)
let newStrArray = [];
let newStr = "";

strArray.forEach(element => {
    // get ascii code of A-Z or a-z character
    ascii = element.charCodeAt(0);
    // console.log(ascii)

    // if character is A-Z or a-z, work on it
    if (ascii >= 65 && ascii <= 90 || ascii >= 97 && ascii <= 122) {
        ascii = ascii + (shift);
    // else if character is punctuation or space, keep the same value
    } else if (ascii < 65 && ascii > 90 || ascii < 97 && ascii > 122) {
        ascii;
    }
    newStrArray.push(ascii)
    return newStrArray
})
console.log(newStrArray);

// At this point newStrArray is still an array of ascii codes, need to convert to characters
aln = newStrArray.length;
console.log(aln)

newStrArray.forEach(element => {
    //each ascii element becomes a newChar
    newChar = String.fromCharCode(element);
    // each newChar is added to newStrArray
    newStrArray.push(newChar)
    // delete the array.length of newStrArray before newChars were pushed
    
})
console.log(newStrArray)
newStrArray.splice(0, aln)
newStr = newStrArray.join("");
console.log(newStr);
return newStr;
// + or - the amount of shift to ascii code

// turn ascii codes to characters

// return str 

}

caesar('Aaa', 1)

module.exports = caesar
