const sumAll = function( min, max ) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
    if ( min < 0 || max < 0 ) return 'ERROR';
    if (min > max) {
        let temp = 0;
        temp = min;
        min = max;
        max = temp;
    }
    let sum = 0;
    for (let i = min; i < max + 1; i++) 
        sum += i;
    return sum;
};
module.exports = sumAll

// var. 2
// const sumAll = function( num1, num2 ) {
    
//     // - make sure you pay attention to the function parameters. 
//     // - negative numbers and non-numbers return 'ERROR'.
//         if ( typeof num1 == "number" && num1 >= 0 && typeof num2 == "number" && num2 >= 0) {
        
//     // - create a variable to hold the final sum 
//             let finalSum = 0;
    
//     // - loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
//     // - on each iteration add the number to the sum
//             if ( num1 <= num2 ) {
//                 finalSum = num1;
//                 for ( let i = num1 ; i < num2 ; i++ )
//                 finalSum = finalSum + num1 + i ; // should be do while loop 
//             } else if ( num2 < num1 ) {
//                 finalSum = num2;
//                 for ( let i = num2 ; i < num1 ; i++ )
//                 finalSum = finalSum + num2 + i ;
//             }
//             return finalSum;
//     } else if ( num1 < 0 || num2 < 0) { 
//         return 'ERROR';
//     } else { 
//         return 'ERROR'; 
//     }
//     // - return the sum after finishing the loop
//     }
    
//     module.exports = sumAll