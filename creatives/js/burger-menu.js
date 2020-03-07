//turn on burger menu
const icon = document.getElementsByClassName("header__burger-menu")[0];
icon.onclick = function() {
  icon.classList.toggle("header__burger-menu_active");
};

//burger menu content
const nav = document.getElementsByClassName("panel__nav")[0];
icon.addEventListener("click", function() {
  nav.classList.toggle("panel__nav_burger-state");
});
