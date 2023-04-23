//toggle navbar
const toggleNav = document.querySelector(".toggle-nav-btn");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".sidebar-close");

toggleNav.addEventListener('click', ()=> {
   sidebar.classList.add("show");
})

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
  console.log('hi');
});













// const navLinks = document.querySelectorAll(".nav-links a");

// console.log(navLinks);

// navLinks.forEach((link) => {
//   link.addEventListener("click", function () {
//     // Remove the "active" class from all links
//     [...navLinks].forEach((link) => link.parentElement.classList.remove("active"));

//     // Add the "active" class to the clicked link
//     this.parentElement.classList.add("active");
//   });
// });

// const navbarLinks = document.querySelectorAll(".nav-links a");

// navbarLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     navbarLinks.forEach((link) => {
//       link.classList.remove("active");
//     });
//     link.classList.add("active");
//   });
// });
