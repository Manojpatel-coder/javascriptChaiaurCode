js has prototypal behavivor 
//all the things in js are object
//function is function and object         function====>  ( behavior as object)
//array and string are object
//we can inject our prototype method also 

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
//as we add a method by prototype to object it will now works for all as they also are object in backend
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}
// heroPower.hitesh()
// myHeros.hitesh()



Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}


// myHeros.heyHitesh()
// heroPower.heyHitesh()//not access to hitesh only array type object is given these property



//Object.setPrototypeOf() is a method in JavaScript that allows you to set the prototype (i.e., the internal [[Prototype]]) of an object to another object. Its syntax is:

Object.setPrototypeOf(obj, prototype)//obj has prototype like property also



//call and this in js
function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)//createUser (this) will be passed to as parameters to tell upcoming function to set property in createUser because SetUsername context will be removed after execution and no value will be set
  //to solve  it this will be passed
  //means call will passed current exection of function to other function
  
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);


//the mention work of pasing execution can be done be super keyword also where inheritance comes in 
//class constructor
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());
 //the method defined with static keyword are not accesed by all its instances


//bind in javascript learn it 
//closue
 

//call bind and apply are used to pass this scope 
function greet() {
  console.log("Hi, I'm " + this.name);
}

const person = { name: "Manoj" };

const boundGreet = greet.bind(person); // just binds
boundGreet(); // ➤ Hi, I'm Manoj

//in call and apply when function is called object whose these scope should be used also passed are parameters
function greet(age, city) {
  console.log(`${this.name}, Age: ${age}, City: ${city}`);
}

const person = { name: "Manoj" };

greet.call(person, 22, "Kanpur");



