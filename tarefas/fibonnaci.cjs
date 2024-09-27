const prompt = require('prompt-sync')();

function fibonacci(index) {
  if (index <= 1) {
    return index;
  } else {
    let seq_fibonnaci = [0, 1];
    for (let i = 2; i <= index; i++) {
      seq_fibonnaci[i] = seq_fibonnaci[i - 1] + seq_fibonnaci[i - 2];
    }
    return seq_fibonnaci[index];
  }
}

const index = parseInt(prompt('Digite um número: '));
console.log(fibonacci(index));