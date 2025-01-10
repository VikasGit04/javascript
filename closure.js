function outerFunction() {
    let count = 0;
    return function innerFunction1() {
        count++;
        console.log(count);

    }

    // let innerFunction1 = count++;
    
    // return innerFunction1;
}

const counter = outerFunction();
counter();
counter();
const counter2 = outerFunction();
counter2();

// outerFunction();
// outerFunction();