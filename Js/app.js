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
  todos.push(task);
  localStorage.setItem("todo", JSON.stringify(todos));

  show();

  return false;
}

function del() {
  var id = this.getAttribute("id");
  var todos = get_todos();
  todos.splice(id, 1);
  localStorage.setItem("todo", JSON.stringify(todos));

  show();

  return false;
}
function edit() {
  var id = this.getAttribute("id");
  var todos = get_todos();
  todos.splice(id, 1);
  localStorage.setItem("todo", JSON.stringify(todos));

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
      ${Date.now()}
          </td>
          <td>
      <button id="${i}" class="delete btn btn-danger "  type="button">Delete </button>
                
          </td>
          <td>
      <button id="${i}" class="edit btn btn-success edit" type="button">Edit </button>
             
          </td>
      </tr>
    
      `;
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

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("add").addEventListener("click", add);
  show();
});
