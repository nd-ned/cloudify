//fixing the background's overlay of the hero -----------------------------------------------------------
window.addEventListener('resize', function (e) {
    'use strict';
    document.getElementsByClassName('hero-overlay')[0].style.minHeight = window.innerHeight + 'px';
});
document.getElementsByClassName('hero-overlay')[0].style.minHeight = window.innerHeight + 'px';

//inactivate the active class on hover -------------------------------------------------------------------
document.getElementsByTagName('ul')[0].addEventListener('mouseover', function () {
    'use strict';
    if (document.getElementsByName('active')[0] !== undefined) {
        document.getElementsByClassName('active')[0].className = 'inactive';
    }
});

//activate the inactive class
document.getElementsByTagName('ul')[0].addEventListener('mouseout', function () {
    'use strict';
    if (document.getElementsByClassName('inactive')[0]) {
        document.getElementsByClassName('inactive')[0].className = 'active';
    }
});

//add active class
document.getElementsByTagName('ul')[0].addEventListener('click', function (e) {
    'use strict';
    //remove the active class if exist
    if (document.getElementsByClassName('active')) {
        var i;
        for (i = 0; i < document.getElementsByClassName('active').length; i = i + 1) {
            document.getElementsByClassName('active')[i].className = '';
        }
    }
    e.target.parentElement.className = 'active';
    if (document.getElementsByClassName('inactive')[0] !== undefined) {
        document.getElementsByClassName('inactive')[0].className = '';
    }
});



// container switcher ------------------------------------------------------------------------------------
function conSwitch() {
    'use strict';
    var main = document.getElementById('cl-container'),
        extend = document.getElementById('ext-cl-container');
    if (!main.classList.contains('displayNone')) {
        main.classList.toggle('displayNone');
        extend.classList.toggle('displayNone');
    } else {
        extend.classList.toggle('displayNone');
        main.classList.toggle('displayNone');
    }
}



//highlight the nav menu link when the corresponding cloud button is clicked 
document.getElementById('image-frame').addEventListener('click', function (e) {
    'use strict';
    //get the content of the clicked item
    var text = e.target.innerHTML,
        //get all links in the navigation
        links_tg = document.getElementsByClassName('site-nav')[0].getElementsByTagName('a'),
        i;
    if (text) {
        //cheking for match
        for (i = 0; i < links_tg.length; i = i + 1) {
            if (text === links_tg[i].innerHTML) {
                //remove the active class
                document.getElementsByClassName('active')[0].className = '';
                links_tg[i].parentElement.className = 'active';
                conSwitch();
                console.log(text);
                document.getElementById(text).classList.toggle('displayNone');
            }
        }
    }
    e.stopPropagation();
});





//phone menu --------------------------------------------------------------------------------------------
function drop() {
    'use strict';
    document.getElementById('myDropdown').classList.toggle('show');
}
window.onclick = function (event) {
    'use strict';
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content'),
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
