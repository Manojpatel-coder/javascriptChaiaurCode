let score="33";
console.log(typeof score);//string


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

//some operation of js
console.log(2+2);//4
console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2);//122
console.log(1+2+"2");32


console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
//reason is equality check == and comparions work differently >= <=
//comparison convert null to number treating it as 0 as a result true is returned 


//=== check value as value as data
console.log("2"==2);//true
console.log("2"===2);//false