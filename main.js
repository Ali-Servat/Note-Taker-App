const textarea = document.querySelector('#note');
const addBtn = document.querySelector('button');
const list = document.querySelector('ul');

addBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    const li = document.createElement('li');
    
    const liHeading = document.createElement('h4');
    liHeading.innerHTML = 'Note ' + (list.childElementCount+1);
    li.appendChild(liHeading);
    const liPara = document.createElement('p');
    liPara.innerHTML = textarea.value;
    li.appendChild(liPara);
    list.appendChild(li);
})