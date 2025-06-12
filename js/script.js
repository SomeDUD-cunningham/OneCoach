const sidebar = document.querySelector("#sidebar");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

//Adds and removes sidebar from main page
menu.addEventListener("click", function () {
    sidebar.classList.add("active");
});

close.addEventListener("click", function() {
    sidebar.classList.remove("active");
});

//Remove sidebar when clicking 

sidebar.addEventListener('click', function() {
    this.classList.remove("active");
});
