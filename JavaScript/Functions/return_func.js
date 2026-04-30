function solve(num){
   return function (num){
         return num*num;
}

}
let ans=solve(3);
let final_ans=ans(3);
console.log(final_ans);