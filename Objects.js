// Objects inn JS
// 1. Object Method- function defined to a value in the object, the property becomes the method
let Obj={
    fname:"Raj",
    lname:"Kumar",
    name(){
        console.log(this.fname+" "+this.lname);
    }
}
Obj.name(); 

// 2. Constructor function - To create a multiple similar object.
function Person(firstname, lastname){
  this.firstname=firstname;
  this.lastname=lastname;
}

let person=new Person('Raghav','Kumar');
// Note: Person function is similar to a regular function, just that the first letter is in capital letter which makes 
// it constructor function.

// Add methods to constructor function- to add a method we should use this keyword.

function Person(fname,lname){
    this.fname=fname;
    this.lname=lname;

    this.fullname=function(){
        this.fname+" "+this.lname;
    }
}

// Problem with constructor function is that it keeps on duplicating multiple instances which is not memory efficient. 
// So we need to create function with the Protoype.

// Ex-
function Person(name){
    this.name=name;
}
let person1=new Person('Jane');
Person.prototype.greet=function(){
    return "Hi"+ this.name;
}
 
 person1.greet();
 
//  Shadowing - the object instance creates the same method which is defined the Object.prototype so that when called 
// it executed imidiately rather than looking into the object methods.
 
//  Prototype
//  The Object() function has a property called prototype that references a Object.prototype object.
// The Object.prototype object has all properties and methods which are available in all objects such as toString() and valueOf().
// The Object.prototype object has the constructor property that references the Object function.
// Every function has a prototype object. This prototype object references the Object.prototype object via [[prototype]] linkage or __proto__ property.
// The prototype chain allows one object to use the methods and properties of its prototype objects via the [[prototype]] linkages.
// The Object.getPrototypeOf() method returns the prototype object of a given object. Do use the Object.getPrototypeOf() method instead of __proto__.

// Classes in ES6
// ES6 introduces the class keyword that makes the constructor/prototype pattern easier to use. For example, the following uses the class keyword to define exactly the same Person type: 	
class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	getFullName() {
		return this.firstName + " " + this.lastName;
	}
}

let p1 = new Person('John', 'Doe');
let p2 = new Person('Jane', 'Doe');

console.log(p1.getFullName());
console.log(p2.getFullName());

// Deep Copying: It means that value of the new variable is disconnected from the original variable.
// Ex- let copiedPerson = JSON.parse(JSON.stringify(person));
// Shallow Copying: It means that some values are still connected to the original variable.
// Ex- let copiedPerson = Object.assign({}, person);