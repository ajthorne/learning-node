var fs = require('fs');

fs.readFile("best_things_ever.txt", "utf8", function(error, data) {
  let dataArr = data.split(',');
  console.log(dataArr);

  //for more readibility...
  for (var i=0; i < dataArr.length; i++) {
    console.log(dataArr[i]);
  }
})
