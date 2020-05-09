/*
1. added window.onload = funtion() {} since the error "Cannot read property 'addEventListener' of null" occured. 
2. I added script js front on html by accident, i could handle issue by adding script end of the body */

const list = document.querySelector('#book-list ul');
    //delete books
    list.addEventListener('click', function(e){
        
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            list.removeChild(li);
        }
    
    });

//add books
var addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){

    e.preventDefault();
    const value = addForm.querySelector('input[type = "text"]').value; // notice different " , '
    
    //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    // add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');


    // append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);


});

//hide books
var hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e) {
    if(hideBox.checked){
        list.style.display = "none";
    }else {
        list.style.display = "initial"; // or block
    }
});

//filter books
var searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup',function(e){

    var term = e.target.value.toLowerCase();
    var books = list.getElementsByTagName('li');

    Array.from(books).forEach(function(book){
        var title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block'; // when index is the same ; not minus one 
        }else {
            book.style.display = 'none';
        }
    });

    });
//tabbed content

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click',function(e){
    if(e.target.tagName == "LI"){
        const targetPanel = document.querySelector(e.target.dataset.target);
        //look for data attribute, if it's different name, could be dataset.name ... something like that
        panels.forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })
    }

})

/* in case for putting java script on head in html, 
i can use below, putting all the code inside this Event.
document.addEventListener('DOMContentLoaded',function(){

}) */
