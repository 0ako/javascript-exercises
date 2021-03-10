function add (a, b) {
	return sum = a + b;
}

function subtract (a, b) {
	return difference = a - b;
}

function sum (array) {	
	return array.reduce((acc, i) => acc + i, 0);
};

function multiply (array) {
	return array.length 
	? array.reduce((acc, n) => acc * n) 
	: 0;
}

function power(i, e) {
	return i ** e;
	// var. 2: Math.pow(i, e);	
}

function recursiveFactorial (n) {
	if (n==0){
		return 1;
	}
	return n * recursiveFactorial (n-1);
}

// var. 2
// function factorial(n) {
// 	if (n == 0) return 1;
// 	let product = 1;
// 	for (let i = n; i > 0; i--) {
// 		product *= i;
// 	}
// 	return product;
// }

// var. 1 
// 	if (n==0) return 1;
// 	else {
// 		for(let i = n - 1; i > 0; i--) {
// 			n = n * i;
// 		}
// 		return n;
// 	}
// }

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}