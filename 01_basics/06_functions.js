function sayHello(){
    console.log("hello");
}
console.log( typeof sayHello);
//value given at time of declartion is called parameters
//calling value is called argumennts
//sayHello reference
//sayHello() execute

//at time of declaration function can have default value also if new value is not passed default values is passes


//when have no idea about the number of paramters in function we use rest opertor
function bundleToArray(...nums){
    return nums;//bundle all value to array
}
console.log(bundleToArray(3,4,2,4));



//variable define with var keyword is done with hoist means all defining of var variable go to top of code if it is not declared then it is undefined otherwise if it is defined inside any block then also its value is giving to it;
if(true){
    var a=10;
    let b=12;
}
console.log(a)//10
console.log(b);//gives error
//let has block scope but var has global scope


//as we know two type of function declaration
//if you call addOne before declartion it will exexute but addTwo which is declared as function expression type wil give error

//**** Normal declaration is hoisteed but function expression is not hoisted
addOne();
function addOne(num){
    return num+1;
}
addTwo();//give error
const addTwo=function(num){
    return num+2;
}
