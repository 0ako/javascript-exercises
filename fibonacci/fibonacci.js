// Fibonacci Sequence 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, ...
// fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6) // returns 8

// var .1 Iterative solution !! 

// var.2 Recursive solution:
// function fibonacci(n) {
//     n = Number(n);
//     if (n < 0) return "OOPS";
//     if (n === 0) return 0;
//     if (n === 1) return 1;

//     let term1 = fibonacci(n-1);
//     let term2 = fibonacci(n-2);
    
//     return term1 + term2; 
// }

// https://medium.com/swlh/how-to-think-recursively-solving-recursion-problems-in-4-steps-95a6d07aa866

console.log(fibonacci(4));
module.exports = fibonacci


// Array methods: filter, map, reduce, sort,
// Array methods: some, every, find, ...spread