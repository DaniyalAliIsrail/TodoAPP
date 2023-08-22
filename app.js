
var list = document.getElementById("list");
// adding a list using js
const btn=document.getElementById("addList1")
btn.addEventListener("click",addList)
function addList() {
  var todoItems = document.getElementById("todo-items");
  var todoItemsvalue = todoItems.value;
//   console.log(todoItems);
  if (todoItemsvalue === "") {
    return Swal.fire({
      icon: 'error',
      title: 'fill up input filled',
      text: 'Add todo',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }
 var  todo =` <li id="dynamiclist">
  <div>
  ${todoItems.value}
  </div>
 <div class="btnlist">
  <button  onclick="deleteItems(this)">DEL</button>
  <button onclick="editItems(this)">Edit</button>
 </div>
</li>`
list.innerHTML = todo + list.innerHTML;
todoItems.value="";
}
function deleteItems(e) {
  var delValue = e.parentNode.parentNode.remove();
}

function editItems(e) {
  var val = e.parentNode.parentNode.firstElementChild.textContent;
  console.log(val);
  var editValue = prompt("update value",val)
  e.parentNode.parentNode.firstElementChild.textContent=editValue;
}
const btn1=document.getElementById("deleteAll1")
btn1.addEventListener("click",deleteAll)
function deleteAll() {
  var list = document.getElementById("list");
  list.innerHTML = ""; // Set the innerHTML property to an empty string
}
window.deleteItems=deleteItems;
window.editItems=editItems;