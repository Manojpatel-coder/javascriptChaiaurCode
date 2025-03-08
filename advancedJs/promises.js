// the promises is object represents eventual completion or failure of ashynchrouss operation and its resulting value
//promises three states are fulfill pending or rejected
const promiseOne=new Promise(function(resolve,reject){
//do db calls
  //do async tasks
  resolve()
})
//resolve direct connection with then promiseOne.then  
new Promise((resolve,reject)=>{
  setTimeOut(()=>{
    console.log('asyn task running);
                resolve()
  },1000)
}).then(function(){console.log("if resolve");})

//**** 
// the parameters passed to resolve will be taken by .then 
    
const promiseThree=new Promise((function(resolve,reject){
  setTimeOut(function (){
   let error=false;
    if(!error) resolve({username:"manojpatel4311"})
    else{
      reject('error');
  },1000)
})
                               promiseThree.then(fucntion(user){console.log(user)})//user is anything passed at resolve
//same as resolve we check and anything gone wrong reject is called which is handled by catch

//***** 
//first .then will take the value which are come from resolve of promise and we return something in .then to chain the next .then will take the values return by prevoise .then 
//there are multiple .then and single catch 
//promise.then((resolve)=>{//do something return q}).then((takes q )=>{//do something })

//promise also have finally comes after then and catch which work always it also have callback function
//** promise with async await
//it will not handle catch block works as always resolve 
const promiseFive=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve({data:"123"})
  },1000)
))
});
async function consumeFive(){
const response=await promiseFive
  console.log(response)}
consumePromiseFive()
//to handle these sitution we write try and catch inside async function
async function consumeFive(){
try{
const response=await promiseTHree
  console.log(respone)
}
  catch(error){
console.log(error);
  }}
//we use promisethree becasuse only it has reject define
async function consumeThree(){
try{
const response=await promiseThree;
  console.log((response)
              }
  catch(error){
console.log(error)
  }
}
consumeFive()//waits to get reponse
//** fetch is object which return promise when called to url

async function getAllusers(){
try{
const response=await fetch('url');
  const data= await response.json();//also takes time thats why await
  console.log(data)}
catch(error){
console.log('E:",error);
            }
}
getAllusers();

fetch('url')
.then((response)=>{
  return response.json();
}).then((data)=>{
  console.log(data)
}
  )
.catch((error)=>{
  console.log(error)
})


  //*** lecture 41
//fetch was introduced in node in 2022

//the global fetch method starts the process of fetching a resource from 
//the network returning a promise whcih is fulfulled once the response is available

//a fetch() promise only rejects when a network error is
//encoutered (which is usualyy when there permission issue or similiar .a fetch promise does not reject on http errors (404,etc_)

//fetch has higher priority a time of execution 
//fetch is called two work are implement one will reserve memory for data (onfullfilled[],onrejection[])these array are not acessible and one will access either node or web base api with resource to go netwoek request if request is not made then it will reject otherwise if request made or no resopnce ir will go to fulfilled (errors also) 
