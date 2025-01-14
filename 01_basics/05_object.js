//creation of singleton objects
const obj=new Object();

//destructuring of objects
//getting a value from a object
const obj1={
    name:"chaheti",
    age:1,
    address:"bhopal"
}
let {name}=obj1;
console.log(name);
//if you want to use differnt name in place of name then
let {address:pta}=obj1;
console.log(pta);


//Json study in object
//we can get api respone either as jpon(object) or array