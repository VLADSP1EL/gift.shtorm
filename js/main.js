"use strict";

console.log('global');
"use strict";

console.log('maxgraph');
"use strict";

/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
var menu = document.getElementById("menu");
var open_button = document.getElementById("open-menu");
var close_button = document.getElementById("close-menu");
close_button.style.display = "none";
menu.hidden = true;

function open_menu() {
  close_button.style.display = "block";
  open_button.style.display = "none";
  menu.hidden = false;
}

function close_menu() {
  close_button.style.display = "none";
  open_button.style.display = "block";
  menu.hidden = true;
}

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
};

document.getElementById("form").style.display = "none";

function open_form() {
  document.getElementById("form").style.display = "block";
}

function close_form() {// nothing
}
//# sourceMappingURL=main.js.map
