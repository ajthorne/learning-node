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

if (action === 'total') {
  totalAmount();
} else if (action === 'deposit') {
  depositAmt();
} else if (action === 'withdraw') {
  withdrawAmt();
}
