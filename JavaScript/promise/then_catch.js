let promise=new Promise((resolve,reject)=>{
  let success=true;
  if(success){
          resolve("promised fullfilled");
  }
  else{
          reject("promise rejected");
  }
});
promise.then((message)=>{
console.log("then ka message is"+" "+message);
}).catch((error)=>{
          console.log("error" +error);
})

