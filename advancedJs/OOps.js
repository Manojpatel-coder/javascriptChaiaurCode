//Object orientned is programming paradiagm or Styles
//object literal means a object 
//this will give current context which we are dealing with
//new keyword is used for new context of something without desturbing previous valuse

//this is node is empty 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = User("hitesh", 12, true)
const userTwo =User("ChaiAurCode", 11, false)
console.log(userOne);
//we print userOne incorrect values will be given because userTwo overrides values in this


//** thats why we use "new keyword" 
const userOne = new User("hitesh", 12, true)
const userTwo =new User("ChaiAurCode", 11, false)
//no need to return "this" it will implicitly return
userOne();
//with new keyword a object is intialise then values are passed and can be retrived now

//instaneof will check and return true or false
console.log(userOne instanceOf User)//return true or false




















