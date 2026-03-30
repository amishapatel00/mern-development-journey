let n=5;
let spaces=' ';
let stars='*';
let i=1;
while(i<=n){
          console.log(spaces.repeat(n-i)+ stars.repeat(2*i-1));
          i++;
}