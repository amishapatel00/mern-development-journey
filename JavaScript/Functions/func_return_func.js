paas a function inside function


function greetMe(greet,FirstName){
          console.log(FirstName);
          greet();
}


function greet(){
          console.log("Namste,duniya");
}
greetMe(greet,"Radha");


