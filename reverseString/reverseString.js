let reversedStr = '';

const reverseString = function ( str ) {
    return str.split('').reverse().join('');
}
module.exports = reverseString

// let reversedStr = '';

// const reverseString = function ( str ) {

//     str = str.toString();
//     let sln = str.length;
    
//     for ( let i = 0 ; i < sln ; i++ ) {
        
//         // get the last letter of str;
//         let slicedLetter = str.slice(-1);
        
//         // return str with a letter popped off the end
//         str = str.length - 1;

//         reversedStr += slicedLetter;
//     }
// return reversedStr;
// }
// module.exports = reverseString