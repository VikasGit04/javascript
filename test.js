// Q1
function outer() {
	var a = 10;
	function inner() {
		console.log(a);
	}
    function middle() {
        var a = 20;
        inner();
        console.log(a);
	}
	middle();
}

// outer();

// Q2
function createIncrement() {
    let count = 0;
    function increment() {
        count++;
		console.log('Count:', count);
    }
    let message = `Count is ${count}`;

    function log() {
        console.log(message);
    }
    return [increment, log];
}

// const [increment, log] = createIncrement();
// increment();
// increment();
// log();

// Q3
function outerFn() {
    var a = 1;
    let b = 2;
    
    function innerFn() {
        // var a = 3; // Different 'a'
        // let b = 4; // Different 'b'
		a=3;
		b=4;
        console.log(a); // Inner 'a'
        console.log(b); // Inner 'b'
    }
    
    innerFn();
    console.log(a); // Outer 'a'
    console.log(b); // Outer 'b'
}
outerFn();