let Texthere = document.getElementById("texthere");
let Btn = document.getElementById("btn");
let TaskList = document.getElementById("tasklist");
let Btn1 = document.getElementById("btn1");
let Btn2 = document.getElementById("btn2");



Btn.addEventListener('click', function(){
if (Texthere.value.trim() === ""){
    alert("please enter a task");
    return;
}
    let listitems = document.createElement('li');
    listitems.className = "list"
    listitems.innerText = Texthere.value;
    TaskList.appendChild(listitems);
    Texthere.value = "";

    let deletebtn = document.createElement("Button");
    deletebtn.innerText = "Delete";
    listitems.appendChild(deletebtn);

    deletebtn.addEventListener('click', function(){
        listitems.remove();
    })

    listitems.addEventListener('click', function(){
        listitems.classList.toggle("completed");
    })
});

Btn1.addEventListener('click', function(){
    let lists = document.querySelectorAll(".list.completed");
    lists.forEach(list => list.remove());
});

Btn2.addEventListener('click', function(){
    TaskList.innerText = "";
});



