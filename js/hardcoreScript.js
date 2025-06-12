const sidebarHardcore = document.querySelector("#sidebarHardcore");
const menuHardcore = document.querySelector(".menuIcon");
const closeHardcore = document.querySelector(".closeHardcore");

//Adds and removes sidebar from main page
menuHardcore.addEventListener("click", function () {
    sidebarHardcore.classList.add("active");
});

closeHardcore.addEventListener("click", function() {
    sidebarHardcore.classList.remove("active");
});

//Remove sidebar when clicking 

sidebarHardcore.addEventListener('click', function() {
    this.classList.remove("active");
});
