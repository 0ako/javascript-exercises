// !! I did not fully understand the problem and all the ways it can be solved. 
// It can be solved if the reversed string matches the forward string.

// Array methods: reduce, sort, map, filter, some, every, find, ...

let palindromes = function(str) {
    str = str.toLowerCase().replace(/[^A-Za-z]/g, "")
    return (
        str
            .split("")
            .reverse()
            .join("") == str
    );
};

// BELOW: I wasted a few hours solving this challenge without array methods:
// let palindromes = function(rawString) {

//     // split the string into characters, remove spaces and punctuation
//     let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';
//     let rawLetters = rawString.split('');
//     let cleanLetters = rawLetters.filter(function(letter) {
//         return punctuation.indexOf(letter) === -1;
//     });
//     let cleanString = cleanLetters.join('');
//     cleanString = cleanString.toLowerCase();
//     // console.log(cleanString);

//     // find the centermost character by dividing by 2
//     let sln = cleanString.length;
//     // console.log(sln);
//     let hsln = sln/2 
//     // console.log(hsln);

//     let front = "";
//     let back = ";"
//     // if result is not integer, then round up to find center character
//     if (!(Number.isInteger(hsln))) {
//         index = hsln - 0.5;
//         front = cleanString.slice(0, index + 1);
//         back = cleanString.slice(index);
//         // console.log(front, back);
//     } else if (Number.isInteger(hsln)){
//         index = hsln; 
//         front = cleanString.slice(0, index);
//         back = cleanString.slice(index);
//         // console.log(front, back);
//     }
//     // console.log(`Index is ${index}`)

//     // slice the string in half
//     // let front = cleanString.slice(0, index + 1);
//     // let back = cleanString.slice(index);
//     // console.log(front, back);

//     // reverse the first half of the string
//     function reverseString(str) {
//         return str.split('').reverse().join('');
//     }

//     front = reverseString(front);
//     // console.log(front);
//     // console.log(back);
//     // compare strings
//     if (front == back) return true;
//     else if (front !== back){
//         return false;
//     }
// }
// // if all characters match, is palindrome (true)
// // if any character doesn't match, is not (false)

// palindromes("Animal loots foliated detail of stool lamina.")

module.exports = palindromes
