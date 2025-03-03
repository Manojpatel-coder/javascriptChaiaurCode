//this will print current object which we are dealing with 
//console.log(this);
//it will give empty object in node engine
//but will give window objct when run on browser

//this in arrow function and normal function return same empty object in node
//arrow function in javascript has implicit return without using return vallue will be returned automatically
const app=(num1,nums2)=>num1+nums2;//valid
const app1=(num2,num3)=>(num1+num2);//valid
//const app3=(num3,num4)=>{num1+num2};//invalid -----when you use curly braces then you have to write return statement

//immemdiately invoking function expressions iife
//to avoid global scope pollution iife is used
//()()
(function app(){
    console.log("IIFE function ")
})();//named IIFE //semicolon is required to stop iife
//to pass parameters to it
((num1)=>{
    console.log(num1)
})(3);//unnamed IIFE

//*****************interview especific
//dealing of forof loop on map 
const map=new Map();
map.set("a","1");
map.set("b",2);
map.set("c","why");
for(const key of map){
    console.log(key);
}
//by destructing value 
for(const [key,value] of map){
    console.log(`${key} and ${value}`);
}//but does not work forof loop here in object


//for iteration on object for in loop will be worked

//foreach loop is used for iteration of array 
const arr=['manoj','why','are','you'];
arr.forEach((element)=>{
    console.log(element);
});//only work to run but to return map and filter is used


//filter function on array will filter element based on condition save to new Array

//reduce  method reduce a array to single value
//array.reduce(callback,intialVAlue);
//array.reduce((acc,ele)=>acc+el),0);
