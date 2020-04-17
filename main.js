const lineReader = require('line-reader');
var fs = require('fs');


let XAxis = [];
let YAxis = [];
let ZAxis = [];
let text = "time, x, y, z\n";




async function asyncCall() {
   lineReader.eachLine('log.log', function(line) {
        if(line.includes("Current Position")){
        let data = line.split(" ");
        let x = Number(data[7].substring(34,data[7].length-1));
        let y = Number(data[8].substring(0,data[8].length-1));
        let z = Number(data[9].substring(0,data[9].length-1));
        let time = data[1];
        // console.log(time);
        XAxis.push(x);
        YAxis.push(y);
        ZAxis.push(z);
        text = text + time + "," + x + "," + y + "," + z + "\n";
        // console.log(x,y,z);
        fs.writeFile('xyz.txt', ZAxis + "\n" + XAxis + "\n" + YAxis + "\n", function (err) {
          if (err) throw err;
        });
        fs.writeFile('export.csv', text, function (err) {
          if (err) throw err;
        });
        }
    });
  }
  async function main() {
    console.log("Start");
      await asyncCall();
      console.log("DONE");
  }

main();

  

