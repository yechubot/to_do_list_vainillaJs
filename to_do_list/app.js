
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

    // add content
    deleteButton.textContent = 'Delete';
    listName.textContent = value;

    //add class
    listName.classList.add('lists');
    deleteButton.classList.add('deleteBtn');

    //append to document
    createLi.appendChild(listName);
    createLi.appendChild(deleteButton);
    list.appendChild(createLi);
})
