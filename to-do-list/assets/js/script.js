let ul = document.getElementById("my-list");
let li;
let itemId;
let item;

function addTask() {
    if(document.getElementById("task").value != ""){
        item = document.getElementById("task");
        itemId = ul.childElementCount;
        li = creatItemEl(item.value, itemId);
        li.appendChild(createRemoveTaskBtn(itemId));
        ul.appendChild(li);
		item.value = "";
    }
}

function removeTask(itemId) {
    for( i = 0 ; i < ul.children.length ; i++){
        if(ul.children[i].getAttribute("index") == itemId ){
            ul.children[i].remove();
        }
    }
}

function creatItemEl(itemValue, itemId) {
    let li = document.createElement("li");
    
    li.setAttribute("index", itemId);
    li.appendChild(document.createTextNode(itemValue));
    return li;
}

function createRemoveTaskBtn(itemId) {
    let btn = document.createElement("button");
    btn.setAttribute("onclick", "removeTask("+itemId+")");
    btn.innerHTML = "X";
    return btn;
}