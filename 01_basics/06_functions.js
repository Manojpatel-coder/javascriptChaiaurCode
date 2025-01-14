function sayHello(){
    console.log("hello");
}
console.log( typeof sayHello);
//value given at time of declartion is called parameters
//calling value is called argumennts


//when have no idea about the number of paramters in function we use rest opertor
function bundleToArray(...nums){
    return nums;//bundle all value to array
}
console.log(bundleToArray(3,4,2,4));