const say = require('say')
 

say.speak('Hello!')
 

say.stop()
 

say.speak("Hello?", 'Alex', 0.5)

var sorryDave = function () {
    say.speak("I'm sorry, Dave.", 'Cellos', 0.75);
}

setTimeout(sorryDave, 5000);
