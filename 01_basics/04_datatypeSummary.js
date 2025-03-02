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




//dates in javascript
let date=new Date();
console.log(date);
