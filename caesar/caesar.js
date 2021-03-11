// Understanding modulo is the key to solving this problem concisely !!
// why doesn't this code work on punctuation marks ??
let caesar = function(string, shift) {
    return string
            .split("") // split string into array 
            .map(char => shiftChar(char, shift)) // apply shiftChar function to every element in array
            .join(""); // join array back to string
};
 
// Figure out which codeSet it's in : is code < 97? If A-Z: set code at 65, if a-z: set code at 97
let codeSet = code => (code < 97 ? 65 : 97)

// function to make modulo work with negative numbers, returns positive remainder
let mod = (n, m) => (n % m + m) % m;

// function that returns char after its been shifted
let shiftChar = (char, shift) => {
    
    // get ascii code of char
    let code = char.charCodeAt();

    // if ascii code matches A-Z or a-z,
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        // Return shifted ascii code back to string after...
        return String.fromCharCode(
            // Using modulus function to shift code
               mod(code + shift - codeSet(code), 26) + codeSet(code) 
        );
    }
    // if ascii code doesn't match A-Z or a-z, i.e. is a punctuation mark, then code wasn't shifted
    // return shifted string (to the array element)
    return char;
};

console.log(caesar('Mjqqt, Btwqi!', -5))

module.exports = caesar

// Known array methods: reduce, sort, map, filter, some, every, find, ...

//var. 1: not a good way to do things. Stops working when the shifted number is out of A-Z or a-z range and is negative. see !! 
// const caesar = function(str, shift) {

// // // get array of the charCodes with charCodeAt()
// // let charCodesArray = [];
// // charCodesArray = str.charCodeAt(0);

// // split("") string into array of characters
// let strArray = str.split("");
// console.log(strArray)
// let newStrArray = [];
// let newStr = "";

// strArray.forEach(element => {
//     // get ascii code of A-Z or a-z character
//     ascii = element.charCodeAt(0);
//     console.log(ascii)

//     // if character is A-Z or a-z, work on it
//     // + or - the amount of shift to ascii code
//     if (ascii >= 65 && ascii <= 90 || ascii >= 97 && ascii <= 122) {
//         ascii = ascii + shift; 
//         console.log("ascii debug " + ascii);
//         if(!(ascii >= 65 && ascii <= 90 || ascii >= 97 && ascii <= 122)) {
//             ascii = ascii - 26; // !!
//             console.log("ascii debug inner" + ascii);
//         }
//     // else if character is punctuation or space, keep the same value
//     } else if (ascii < 65 && ascii > 90 || ascii < 97 && ascii > 122) {
//         ascii;
//     }
//     newStrArray.push(ascii)
//     return newStrArray
// })

// // At this point newStrArray is still an array of ascii codes, need to convert to characters
// aln = newStrArray.length;

// newStrArray.forEach(element => {
//     //each ascii element becomes a newChar
//     newChar = String.fromCharCode(element);
//     // each newChar is added to newStrArray
//     newStrArray.push(newChar)
//     // delete the array.length of newStrArray before newChars were pushed
    
// })


// newStrArray.splice(0, aln)

// // turn ascii codes to characters
// newStr = newStrArray.join("");
// console.log(newStr);
// // return str 
// return newStr;
// }


