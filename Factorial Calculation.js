const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a number: ', function(num) {
  let result = 1;  // Initialize to 1 so that multiplication works correctly

  for (let i = num; i >= 1; i--) {
    result *= i;
  }

  console.log(result);
  
  rl.close();
});
