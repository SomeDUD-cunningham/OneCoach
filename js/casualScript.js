const sidebarCasual = document.querySelector("#sidebarCasual");
const menuCasual = document.querySelector(".menuIcon");
const closeCasual = document.querySelector(".closeCasual");

//Adds and removes sidebar from main page
menuCasual.addEventListener("click", function () {
    sidebarCasual.classList.add("active");
});

closeCasual.addEventListener("click", function() {
    sidebarCasual.classList.remove("active");
});

//Remove sidebar when clicking 

sidebarCasual.addEventListener('click', function() {
    this.classList.remove("active");
});
