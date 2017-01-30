//phone menu
function drop() {
    "use strict";
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
    "use strict";
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i = 0;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// form validation
function mySubmit() {
    "use strict";
    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    function validateName(name) {
        var foo = /^[A-Za-z.']/;
        return foo.test(name);
    }
    function validateEmail(email) {
        var foo = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return foo.test(email);
    }
    if (!validateName(name)) {
        document.getElementById('name').value = '';
        document.getElementById('name').placeholder = '*това поле е задължително';
        document.getElementById('name').className += " red";
    }
    if (!validateEmail(email)) {
        document.getElementById('email').value = '';
        document.getElementById('email').placeholder = '*невалиден имейл адрес';
        document.getElementById('email').className += " red";
    }
    if (validateName(name) && validateEmail(email)) {
        document.forms["break"].submit();
    }
}