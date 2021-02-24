const removeFromArray = function( ...args ) {
    const array = args[0];
    return array.filter(val => !args.includes(val));
}

module.exports = removeFromArray

// var. 1
// const removeFromArray = function( ...args ) {
//     // array is extracted from array items inputted as arguments
//     let array = args[0];
//     // initialize an empty newArray
//     let newArray = [];
//     // for each item in the new array, if it does not match any function argument 
//     // which are items to remove, push it into newArray
//     array.forEach((item) => {
//         if ( !args.includes(item) ) { // MISTAKE I used: if ( !array.includes(args) )
//             newArray.push(item); 
//         }
//     }
//     );
//     // and return this newArray
//     return newArray; // MISTAKE I used this line in the inner function
// }
// module.exports = removeFromArray

// var. 2
// const removeFromArray = function( ...args ) {
//     const array = args[0];
//     const newArray = [];
//     array.forEach((item) => {
//         if ( !args.includes(item) ) {
//             newArray.push(item);
//         }
//     });
//     return newArray;
// }
// module.exports = removeFromArray

// var. 3
// const removeFromArray = function( inputArray, elementToRemove ) {

//     // need to use rest parameter to turn arguments into an array. 
//     // but the values outside the inputted array need to be deleted. 

//     let args = Array.from ( inputArray );
//     let pos = args.indexOf(`${elementToRemove}`);
//     args = args.splice(pos, 1);
//     return args;

// }
// module.exports = removeFromArray