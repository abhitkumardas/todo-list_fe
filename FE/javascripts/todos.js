const API_URL = "http://localhost:8080/getAllTodo/1"
const randomDogElements = document.querySelector('.random')

async function getallusers() {
    const response = await fetch(API_URL)
    const json = await response.json();
    console.log(json.data);



    json.data.forEach(dog => {
        randomDogElements.innerHTML += `
<div class="page__toggle">
    <label class="toggle flex-wrapper">
      <input class="toggle__input" type="checkbox" status=${dog.status}>
      <span class="toggle__label">
        <span class="toggle__text">${dog.todo}
        </span>
        <button id="${dog.todoId}" class="remainderBtn" onclick="checkId(this)"><i class="material-icons">alarm_on</i></button>
        <button id="${dog.todoId}" class="deleteBtn" onclick="checkId(this)"><i class="material-icons">delete_forever</i></button>
      </span>
    </label>
</div>
`;
    });

}
getallusers();


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var addTodoFeild = document.getElementById("addtododiv");

// When the user clicks the button, open the modal 
btn.onclick = async function() {
    // modal.style.display = "block";
    if (addTodoFeild.value == "") {
        alert("Please input a Value to add toDO");
    } else {
        console.log(addTodoFeild.value);
        var todoData = document.getElementById("addtododiv").value
        const createAPI = "http://localhost:8080/createTodo";
        const response = await fetch(createAPI, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'userId': '1',
                'todo': todoData
            })
        })
        addTodoFeild.value = "";
    }
    location.reload(true);
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }



let buttons = document.getElementsByClassName("deleteBtn");

function checkId(foo) {
    let todoid = foo.id;
    const deleteAPI = "http://localhost:8080/deleteTodo/" + todoid;

    const response = fetch(deleteAPI, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin',
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
        }
    })
    location.reload(true);
}
// delBtnlist.forEach(delBtn => {
//     delBtn.addEventListener('click', (todo) => {
//         let todoId = todo.getAttribute('id');
//         console.log(todoId)
//     })
// })



function deletItem() {
    console.log()
}