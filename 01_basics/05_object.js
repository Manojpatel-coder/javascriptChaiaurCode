//array has two type of copy shallow where same reference is given and deep copy wheere different referce
//creation of singleton objects
//arr.unshift(8);add at first
//arr.includes arr.indexOf(val) give index if exist otherwise gives -1
//slice and splice difference splice change the orignal array when returing also include last index arr.splice(1,3) also incldes three
//const all_hero=[...arr1,...arr2];\
//Array.from("MANOJ");
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
