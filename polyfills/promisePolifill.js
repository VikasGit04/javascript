

// var Promise: PromiseConstructor = new <any>(executor: (resolve: (val: any) => void, reject: (reason?: any) => void) => void) => Promise<any>

function PromisePolyfill(executor) {
    let onResolve, onReject, isFulfilled = false, isCalled = false, isRejected = false, value;

    this.then = function (callback){
        onResolve = callback;
        if ( isFulfilled && !isCalled) {
            onResolve(value);
            isCalled = true;
        }

        return this;
    };
    
    this.catch = function (callback){
        onReject = callback;
        if (isRejected && !isCalled) {
            onReject(value);
            isCalled = true;
        }
        return this;
    };

    function resolve(val) {
        isFulfilled = true;
        value = val;
        if (typeof onResolve === 'function') {
            isCalled = true;
            onResolve(val);
        }
    }

    function reject(val) {
        isRejected = true;
        value = val;

        if(typeof onReject === 'function') {
            isCalled = true;
            onReject(val);
        }
        
    }

    executor(resolve, reject);
} 

PromisePolyfill.resolve = (val) => {
    return new PromisePolyfill(function (resolve,reject) {
        resolve(val);
    });
}

PromisePolyfill.reject = (val) => {
    return new PromisePolyfill((resolve,reject)=> reject(val));
}

let testPromise = new PromisePolyfill((resolve,reject)=> {
    // setTimeout(()=> {
        // resolve(2);
        reject(-2);
    // });
    
});

testPromise
    .then((res)=> {
        console.log(res);
    })
    .catch((error)=> {
    console.log('Error:',error);
});

PromisePolyfill.resolve(5).then((res)=> console.log(res));
PromisePolyfill.reject(-5).catch((err)=> console.log(err));
