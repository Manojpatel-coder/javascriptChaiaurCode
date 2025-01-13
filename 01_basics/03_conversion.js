let score="33";
console.log(typeof score);//string


//syntax for conversion
let valueInNumber=Number(score);
console.log(typeof valueInNumber);  //number


//if score value is "33abc" which is not convreted to number when we convert to number the conversion will be done but value store in it is NaN and typeof is number 
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

