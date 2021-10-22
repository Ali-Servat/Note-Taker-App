const textarea = document.querySelector('#note');
const addBtn = document.querySelector('button');
const list = document.querySelector('ul');
const body = document.querySelector('body');

addBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    const li = document.createElement('li');
    
    const liHeading = document.createElement('h4');
    liHeading.innerHTML = 'Note ' + (list.childElementCount+1);
    li.appendChild(liHeading);
    const liPara = document.createElement('p');
    liPara.innerHTML = textarea.value;
    li.appendChild(liPara);
    const viewAllBtn = document.createElement('button');
    viewAllBtn.innerHTML = 'View All';
    li.appendChild(viewAllBtn);
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'X';
    li.appendChild(deleteBtn);
    list.appendChild(li);

    viewAllBtn.addEventListener('click',()=>{
        const parentDiv = document.createElement('div');
    parentDiv.classList = 'parentDiv';
    body.appendChild(parentDiv);
    const childDiv = document.createElement('div');
    childDiv.classList = 'childDiv';
    childDiv.innerHTML = viewAllBtn.parentNode.childNodes[1].textContent;
    parentDiv.appendChild(childDiv);
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Close';
    childDiv.appendChild(deleteBtn);
    deleteBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    deleteBtn.parentNode.parentNode.parentNode.removeChild(deleteBtn.parentNode.parentNode);
    })
    });
})

const DisplayMessage = function(){
    
}