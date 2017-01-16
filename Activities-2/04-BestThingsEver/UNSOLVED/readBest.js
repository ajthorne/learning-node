var fs = require('fs');

fs.readFile("best_things_ever.txt", "utf8", function(error, data) {
  let dataArr = data.split(',');
  console.log(dataArr);
})
