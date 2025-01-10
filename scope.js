function testScope() {
    console.log(x); undefined

    if (true) {
        var x = 10;
    }
    
    console.log(x); // 10
}
// testScope();

function blockScopeExample() {
    var x = 1;
    let y = 2;
    
    {
        var x = 3;
        let y = 4;
        
        console.log(x); // 3
        console.log(y); // 4
    }
    
    console.log(x); // 3
    console.log(y); // 2
}
// blockScopeExample();

function redeclarationTest() {
    var a = 1;
    var a = 2; // Allowed
    
    let b = 3;
    // let b = 4; // Will this line cause an error if uncommented? Yes , Error: b has already been declared
    
    console.log(a); // 2
    console.log(b); // 3
}
// redeclarationTest();

function tdzTest() {
    console.log(a); // undefined
    console.log(b); // cannot access 'b' before initialization
    
    var a = 5;
    let b = 6;
    
    console.log(a); // 5
    console.log(b); // 6
}
// tdzTest();

function loopTest() {
    for (var i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i); // 0, 1, 2, 
        }, i * 1000);
    }

    for (let j = 0; j < 5; j++) {
        setTimeout(() => {
            console.log(j); // What will be logged?
        }, j * 1000);
    }
}
// loopTest();

function outer() {
    var a = 1;
    let b = 2;
    
    function inner() {
        var a = 3; // Different 'a'
        let b = 4; // Different 'b'
        console.log(a); // Inner 'a'
        console.log(b); // Inner 'b'
    }
    
    inner();
    console.log(a); // Outer 'a'
    console.log(b); // Outer 'b'
}
// outer();


