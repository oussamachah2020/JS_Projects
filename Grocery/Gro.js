const form = document.querySelector('.grocey-form');
const Input = document.getElementById('input');
const SubmitBtn = document.querySelector('.submit');
const ClearBtn = document.querySelector('.clear-btn');
const Alert = document.querySelector('.alert');
const list = document.querySelector('.grocery-list');
const content = document.querySelector('.grocery-container');

let EditElement;
let editFlag = false;
let EditID = "";

form.addEventListener('submit',addItems);
ClearBtn.addEventListener('click',clearItems);
function clearItems() {
    const items = document.querySelectorAll('.grocery-item');
    if(items.length > 0) {
        items.forEach(function(item) {
            list.removeChild(item);
        })
    }
} 

const EditBtn = document.querySelector(".edit-btn");
const DeleteBtn = document.querySelector('.delete-btn');
DeleteBtn.addEventListener('click',deleteItem);
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    list.removeChild(element);
}



function addItems(e) {
    e.preventDefault();
    const value = Input.value;
    const id = new Date().getTime().toString();

        if(value && !editFlag) {
            const element = document.createElement('article');
            element.classList.add('grocery-item');

            const attr = document.createAttribute('data-id'); 
            attr.value = id;  
            element.setAttributeNode(attr);
            element.innerHTML = `<p class="item">${value}</p>
            <div class="btn-container">
            <button type="button" class="edit-btn">
                <img src="image/edit.png" title="edit">
            </button>
            <button type="button" class="delete-btn">
                <img src="image/trash.png" title="delete">
            </button>
            </div>`;   

            list.appendChild(element);
            verification("items passed successefuly!","success");
            content.classList.add("show-content");

            GoToLocalStorage(id,value);

            SetBackDefault();

        }else if(value && editFlag) {
            
        }else {
            verification("Please pass an item!","danger");
        }

    function verification(text,action) {
        Alert.textContent = text;
        Alert.classList.add(`alert-${action}`);
    }

    setTimeout(function() {
        Alert.textContent = "";
        Alert.classList.remove(`alert-${action}`);
    },1000);

    
    function GoToLocalStorage() {
        console.log("Item Stored");
    }

    function SetBackDefault() {
        Input.value = "";
        editFlag = false;
        EditID = "";
        SubmitBtn.textContent = "submit";
    }
}