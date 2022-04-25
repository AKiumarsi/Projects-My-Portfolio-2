var menu_sid_icon = document.getElementById("menu_sid_icon"),
  navbar = document.getElementById("navbar"),
  navbar_ul = document.getElementById("navbar_ul"),
  menu_close = document.getElementById("menu_close"),
  menu_li = document.getElementById("menu_li"),
  menu_li_1 = document.getElementById("menu_li_1"),
  menu_li_2 = document.getElementById("menu_li_2"),
  menu_li_3 = document.getElementById("menu_li_3");

menu_sid_icon.addEventListener("click", () => {
  navbar.classList.add("navbar-show");
  navbar_ul.classList.add("navbar_ul_show");
  navbar_ul.classList.remove("navbar_ul_close");
});

menu_close.addEventListener("click", () => {
  navbar_ul.classList.add("navbar_ul_close");
  // navbar.classList.remove("navbar-show");
});

menu_li.addEventListener("click", () => {
  navbar_ul.classList.add("navbar_ul_close");
  // navbar.classList.remove("navbar-show");
});

menu_li_1.addEventListener("click", () => {
  navbar_ul.classList.add("navbar_ul_close");
  // navbar.classList.remove("navbar-show");
});

menu_li_2.addEventListener("click", () => {
  navbar_ul.classList.add("navbar_ul_close");
  // navbar.classList.remove("navbar-show");
});

menu_li_3.addEventListener("click", () => {
  navbar_ul.classList.add("navbar_ul_close");
  // navbar.classList.remove("navbar-show");
});




