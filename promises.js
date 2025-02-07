// const promise=new Promise(resolve=>{
// 	setTimeout(()=>{
// 		resolve("Promise called");
// 		}, 1000);
// 	});
// 	promise.then(result=>{
// 		console.log(result);
// 		},1000);
		
// import Observable from 'rxjs';		
// const observable = new Observable(sub=>{
// 	setTimeout(()=>{
// 		sub.next("Observale called");
// 	},1000)
// });
// observable.subscribe(result=>{
// 	console.log(result);
// });


// const myPromise = new Promise((resolve,reject)=>{
// 	resolve('Display Resolve in handler');
// 	reject('Display Reject in handler');
// });
// myPromise.then(resHandler=>{
// console.log(resHandler);});

const myArrayOfPromises = [
    Promise.resolve('Resolve Promise'),
    // Promise.reject('Reject Promise'),
    Promise.resolve('Resolve Promise 2')
];

const myFun = ()=> {
	return Promise.resolve('Resolve Promise')
};

// Promise.allSettle will resolve whether all the promises fulfils or any of it rejects.
// Promise.allSettled(myArrayOfPromises).then ((result) => {
//    console.log(result);
// }).catch(err=> {
// 	console.log('Rejected promise');
//  });

// Promise.all will resolve when all the promises fulfils, otherwise it rejects
// Promise.all(myArrayOfPromises).then ((result) => {
// 	console.log(result);
//  }).catch(err=> {
// 	console.log('Rejected promise');
//  });

 // Promise.any will resolve when any of the promises fulfils, otherwise it rejects
// Promise.any(myArrayOfPromises).then ((result) => {
// 		console.log(result);
//  	}).catch(err=> {
// 		console.log('Rejected promise');
// 	});

// Promise.race will resolve when any of the promises fulfils first, otherwise it rejects
//  Promise.race(myArrayOfPromises).then ((result) => {
// 		console.log(result);
//  	}).catch(err=> {
// 		console.log('Rejected promise');
// 	});

// Promise.try -- read more on this
Promise.try(myFun).then ((result) => {
	console.log(result);
 }).catch(err=> {
	console.log('Rejected promise');
 });



// console.log(myVar + 2);
// var myVar = 5;

// {
// 	console.log(myVar + 2);
// 	console.log(hello);
// 	var hello = 'hello';
// }