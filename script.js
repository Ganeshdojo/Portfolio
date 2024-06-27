window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const menu = document.querySelector("#menu");
const showMenu = document.querySelector("#showMenu");

let flag = true;
menu.addEventListener("click", (e) => {
  if (flag) {
    menu.src = "./images/close.svg";
    showMenu.style.display = "block";
    flag = false;
  } else {
    menu.src = "./images/menu.svg";
    showMenu.style.display = "none";
    flag = true;
  }
});
