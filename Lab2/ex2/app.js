var ft = require("./comparer");
var fs = require("./calculator");

ft.x = fs.x = 12;
ft.y = fs.y = 2;

var res = ft.AreNumberEqual();
console.log(res);
output=0;
if(res==true)
     output = fs.add();
else 
     output = fs.subtract();

console.log(output);
