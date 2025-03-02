//how data is stored and accessed based on these datatype is categorized in two types
//primitive and non primitive datatypes


//primitive (call by value means copy is given)
//String,number,boolean,null,undefined symbol,bigInt


//non primitive or reference based
//array,object,functions


//symbol declaration
const id=Symbol('123');
//uniquely identify itself 
const another=Symbol('123');
console.log(id===anotherId);//false

console.log(typeof Array); // "function"
//In JavaScript, Array is a built-in constructor function used to create array instances.
//The typeof operator returns "function" because Array is essentially a function.

//but 
const arr={1,2,3,4};
//typeof arr is object like these if object is there in place of arr then its type is also object

//type of memory 
//stack(primitive)  heap(non primitive)


//non primitive data stored in heap and there reference in stack when we want data its orignal refernce is given so change occur change main objet
 //primitive value is copy to other 
//let a=12;
let b=a;
//now if we make change in b no change in a 
//but if you make non primitive type it work differently 
let arr={1,2,4,2}
let arr2=arr;
// in these case arr2 has reference to main array that why when changes made in arr2 affect arr
//its my approach only because arr has reference which copied to arr2 both have same reference so value change for one change other


//About string
const gameName =new String("Manoj");
console.log(gameName[3]);//o
//string slice method take negative values also because sustring ignore negative values
gameName.replace("m","p");
//convert m to p

//string split breaks according to parameter given and return array 
const str="ma-no-j"
console.log(str.split('-');//["ma","no","j"];

//About Number
const balance =new Number(13);
//explictily defining Number 
//some number method are balance.toString() balance.toFixed(3)

//About math library 
//it has many methods such as Math.random() Math.round() Math.ceil() Math.floor()\
//Math.random() give 0<=value<1
//Math.floor(Math.random()*(max-min+1))+min

  
//dates in javascript 1Jan 1970
// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
const myDate = new Date();
console.log(myDate) //Output : 2023-10-09T14:38:09.847Z
// We can use various methods to convert this date into more readable value.
console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
console.log(myDate.toLocaleDateString()) //Output : 10/9/2023
console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM

console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z

let myCreateDate=new Date(2002,11,24);//dob
//Date.now() return millisecond value from 1 jan 1970
