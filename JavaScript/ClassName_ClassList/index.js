let myElement=document.getElementById("first");
myElement.className+=" class1 class3";
myElement.classList=myElement.className.replace("class1","class2");
console.log(myElement);

myElement.classList.add('class4');
console.log(myElement);
