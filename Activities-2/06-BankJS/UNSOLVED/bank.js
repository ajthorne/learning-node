//total (sum), deposit (add number), withdraw (subtract number), lotto (subtract amount or add random number)
let fs = require('fs');

let action = process.argv[2];
let value = process.argv[3];

function totalAmount () {
  fs.readFile('bank.txt', 'utf8', function(err, data) {
    data = data.split(',');
    let result = 0;

    for (var i=0; i < data.length; i++) {
      result += parseFloat(data[i]);
    }
    console.log('You have a total of $' + result.toFixed(2));
  })
}

function depositAmt() {
  fs.appendFile('bank.txt', ', ' + value);
  console.log('You deposited ' + '$' + value + '.');
}

function withdrawAmt() {
  fs.appendFile('bank.txt', ', -' + value);
  //add negative value to withdraw funds
  console.log('You withdrew ' + '$' + value + '.');
}

function lotto() {
  let rando = Math.floor((Math.random() * 10) + 1);
  //gets random number between 1 and 10
  console.log('Your number: ', rando);

  if (rando === 2) {
    fs.appendFile('bank.txt', ', ' + rando)
    console.log("You won the lottery! Here's $2.");
  }
  
  else {
    fs.appendFile('bank.txt', ', -' + 0.33);
    console.log('You lost $0.33');
  }
}

if (action === 'total') {
  totalAmount();
} else if (action === 'deposit') {
  depositAmt();
} else if (action === 'withdraw') {
  withdrawAmt();
} else if (action === 'lotto') {
  lotto();
}
