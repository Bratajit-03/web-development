var input = document.getElementById("input-box");
var list = document.getElementById("list");

function add() {
  if (input.value === '') {
    alert("Input field is empty");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    
    
    let editBtn = document.createElement("span");
    editBtn.innerHTML = "&#x270E;"
    editBtn.className = "edit";
    li.appendChild(editBtn);
    
    
    let crossBtn = document.createElement("span");
    crossBtn.innerHTML = "\u00d7";
    li.appendChild(crossBtn);
    crossBtn.className = "cross";
    list.appendChild(li);
  }
  input.value = '';
}


list.addEventListener('click', function(e) {
  if (e.target && e.target.className == 'edit') {
    let li = e.target.parentNode;
    let text = li.firstChild.textContent;
    input.value = text;
    list.removeChild(li);
  }
});

list.addEventListener('click',function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
});
