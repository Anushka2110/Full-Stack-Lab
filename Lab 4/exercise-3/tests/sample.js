

var gretter = function () {
    return "hello";
}
greeter.should.be.a('string');
greeter.should.equal('hello');
greeter.should.have.lengthOf(5);

describe('greeter', function () {
    
    describe('when used synchronously', function () {
        
        it('should return return hello', function () {
           greeter.should.equal("hello");
        });
    
    })
});

