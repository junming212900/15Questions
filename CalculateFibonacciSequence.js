const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter a word: ', function(N) {
    N = parseInt(N);  // Convert string input to number
    const array = new Array(N).fill(0);  // Initialize array with zeros
    array[0] = 0;  // First Fibonacci number is 0
    array[1] = 1;  // Second Fibonacci number is 1

    for (var i = 2; i <= N; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }

    for (var i = 0; i <= N; i++) {
        console.log(array[i]);
    }

    rl.close();
});