// ====================================================================
//                           TOGGLE NAVBAR
// ====================================================================

const toggleNav = document.querySelector(".toggle-nav-btn");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".sidebar-close");

toggleNav.addEventListener("click", () => {
  sidebar.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
});

// ====================================================================
//                           SCROLL TO LINKS
// ====================================================================

const navLinks = document.querySelectorAll(".nav-links");
const linkContainer = document.querySelector(".nav-links");
const nav = document.querySelector(".navigation-bar");
const navBar = document.querySelector(".navigation-bar");

navLinks.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    const ID = e.currentTarget.getAttribute("href").slice(1);
    // console.log(ID);
    const element = document.getElementById(ID);
    // console.log(element);

    let position = element.offsetTop - navHeight;
    // console.log(position);

    window.scrollTo({
      left: 0,
      top: position,
    });
    linkContainer.style.height = 0;
  });
});

// ====================================================================
//                           SCROLL TO TOP
// ====================================================================
const scrollUpBtn = document.querySelector(".scroll-up-btn");
const scrollHeight = window.pageYOffset;
const topOfScreen = document.querySelector("#top");

scrollUpBtn.addEventListener("click", () => {
  topOfScreen.scrollIntoView({
    behavior: "smooth",
  });
});

// ====================================================================
//                           SHOW SCROLL TO TOP BTN
// ====================================================================
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 500) {
    scrollUpBtn.classList.add("show");
  } else {
    scrollUpBtn.classList.remove("show");
  }
});
// ====================================================================
//                           FIXED NAVBAR
// ====================================================================

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const header = document.querySelector("header");
  if (scrollHeight > 400) {
    header.classList.add("fixed-nav");
  } else {
    header.classList.remove("fixed-nav");
  }
});

// ====================================================================
//                           COPYRIGHT DATE
// ====================================================================

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ====================================================================
//                           SWOP FOTO
// ====================================================================

const profileFoto = document.querySelector(".intro-profile-img");

profileFoto.addEventListener("mouseover", () => {
  profileFoto.setAttribute(
    "src",
    "./images/Chamuné___Francois_Wedding_0227-removebg-preview.png"
  );
});

profileFoto.addEventListener("mouseout", () => {
  profileFoto.setAttribute("src", "./images/profile-removebg-preview.png");
});

// ====================================================================
//                          EMAIL SETUP
// ====================================================================

const submit = document.querySelector(".submit");

submit.addEventListener("click", () => {});

// ====================================================================
//                              BLOG DATA
// ====================================================================

const blogs = [
  {
    blogNumber: 5,
    id: "New Blog",
    blogDate: "2 January 2023",
    blogTitle: "How amazing is this!!!",
    blogSnippet: "Guys I cannot believe this is working",
    blogPost: "lorem100",
  },
  {
    blogNumber: 4,
    id: "Previously",
    blogDate: "6 February 2023",
    blogTitle: "Cannot believe this!!!",
    blogSnippet: "Wow im super excited that this works",
    blogPost: "lorem100",
  },
  {
    blogNumber: 3,
    id: "Previously",
    blogDate: "6 February 2023",
    blogTitle: "Cannot believe this!!!",
    blogSnippet: "Wow im super excited that this works",
    blogPost: "lorem100",
  },
  {
    blogNumber: 2,
    id: "Previously",
    blogDate: "6 February 2023",
    blogTitle: "Cannot believe this!!!",
    blogSnippet: "Wow im super excited that this works",
    blogPost: "lorem100",
  },
  {
    blogNumber: 1,
    id: "Previously",
    blogDate: "1 February 2023",
    blogTitle: "Cannot believe this!!!",
    blogSnippet: "HEEEEEELLLLOOOOOOO world!!!!!",
    blogPost: "lorem100",
  },
];

// ====================================================================
//                             SHOW BLOGS DYN
// ====================================================================
const blogCard = document.querySelector(".blog-container");

const fetchBlog = (blogs) => {
  blogs.forEach((blog) => {
    const { blogNumber, id, blogDate, blogTitle, blogSnippet } = blog;
    // console.log(blogNumber);
    // const article = document.querySelector(".blog-card");
    const article = document.createElement("article");
    article.classList.add("blog-card");
    article.innerHTML = `<h4 class="featured"><em>${id}</em></h4>
    <h2 class="blog-number">Blog #${blogNumber}</h2>
    <h3 class="blog-date">${blogDate}</h2>
    <h3 class="blog-title">${blogTitle}</h3>
    <p class="blog-snippet">${blogSnippet}</p>
    <button class="read-more btn" id=${blogNumber}>Read</button>`;
    blogCard.appendChild(article);
  });
};

fetchBlog(blogs);

// ====================================================================
//                          SHOW ABOUT POPUP
// ====================================================================

const modal = document.querySelector(".modal");
const openModal = document.querySelector(".about-me-read-more");
const closeModal = document.querySelector(".close-popup");

openModal.addEventListener("click", () => {
  modal.showModal();
});
closeModal.addEventListener("click", () => {
  modal.close();
});

// ====================================================================
//                          SHOW BLOG POPUP
// ====================================================================

const blogModal = document.querySelector(".blog-modal");
const openBlogModal = document.querySelector(".read-more");
const closeBlogModal = document.querySelector(".close-blog-modal");

openBlogModal.addEventListener("click", () => {
  blogModal.showModal();
});
closeBlogModal.addEventListener("click", () => {
  blogModal.close();
});

// ====================================================================
//                          BLOG POPUP
// ====================================================================
