// Disable form submissions if there are invalid fields
(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Get the forms we want to add validation styles to
      var item = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(item) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

let newItem = document.getElementById("item").value;
let list = document.getElementById("list").value;

document.addEventListener("add", onclick, true);
function onclick() {
  window.localStorage.setItem("1", newItem);
  list = window.localStorage.getItem("1");
}
