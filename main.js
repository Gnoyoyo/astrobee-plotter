const lineReader = require('line-reader');
var fs = require('fs');
let text = "time, x, y, z\n";

async function asyncCall() {
   lineReader.eachLine('log.log', function(line) {
        if(line.includes("Current Position")){
        let data = line.split(" ");
        let x = Number(data[7].substring(34,data[7].length-1));
        let y = Number(data[8].substring(0,data[8].length-1));
        let z = Number(data[9].substring(0,data[9].length-1));
        let time = data[1];
        text = text + time + "," + x + "," + y + "," + z + "\n";
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

  

