// 4 ways: 
// beforebegin
// afterbegin
// beforeend
// afterend

first we fetch the element or document first
 document.querySelector('#id')

 //then create the element
  let newElement=document.createElement('tag name');
    //then add the content
    newElement.textContent='this is my js created element';

//then insert the element 
    tagName.insertAdjacentHtml('beforebegin',newElement);
    tagName.insertAdjacentHtml('afterbegin',newElement);
    tagName.insertAdjacentHtml('beforeend',newElement);
    tagName.insertAdjacentHtml('afterend',newElement);

    //remove element
    let parent=document.querySelector(parent_name);
    let child=document.querySelector(child_name);
    parent.removeChild(child);



