const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('Please enter a string/number: ', function(word) {
    
    let word2 = '';

    for( var i = word.length-1; i>=0; i--){
        word2 += word[i];
    }
    console.log(word2);
    rl.close();
    
})
