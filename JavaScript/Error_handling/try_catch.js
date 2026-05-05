try{
         let age=-5;
         if(age<0){
            throw new Error("age cannot be negative");//throwing custom error
         }
         console.log(age);
}
catch(error){
    //catch block define what we want to do with error;
    console.log(error);
    console.log(error.message)
}
finally{
    console.log("server is down");
}
