var fs = require('fs');

fs.readFile("best_things_ever.txt", "utf8", function(error, data) {
  let dataArr = data.split(',');
  console.log(dataArr);

  //I don't understand the purpose of having this for loop. The above prints the same result?
  // for (var i=0; i < dataArr.length; i++) {
  //   console.log(dataArr[i]);
  // }
})
