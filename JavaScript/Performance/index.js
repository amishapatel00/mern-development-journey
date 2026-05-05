// let t1=performance.now();
// for(let i=1;i<=100;i++){
// let para=document.createElement('p');
// para.textContent="this is my para"+i;
// document.body.appendChild(para);
// }
// let t2=performance.now();
// console.log("This is the time taken by code",t2-t1);
// // code 2
// let t3=performance.now();
// let mydiv=document.createElement('div');
// for(let i=1;i<=100;i++){
//           let para=document.createElement('p');
//           para.textContent="this is div para"+i;
//           mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);
// let t4=performance.now();
// console.log("this is div performance time",t4-t3);

//document Fragment
let fragment=document.createDocumentFragment();
for(let i=0;i<=100;i++){
          let para=document.createElement('p');
          para.textContent="this is my para"+i+'abc';
          fragment.appendChild(para);
          
}
document.body.appendChild(fragment);

