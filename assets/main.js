//phone menu
function drop() {
    "use strict";
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
    "use strict";
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content"),
            openDropdown,
            i;
        for (i = 0; i < dropdowns.length; i = i + 1) {
            openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

window.addEventListener('resize', function (e) {
    'use strict';
    document.getElementsByClassName('hero-overlay')[0].style.minHeight = window.innerHeight + 'px';
});
document.getElementsByClassName('hero-overlay')[0].style.minHeight = window.innerHeight + 'px';