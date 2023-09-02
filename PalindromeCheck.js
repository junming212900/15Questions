const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a word: ', function(word1) {
  let word2 = '';

  // Reverse the word
  for (let j = word1.length - 1; j >= 0; j--) {
    word2 += word1[j];
  }

  // Check if it's a palindrome
  let isPalindrome = true;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      isPalindrome = false;
      break;
    }
  }

  if (isPalindrome) {
    console.log("This is a palindrome");
  } else {
    console.log("This is not a palindrome");
  }

  rl.close();
});