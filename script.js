let container = document.querySelector('.container');
let input = document.getElementById('input');
let btn = document.getElementById('btn');
let listContainer = document.querySelector('.listContainer');
    

btn.addEventListener("click", function(){
    
    if(input.value === '')
    {
        alert("Please add your task");
    }
    else
    {
        let li = document.createElement('li');
        li.textContent = input.value;
       listContainer.appendChild(li);
       let span = document.createElement('span');
       span.innerHTML = "\u00d7";
       li.appendChild(span);
    }
    input.value = ""; 
    saveData();
});

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("check");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",  listContainer.innerHTML);
}

function getData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
getData();