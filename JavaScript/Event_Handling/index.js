
// function changeText(){
// let fpara=document.getElementById('fpara');
// fpara.textContent="Akash and Kanhaiya both are kala.";

// }
// let fpara=document.getElementById('fpara');
// fpara.addEventListener('click',changeText);


// function changeDefault(){
//           let fanchor=document.getElementById('fanchor');
//            event.preventDefault();
//            fanchor.textContent='you successfully clicked';
// }
// let fanchor=document.getElementById('fanchor');
// fanchor.addEventListener('click', changeDefault);


//attach all the paragraphs with single listener;


function alertPara(event){
          alert("you have clicked on " + event.target.textContent);
}
let paras=document.getElementById('wrapper');
document.addEventListener('click',alertPara);
// for(let i=0;i<paras.length;i++){
//           let para=paras[i];
//           console.log("eventListenerAdded");
//           para.addEventListener('click',alertPara);
// }

