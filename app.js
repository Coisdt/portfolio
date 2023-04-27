//toggle navbar
const toggleNav = document.querySelector(".toggle-nav-btn");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".sidebar-close");

toggleNav.addEventListener("click", () => {
  sidebar.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
  console.log("hi");
});

//scroll to
const contactBtn = document.querySelector(".contact-btn");
const contactForm = document.querySelector(".contact-container");
const aboutBtn = document.querySelector(".about-link");
const aboutSection = document.querySelector(".about-container");

contactBtn.addEventListener("click", () => {
  contactForm.scrollIntoView({
    behavior: "smooth",
  });
});
aboutBtn.addEventListener("click", () => {
  aboutSection.scrollIntoView({
    behavior: "smooth",
  });
});

