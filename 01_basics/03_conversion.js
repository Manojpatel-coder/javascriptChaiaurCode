let score="33";
console.log(typeof score);//string
console.log(typeof (score));//string

//syntax for conversion
let valueInNumber=Number(score);
console.log(typeof valueInNumber);  //number


//if score value is "33abc" which is not converted to number when we convert to number the conversion will be done but value store in it is NaN and typeof is number 
let college="01lnct";
let inNumber=Number(college);
console.log(typeof isNumber);//number
console.log(isNumber)//NaN

//Note-- typeof NaN is number
//conversion of different type to number
//for all conversion typeof will be number and their values are
//boolean gives 0 and 1
//undefined give NaN
//null gives 0


//some conversion to boolean 
//let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn);//true
//falsy values are 0 false undefined null NAN -0 BigInt
//truthy values are "0" 'false' ," ",[],{},function(){} 
//to convert to different type we use String() Boolean() Number() is used

//some operation of js
console.log(2+2);//4
console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2);//122
console.log(1+2+"2");32


console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
null == undefined ➤ true
//reason is equality check == and comparions work differently >= <=
//comparison convert null to number treating it as 0 as a result true is returned 
console.log("2">1); //true
//convert "2" to number then compare that why true

//null coalescing operator wrok for null and undefined
let val1=5??10 //5
  val1=null??12 //12

//=== check value as well as type
console.log("2"==2);//true
console.log("2"===2);//false
