let inputField = document.getElementById('inputField')
let addToDo = document.getElementById('addToDo');
let todoWrap = document.getElementById('todoWrap');

addToDo.addEventListener('click', function(){
    let paragraph = document.createElement('Li');
    todoWrap.appendChild(paragraph);
    paragraph.innerText = inputField.value;
    inputField.value = '';
    paragraph.classList.add('paragraph-styling');
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        todoWrap.removeChild(paragraph);
    })
})