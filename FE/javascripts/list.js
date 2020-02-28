
const API_URL="http://localhost:8080/getAllTodo/1"
const randomDogElements=document.querySelector('.alltodo')

async function getallusers(){
	const response = await fetch (API_URL,{
		method:'GET',
 	headers: {
		"Accept": 'application/json',
		'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*"
	}
	})
	const json = await response.json();
	console.log(json.objects);
}


/*json.message.forEach(todo=>{
randomDogElements.innerHTML += `
<div style="text-align:center;">
	<div class="page__toggle">
	    <label class="toggle">
	      <input class="toggle__input" type="checkbox">
	      <span class="toggle__label">
	        <span class="toggle__text">${todo}</span>
	      </span>
	    </label>
	 </div>
</div>
`;
});*/


getallusers();
