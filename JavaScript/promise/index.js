// let firstPromise=new Promise((resolve,reject)=>{
// console.log("amisha");
// reject(new Error("Internal Server Error"));
// });

let firstPromise=new Promise((resolve,reject)=>{


 setTimeout(function myName(){
console.log("amisha patel");
},1000);
resolve(1);
});