 let n=10;
 let spaces=' ';
    let stars='*';
for (let i = 1; i <= n; i++) {
    
    console.log(spaces.repeat(n-i)+ stars.repeat(2*i-1));
}