const promise=new Promise(resolve=>{
	setTimeout(()=>{
		resolve("Promise called");
		}, 1000);
	});
	promise.then(result=>{
		console.log(result);
		},1000);
		
import Observable from 'rxjs';		
const observable = new Observable(sub=>{
	setTimeout(()=>{
		sub.next("Observale called");
	},1000)
});
observable.subscribe(result=>{
	console.log(result);
});


const myPromise = new Promise((resolve,reject)=>{
	resolve('Display Resolve in handler');
	reject('Display Reject in handler');
});
myPromise.then(resHandler=>{
console.log(resHandler);});