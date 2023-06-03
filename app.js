var list=document.getElementById("list");

// adding a list using js
function addList(){
        var todoItems = document.getElementById("todo-items");
        var todoItemsValue=todoItems.value;
        var li = document.createElement("li");
        var liText =document.createTextNode(todoItems.value);
        li.appendChild(liText)
        list.appendChild(li);

        // del-button
        var delBtn = document.createElement("button");
        var delBtnText=document.createTextNode("DEL");
        delBtn.appendChild(delBtnText)
        li.appendChild(delBtn)
        delBtn.setAttribute("onclick","deleteItems(this)");

         //  edit-button
        var  editBtn = document.createElement("button");
        var editBtnText=document.createTextNode("Edit");
        editBtn.appendChild(editBtnText);
        li.appendChild(editBtn);
        editBtn.setAttribute("onclick","editItems(this)")
        todoItems.value=""
}

function deleteItems(e){
        var delValue = e.parentNode.remove();
}
function editItems(e){
    var val=e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Edit todo application",val)
     e.parentNode.firstChild.nodeValue = editValue;
}

 function deleteAll() {
        var list = document.getElementById("list")
        list.innerHTML = ""; // Set the innerHTML property to an empty string
     }
