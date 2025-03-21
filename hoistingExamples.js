function hoistingExample() {
    console.log(varVariable); // undefined
    console.log(letVariable); // letVariable cannot be accessed before initiazliation
    console.log(constVariable); // constVariable cannot be accessed before initiazliation

    var varVariable = 'I am declared with var';
    let letVariable = 'I am declared with let';
    const constVariable = 'I am declared with const';

    console.log(varVariable); // I am declared with var
    console.log(letVariable); // I am declared with let
    console.log(constVariable); // I am declared with const
}

hoistingExample();

function blockScopeExample() {
    var varVariable = 'Global var variable'; 
    let letVariable = 'Global let variable';
    const constVariable = 'Global const variable';

    {
        var varVariable = 'Block var variable - redeclared';
        let letVariable = 'Block let variable';
        const constVariable = 'Block const variable';

        console.log(varVariable); // Block var variable - redeclared
        console.log(letVariable); // Block let variable
        console.log(constVariable); // Block const variable
    }

    console.log(varVariable); // Block var variable - redeclared
    console.log(letVariable); // Global let variable
    console.log(constVariable); // Global const variable
}

// blockScopeExample();

function temporalDeadZoneExample() {
    console.log(varVariable); // undefined
    console.log(letVariable); // letVariable cannot be accessed before initiazliation
    console.log(constVariable); // constVariable cannot be accessed before initiazliation

    var varVariable = 'I am declared with var';
    let letVariable = 'I am declared with let';
    const constVariable = 'I am declared with const';

    console.log(varVariable); // I am declared with var
    console.log(letVariable); // I am declared with let
    console.log(constVariable); // I am declared with const
}

// temporalDeadZoneExample();


function scopeExample(condition) {
    if (condition) {
        var varVariable = 'Function-scope var variable';
        let letVariable = 'Block-scope let variable';
        const constVariable = 'Block-scope const variable';

        console.log(varVariable); // Function-scope var variable
        console.log(letVariable); // Block-scope let variable
        console.log(constVariable); // Block-scope const variable
    }

    console.log(varVariable); // Function-scope var variable
    console.log(letVariable); // letVariable is not defined
    console.log(constVariable); // constVariable is not defined
}

// scopeExample(true);