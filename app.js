// ====================================================================
//                           TOGGLE SIDEBAR
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
//                     ADD UNDERLINE FOR EACH LINK CLICK
// ====================================================================
const navLinks = document.querySelectorAll(".nav-link");

function navClicked() {
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((otherLink) => {
        otherLink.classList.remove("underline-when-there");
      });
      link.classList.add("underline-when-there");
    });
  });
}

navClicked();

// ====================================================================
//                           SCROLL TO SECTIONS (navbar)
// ====================================================================

const linkContainer = document.querySelector(".nav-links");
const nav = document.querySelector(".navigation-bar");
const navBar = document.querySelector(".navigation-bar");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    const fixedNavHeight =
      document.querySelector(".navigation-bar").offsetHeight;

    if (targetSection) {
      const targetPosition = targetSection.offsetTop - fixedNavHeight;
      // console.log(targetSection);
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// =============underline link when scrolling -- start
// still does not work
const allSections = document.querySelectorAll(".section");

window.onscroll = () => {
  allSections.forEach((section) => {
    // console.log(section);
    const top = window.scrollY;
    const offset = section.offsetTop;
    const height = section.offsetHeight;
    const id = nav.querySelector(".nav-link");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("underline-when-there");
      });

      const targetLink = link.querySelector(id);
      if (targetLink) {
        targetLink.classList.add("underline-when-there");
      }
    }
  });
};

// // =============underline link when scrolling -- end

// ====================================================================
//                           SCROLL TO SECTIONS (SIDEBAR)
// ====================================================================

const toggleNavLinks = document.querySelectorAll(".toggle-nav-link");

toggleNavLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    const fixedNavHeight =
      document.querySelector(".navigation-bar").offsetHeight;

    if (targetSection) {
      const targetPosition = targetSection.offsetTop - fixedNavHeight;
      // console.log(targetSection);
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      sidebar.classList.remove("show");
      // if(sidebar){
      //   navBar.classList.remove('fixed-navbar')
      // }
    }
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

// const profileFoto = document.querySelector(".intro-profile-img");

// profileFoto.addEventListener("mouseover", () => {
//   profileFoto.setAttribute(
//     "src",
//     "./images/Chamuné___Francois_Wedding_0227-removebg-preview.png"
//   );
// });

// profileFoto.addEventListener("mouseout", () => {
//   profileFoto.setAttribute("src", "./images/profile-removebg-preview.png");
// });

// ====================================================================
//                          EMAIL SETUP
// ====================================================================

const form = document.getElementById("submit"); // Assuming the form has the ID "submit"

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Create a mailto link
  var mailtoLink =
    "mailto:cois25@live.com" +
    "?subject=Website Message from: " +
    encodeURIComponent(name) +
    "&body=" +
    encodeURIComponent(message + "\n\nFrom: " + email);

  // Open the default email client
  window.location.href = mailtoLink;
  // alert("Thank you for your message! I'll be in touch soon.")
  const contactDiv = document.querySelector(".contact-container");
  setTimeout(() => {
    contactDiv.innerHTML = `<div class="sent-message"></div>`;
    contactDiv.textContent = `Thank you so much for your message. I'll be in touch soon.`;
  }, 2000);
});

// ====================================================================
//                              BLOG DATA
// ====================================================================

const blogs = [
  {
    blogNumber: 4,
    img: "./images/..",
    id: "New Blog",
    blogDate: "2 January 2023",
    blogTitle: "How amazing is this!!!",
    blogSnippet: "Guys I cannot believe this is working",
    blogPost: "lorem100",
  },
  {
    blogNumber: 3,
    img: "./images/..",
    id: "Previously",
    blogDate: "6 February 2023",
    blogTitle: "Cannot believe this!!!",
    blogSnippet: "Wow im super excited that this works",
    blogPost: "this one worked!",
  },

  {
    blogNumber: 2,
    id: "Previously",
    img: "./images/..",
    blogDate: "6 February 2023",
    blogTitle: "Cannot believe this!!!",
    blogSnippet: "Wow im super excited that this works",
    blogPost: "lorem100",
  },
  {
    blogNumber: 1,
    id: "Previously",
    img: "./images/..",
    blogDate: "1 February 2023",
    blogTitle: "Cannot believe this!!!",
    blogSnippet: "HEEEEEELLLLOOOOOOO world!!!!!",
    blogPost: "lorem100",
  },
];

// ====================================================================
//                             SHOW BLOGS DYNAMICALLY
// ====================================================================
const blogCard = document.querySelector(".blog-container");

// ================================fetch blog post info from data
const fetchBlog = (blogs) => {
  blogs.forEach((blog) => {
    const { blogNumber, id, blogDate, blogTitle, blogSnippet, img, blogPost } =
      blog;
    const article = document.createElement("article");
    article.classList.add("blog-card");
    article.innerHTML = `<h4 class="featured"><em>${id}</em></h4>
    <h2 class="blog-number">Blog #${blogNumber}</h2>
    <img class="blog-img" src="${img}" alt="blog img">
    <h3 class="blog-date">${blogDate}</h2>
    <h3 class="blog-title">${blogTitle}</h3>
    <p class="blog-snippet">${blogSnippet}</p>
    <button class="read-more btn" id=${blogNumber}>Read</button>`;
    blogCard.appendChild(article);
    // const fullArticle = document.createElement("article");

    // ============================= blog modal open for each blog post

    const blogModal = document.querySelector(".blog-modal");
    const openBlogModal = document.getElementById(blogNumber);
    const closeBlogModal = blogModal.querySelector(".close-blog-modal");

    openBlogModal.addEventListener("click", () => {
      blogModal.showModal();
      blogModal.innerHTML = `
      <button class="close-blog-modal-btn"><i class="close-blog-modal fa-solid fa-x"></i></button><h4 class="modal-featured"><em>${id}</em></h4>
      <h2 class="modal-blog-number">Blog #${blogNumber}</h2>
      <img class="modal-blog-img" src="${img}" alt="blog img">
      <h3 class="modal-blog-date">${blogDate}</h2>
      <h3 class="modal-blog-title">${blogTitle}</h3>
      <p class='modal-blog-post'>${blogPost}<p>
      `;
    });
    document.addEventListener("click", (event) => {
      if (event.target.matches(".close-blog-modal")) {
        console.log("Close button clicked");
        blogModal.close();
      }
    });
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

// const blogModal = document.querySelector(".blog-modal");

// const openBlogModal = document.getElementById(blogNumber);
// const closeBlogModal = document.querySelector(".close-blog-modal");

// openBlogModal.addEventListener("click", () => {
//   blogModal.showModal();
// });
// closeBlogModal.addEventListener("click", () => {
//   blogModal.close();
// });

