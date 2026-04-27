// // let arr=[1,2,3];
// // console.log(arr);


// //array creation with constructor
// let brr =new Array('amisha', 1,true );
// console.log(brr);

// //push function
// let arr=[1,2,3];
// // arr.push(4);
    //arr.pop();

// console.log(arr.push(4));
// console.log(arr);

// Shift function
// let arr=[2,3,4];
// // arr.shift();
// console.log(arr);//output 3,4.
// //unshift function
// arr.unshift(1);
// console.log(arr);//output:1,2,3,4.


//slice
// let arr=[1,2,3,4,5];

// // console.log(arr.slice(0,3));//output 1,2,3;
// // console.log(arr);
// arr.splice(1,2,'amisha');
// console.log(arr);

//map is used to run a function in array;
// let arr=[10,20,30];
// let ans=arr.map((number)=>{
//           return number*number;
// })
// console.log(ans);
// arr.map((number,index)=>{
//           console.log(number);
//           console.log(index);

// })

//filter

// let arr=[10,20,13,15,60];            
// let ans=arr.filter((number)=>{        
//  if(number%2===0){                   
//           return true;
//  }
//  else {return false;}
// })
// console.log(ans);


//filter
// let arr=[1,2,'amisha',true];
// let ans=arr.filter((value)=>{
//           if(typeof(value)=="boolean"){
//                     return true;
//           }
//           else{
//                     return false;
//           }
// })
// console.log(ans);


//reduce
// let arr=[10,20,30,40];
// // let ans=arr.reduce((acc,curr)=>{
// //           return (acc+curr);

// // } ,0);
// // arr.sort((a, b) => b - a);
// console.log(arr);


// let result=arr.find((num)=>num>10);
// console.log(result);
// array function
let arr=[10,20,30,30];
function getSum(arr){
    let len=arr.length;
    let sum=0;
    for(let i=0;i<len;i++){
        sum+=arr[i]; 
    }
    return sum;

}

console.log(getSum(arr));