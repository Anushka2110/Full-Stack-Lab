var events = require("events");
var eventEmitter = new events.EventEmitter();


var fn = function(){
    console.log("call me.");
}

var fn1 = function(){
    console.log("Alarm has been triggered");
}
var fn2 = function(){
    console.log("call 911");
}


eventEmitter.on("call",fn).on("call",fn1).on("call",fn2);
eventEmitter.emit("call");