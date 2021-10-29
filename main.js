const textarea = document.querySelector('#note');
const addBtn = document.querySelector('button');
const list = document.querySelector('ul');
const body = document.querySelector('body');

var currentNotes = [];

var frontPage = '<h1>Note Taker</h1>'+
'           <h2>Add a new note:</h2>'+
'                                   '+
'           <form action="">        '+
'               <div class="note">  '+
'                   <label for="note">note:</label>'+
'                   <br />          '+
'                   <textarea name="note" id="note" cols="30" rows="4"></textarea>'+
'               </div>'+
'               <button>Add Note</button>'+
'           </form>'+
'                                   '+
'           <div class="notes">'+
'               <h3>Your notes</h3>'+
'               <ul></ul>'+
'           </div>';

function displayFrontPage(){

    document.body.innerHTML = '';

    document.body.innerHTML = frontPage;

    for (var i = 0; i < currentNotes.length; i++) {
        displayNote(i+1, currentNotes[i].content);
    };

};

function displayNote(id, content){

    const list = document.querySelector('ul');
    const li = document.createElement('li');
    
    li.id = list.childElementCount+1;
    const liHeading = document.createElement('h4');
    liHeading.innerHTML = 'Note ' + (id);
    li.appendChild(liHeading);
    const liPara = document.createElement('p');
    liPara.innerHTML = content;
    li.appendChild(liPara);
    const viewAllBtn = document.createElement('button');
    viewAllBtn.innerHTML = 'View All';
    li.appendChild(viewAllBtn);
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'X';
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click',(e)=>{

        const item = search(deleteBtn.parentElement.id,currentNotes);
        const index = currentNotes.indexOf(item);
        console.log(item);
        currentNotes.splice(index,1);
        console.log(currentNotes);
        deleteBtn.parentNode.parentNode.removeChild(deleteBtn.parentNode);
        let liList = document.getElementsByTagName('li');
        for(let i=0 ; i < liList.length ; i++){
            liList[i].childNodes[0].innerHTML = 'Note ' + (i+1);
        };
    });

    list.appendChild(li);

    viewAllBtn.addEventListener('click',()=>{

        document.body.innerHTML = '';

        const parentDiv = document.createElement('div');
        parentDiv.classList = 'parentDiv';
        body.appendChild(parentDiv);
        const childDiv = document.createElement('div');
        childDiv.classList = 'childDiv';
        childDiv.innerHTML = viewAllBtn.parentNode.childNodes[1].textContent;
        parentDiv.appendChild(childDiv);
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = 'Close';
        childDiv.appendChild(closeBtn);
        closeBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            closeBtn.parentNode.parentNode.parentNode.removeChild(closeBtn.parentNode.parentNode);
            displayFrontPage();
        });
    });

};

addBtn.addEventListener('click',(e)=>{

    e.preventDefault();

    currentNotes.push({
        'id': list.childElementCount+1,
        'content': textarea.value
    });
    console.log(currentNotes);
    console.log(currentNotes[list.childElementCount].id);

    displayNote(list.childElementCount+1, textarea.value);

});

function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id == nameKey) {
            return myArray[i];
        }
    }
}

