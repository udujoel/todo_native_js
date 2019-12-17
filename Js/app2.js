let todos = [];

document.addEventListener("DOMContentLoaded", function() {
  console.log("Your document is ready!");

  document.getElementById("item").focus();

  for (var i = 0; i < todos[0].length; i++) {
    if (localStorage.getItem("todos")) {
      todos.push(JSON.parse(localStorage.getItem("todos")));
      console.log(todos);
    }
    console.log(todos[0][i]);

    let val = todos[0][i];
    document.getElementById(
      "all"
    ).innerHTML += `<div id="all" class="input-group col-sm-10 col">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
              
                value="${val}"
              />
              <label>${Date.now()}</label>
              <div class="input-group-append mod" >
                <button onclick="deleteitem(${i})" class="btn btn-danger "  type="button">
                  Delete
                </button>
                <button onclick="edititem(${i})" class="btn btn-success edit" type="button">
                  Edit
                </button>
              </div>
            </div>`;
  }
});

function additem() {
  //   let item = "";
  todos.push(document.getElementById("item").value);

  window.localStorage.setItem("todos", JSON.stringify(todos));

  // empty the field
  newItem = document.getElementById("item").value = "";
  document.getElementById("item").focus();
}

function deleteitem(key) {
  window.localStorage.removeItem(todos[0][key]);
  location.reload();
}
