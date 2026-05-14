// async function getData(){
//           setTimeout(function(){
//                     console.log("i m inside set timeout block");
                    
//           }, 3000);
// }
// getData();

//fetch api
async function getData(){
          let response= await fetch('https://jsonplaceholder.typicode.com/todos/1');
          console.log(response);
          let data= await response.json();
          console.log(data);
}
getData();