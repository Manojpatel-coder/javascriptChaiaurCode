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




//type of memory 
//stack(primitive)  heap(non primitive)


//non primitive data stored in heap and there reference in stack when we want data its orignal refernce is given so change occur change main objet
 


//dates in javascript
let date=new Date();
console.log(date);
