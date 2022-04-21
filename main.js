const menuBtn = document.querySelector(".dropbtn");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuBtn.addEventListener("click", openDropdown);

function openDropdown() {
  dropdownMenu.classList.toggle("reveal");
  if (dropdownMenu.classList.contains("reveal")) {
    menuBtn.textContent = "CLOSE";
  } else {
    menuBtn.textContent = "MENU";
  }
}
