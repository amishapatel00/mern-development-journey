//function defination

function sayMyName(){
          console.log("amisha")
}
// function-call
sayMyName();
function PrintCounting(){
          for(let i=0;i<10;i++) {
                 console.log(i)  ; 
          }
}
PrintCounting();

//Function with parameter
function printNumber(num){
          console.log(num);
}
printNumber(8); // here 8 is argument and num is parameter 


//function with two parameter
function getAverage(num1 , num2){
          let average=(num1+num2)/2;
          console.log(average);
}
getAverage(5 ,3);

return functions

function getSum(num1,num2){
          let sum=num1+num2;
          return sum;
}
let ans =getSum(5,5);
console.log(ans);

//----------------------------------------//
function getMyName(firstName,lastName){
          let name=firstName+ " " +lastName;
          return name;
}
let ans= getMyName("Amisha","Patel");
console.log(ans);

function declaration in variable
const squareNumber=function(a){
          return a*a;
}
console.log(squareNumber(2));

//Arrow Functions

let ans=(a,b) => {

          return (a**b);
}
console.log(ans(2,10));




