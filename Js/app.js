let editmode = false;
let editid = "";
function get_todos() {
  var todos = new Array();
  var todos_str = localStorage.getItem("todo");
  if (todos_str !== null) {
    todos = JSON.parse(todos_str);
  }
  return todos;
}

function add() {
  var task = document.getElementById("item").value;

  var todos = get_todos();
  if (editmode) {
    todos.splice(editid, 1);
  }
  todos.push(task);
  localStorage.setItem("todo", JSON.stringify(todos));
  document.getElementById("item").value = "";
  document.getElementById("item").focus();

  show();

  return false;
}

function del() {
  var id = this.getAttribute("id");
  var todos = get_todos();
  todos.splice(editid, 1);
  localStorage.setItem("todo", JSON.stringify(todos));

  show();

  return false;
}
function edit() {
  editmode = true;
  var id = this.getAttribute("id");
  editid = id;
  var todos = get_todos();

  document.getElementById("item").value = todos[id];
  document.getElementById("item").focus();

  show();

  return false;
}

function show() {
  var todos = get_todos();

  // var html = `<div id="all" class="input-group flex-c">`;
  var html = `<table>
  <tr>
  <th>#</th>
    <th>Todo Item</th>
    <th>Time</th>
    <th></th>
    <th></th>
  </tr>`;
  for (var i = 0; i < todos.length; i++) {
    html += `<tr>
          <td>
          ${i + 1}
          </td>
          <td>
      ${todos[i]}
          </td>
          <td>
      ${new Date(Date.now()).toGMTString()}
          </td>
          <td>
          <button id="${i}" class="edit btn btn-success edit" type="button">Edit </button>
          </td>
          <td>
          <button id="${i}" class="delete btn btn-danger "  type="button">Delete </button>
                    
             
          </td>
      </tr>`;
  }

  html += `</table>`;

  document.getElementById("all").innerHTML = html;

  var delbuttons = document.getElementsByClassName("delete");
  var editbuttons = document.getElementsByClassName("edit");
  for (var i = 0; i < delbuttons.length; i++) {
    delbuttons[i].addEventListener("click", del);
    editbuttons[i].addEventListener("click", edit);
  }
}
function search() {
  var query = document.getElementById("searchbox").value;
  let name =[]
  var todos = get_todos();
  for (var i in window.localStorage) {
    val = localStorage.getItem(i);
    value = val.split(","); //splitting string inside array to get name
    name[i] = value[1]; // getting name from split string
    console.log(name[i]);
    
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("item").focus();
  document.getElementById("add").addEventListener("click", add);
  document.getElementById("search").addEventListener("click", search);
  show();
});
