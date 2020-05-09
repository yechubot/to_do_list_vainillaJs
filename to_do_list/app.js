 
const list = document.querySelector('#to-dos ul');
//delete lists
list.addEventListener('click',function(e){

    if(e.target.className == 'deleteBtn'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }

});

// add lists

const addList = document.forms['add-lists'];
addList.addEventListener('submit',function(e){

    e.preventDefault();
    const value = addList.querySelector('input[type = "text"]').value;

    //create elements
    const createLi = document.createElement('li');
    const listName = document.createElement('span');
    const deleteButton = document.createElement('span');
    const doneButton = document.createElement('span');

    // add content
    deleteButton.textContent = 'Delete';
    doneButton.textContent = 'Done';
    listName.textContent = value;


    //add class
    listName.classList.add('lists');
    deleteButton.classList.add('deleteBtn');
    doneButton.classList.add('doneBtn');

    //append to document
    createLi.appendChild(listName);
    createLi.appendChild(deleteButton);
    createLi.appendChild(doneButton);
    list.appendChild(createLi);
})

//lists done

const doneList = document.querySelector('#done ul');
list.addEventListener('click',function(e){

    if(e.target.className == 'doneBtn'){
       
        const li = e.target.parentElement;
        doneList.appendChild(li);
        
        // hide done button when it moved to done! part..
        

        /*const classBtn = doneList.getElementsByClassName('doneBtn');
        classBtn.style.display = 'none'; - why it doesn't work?! :( */ 
    }
});

//delete done-lists
doneList.addEventListener('click',function(e){

    if(e.target.className == 'deleteBtn'){
        const li = e.target.parentElement;
        doneList.removeChild(li);
    }

});
