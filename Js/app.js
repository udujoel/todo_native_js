// Disable form submissions if there are invalid fields
// (function() {
//   "use strict";
//   window.addEventListener(
//     "load",
//     function() {
//       // Get the forms we want to add validation styles to
//       var item = document.getElementsByClassName("needs-validation");
//       // Loop over them and prevent submission
//       var validation = Array.prototype.filter.call(forms, function(item) {
//         form.addEventListener(
//           "submit",
//           function(event) {
//             if (form.checkValidity() === false) {
//               event.preventDefault();
//               event.stopPropagation();
//             }
//             form.classList.add("was-validated");
//           },
//           false
//         );
//       });
//     },
//     false
//   );
// })();
let count = window.localStorage.getItem("count");
document.addEventListener("DOMContentLoaded", function() {
  console.log("Your document is ready!");

  document.getElementById("item").focus();

  for (var i = 0; i < localStorage.length; i++) {
    // $("body").append(localStorage.getItem(localStorage.key(i)));
    let val = localStorage.getItem(localStorage.key(i));
    document.getElementById(
      "all"
    ).innerHTML += `<div id="all" class="input-group col-sm-10 col">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              id="list"
              value="${val}"
            />
            <div class="input-group-append" id="button-addon4">
              <button class="btn btn-danger" id="del" type="button">
                Delete
              </button>
              <button class="btn btn-success" id="edit" type="button">
                Edit
              </button>
            </div>
          </div>`;
  }
});

function additem() {
  //   let item = "";
  let newItem = document.getElementById("item").value;
  newItem = window.localStorage.setItem(count, newItem);
  count++;
  window.localStorage.setItem("count", count);
  document.getElementById("list").value = document.getElementById("item").value;
  document.getElementById(
    "all"
  ).innerHTML += `<div id="all" class="input-group col-sm-10 col">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              id="list"
              value="${document.getElementById("item").value}"
            />
            <div class="input-group-append" id="button-addon4">
              <button class="btn btn-danger" id="del" type="button">
                Delete
              </button>
              <button class="btn btn-success" id="edit" type="button">
                Edit
              </button>
            </div>
          </div>`;
  // empty the field
  newItem = document.getElementById("item").value = "";
  document.getElementById("item").focus();
}
