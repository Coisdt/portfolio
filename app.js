// ====================================================================
//                           TOGGLE SIDEBAR
// ====================================================================

const toggleNavBtn = document.getElementById('toggle-nav-btn')
const navLinks = document.querySelector('.nav-links')
const navLinkAll = document.querySelectorAll('.nav-link')
const fixedLinksHeight = navLinks.offsetTop - navLinks.offsetHeight
// console.log(fixedLinksHeight);

toggleNavBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show-nav')
})

// ====================================================================
//                     ADD UNDERLINE FOR EACH LINK CLICK
// ====================================================================

function navClicked() {
  navLinkAll.forEach((link) => {
    link.addEventListener('click', () => {
      navLinkAll.forEach((otherLink) => {
        otherLink.classList.remove('underline-when-there')
      })
      link.classList.add('underline-when-there')
    })
  })
}

navClicked()

// ====================================================================
//                          SMOOTH SCROLL TO SECTIONS
// ====================================================================

const linkContainer = document.querySelector('.nav-links')
const nav = document.querySelector('.navigation-bar')
const navBar = document.querySelector('.navigation-bar')

navLinkAll.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const targetId = link.getAttribute('href')
    const targetSection = document.querySelector(targetId)
    const fixedNavHeight =
      document.querySelector('.navigation-bar').offsetHeight
    navLinks.classList.remove('show-nav')

    if (targetSection) {
      const targetPosition = targetSection.offsetTop + fixedLinksHeight
      // console.log(targetSection);
      console.log(targetPosition)
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
    if (window.innerWidth < 786) {
      const targetPosition = targetSection.offsetTop
      // console.log(targetSection);
      console.log(targetPosition)
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
  })
})

// =============underline link when scrolling -- start
// still does not work
// function onScroll() {
//   const allSections = document.querySelectorAll(".section");
//   window.onscroll = () => {
//     allSections.forEach((section) => {
//       // console.log(section);
//       const top = window.scrollY;
//       const offset = section.offsetTop;
//       const height = section.offsetHeight;
//       const id = nav.querySelector(".nav-link");
//       // console.log(id);

//       if (top >= offset && top < offset + height) {
//         navLinks.forEach((link) => {
//           link.classList.remove("underline-when-there");
//         });

//         const targetLink = link.querySelector(id);
//         if (targetLink) {
//           targetLink.classList.add("underline-when-there");
//         }
//       }
//     });
//   };
// }

// onScroll()

// ====================================================================
//                           SCROLL TO TOP BTN
// ====================================================================
const scrollUpBtn = document.querySelector('.scroll-up-btn')
const scrollHeight = window.pageYOffset
const topOfScreen = document.querySelector('#top')

scrollUpBtn.addEventListener('click', () => {
  topOfScreen.scrollIntoView({
    behavior: 'smooth',
  })
})

// ====================================================================
//                           SHOW SCROLL TO TOP BTN
// ====================================================================
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset
  if (scrollHeight > 500) {
    scrollUpBtn.classList.add('show')
  } else {
    scrollUpBtn.classList.remove('show')
  }
})

// ====================================================================
//                           COPYRIGHT DATE
// ====================================================================

const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

// ====================================================================
//                          EMAIL SETUP
// ====================================================================

const form = document.getElementById('submit') // Assuming the form has the ID "submit"

form.addEventListener('submit', function (event) {
  event.preventDefault() // Prevent form submission

  // Get form data
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  // Create a mailto link
  var mailtoLink =
    'mailto:cois25@live.com' +
    '?subject=Website Message from: ' +
    encodeURIComponent(name) +
    '&body=' +
    encodeURIComponent(message + '\n\nFrom: ' + email)

  // Open the default email client
  window.location.href = mailtoLink
  // alert("Thank you for your message! I'll be in touch soon.")
  const contactDiv = document.querySelector('.contact-container')
  setTimeout(() => {
    contactDiv.innerHTML = `<div class="sent-message"></div>`
    contactDiv.textContent = `Thank you so much for your message. I'll be in touch soon.`
  }, 2000)
})

// ====================================================================
//                              BLOG DATA
// ====================================================================

const blogs = [
  {
    blogNumber: 4,
    img: './images/..',
    id: 'New Blog',
    blogDate: '2 January 2023',
    blogTitle: 'How amazing is this!!!',
    blogSnippet: 'Guys I cannot believe this is working',
    blogPost: 'lorem100',
  },
  {
    blogNumber: 3,
    img: './images/..',
    id: 'Previously',
    blogDate: '6 February 2023',
    blogTitle: 'Cannot believe this!!!',
    blogSnippet: 'Wow im super excited that this works',
    blogPost: 'this one worked!',
  },

  {
    blogNumber: 2,
    id: 'Previously',
    img: './images/..',
    blogDate: '6 February 2023',
    blogTitle: 'Cannot believe this!!!',
    blogSnippet: 'Wow im super excited that this works',
    blogPost: 'lorem100',
  },
  {
    blogNumber: 1,
    id: 'Previously',
    img: './images/random.png',
    blogDate: '1 February 2023',
    blogTitle: 'Cannot believe this!!!',
    blogSnippet: 'HEEEEEELLLLOOOOOOO world!!!!!',
    blogPost: 'lorem100',
  },
]

// ====================================================================
//                             SHOW BLOGS DYNAMICALLY
// ====================================================================
// const blogCard = document.querySelector(".blog-container");

// ================================fetch blog post info from data
// const fetchBlog = (blogs) => {
//   blogs.forEach((blog) => {
//     const { blogNumber, id, blogDate, blogTitle, blogSnippet, img, blogPost } =
//       blog;
//     const article = document.createElement("article");
//     article.classList.add("blog-card");
//     article.innerHTML = `<h4 class="featured"><em>${id}</em></h4>
//     <h2 class="blog-number">Blog #${blogNumber}</h2>
//     <img class="blog-img" src="${img}" alt="blog img">
//     <h3 class="blog-date">${blogDate}</h2>
//     <h3 class="blog-title">${blogTitle}</h3>
//     <p class="blog-snippet">${blogSnippet}</p>
//     <button class="read-more btn" id=${blogNumber}>Read</button>`;
//     blogCard.appendChild(article);
// const fullArticle = document.createElement("article");

// ============================= blog modal open for each blog post

//     const blogModal = document.querySelector(".blog-modal");
//     const openBlogModal = document.getElementById(blogNumber);
//     const closeBlogModal = blogModal.querySelector(".close-blog-modal");

//     openBlogModal.addEventListener("click", () => {
//       blogModal.showModal();
//       blogModal.innerHTML = `
//       <button class="close-blog-modal-btn"><i class="close-blog-modal fa-solid fa-x"></i></button><h4 class="modal-featured"><em>${id}</em></h4>
//       <h2 class="modal-blog-number">Blog #${blogNumber}</h2>
//       <img class="modal-blog-img" src="${img}" alt="blog img">
//       <h3 class="modal-blog-date">${blogDate}</h2>
//       <h3 class="modal-blog-title">${blogTitle}</h3>
//       <p class='modal-blog-post'>${blogPost}<p>
//       `;
//     });
//     document.addEventListener("click", (event) => {
//       if (event.target.matches(".close-blog-modal")) {
//         console.log("Close button clicked");
//         blogModal.close();
//       }
//     });
//   });
// };

// fetchBlog(blogs);

// ====================================================================
//                          SHOW ABOUT POPUP
// ====================================================================

const modal = document.querySelector('.modal')
const openModal = document.querySelector('.about-me-read-more')
const closeModal = document.querySelector('.close-popup')

openModal.addEventListener('click', () => {
  modal.showModal()
})
closeModal.addEventListener('click', () => {
  modal.close()
})

// ====================================================================
//                          SWIPE SCREENSHOTS
// ====================================================================

const prevButton = document.getElementById('prev-btn')
const nextButton = document.getElementById('next-btn')
const carousel = document.querySelector('.carousel')
const images = document.querySelectorAll('.carousel img')

let currentIndex = 0

// nextButton.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % images.length;
//   updateCarousel();
// });

// prevButton.addEventListener("click", () => {
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   updateCarousel();
// });

// MY FIRST ATTEMPT
// nextButton.addEventListener('click', () => {
//   currentIndex++
//   updateCarousel()
//   if (currentIndex >= images.length - 1) {
//     currentIndex = 0 - 1
//   }
//   console.log(currentIndex)
//   return
// })

// prevButton.addEventListener('click', () => {
//   currentIndex--
//   if (currentIndex === -1) {
//     currentIndex = images.length - 1
//   }
//   updateCarousel()
//   console.log(currentIndex)
// })

// console.log(currentIndex)

// function updateCarousel() {
//   const offset = -currentIndex * 100
//   images.forEach((images) => {
//     images.style.transform = `translateX(${offset}%)`
//   })
// }

// ====================================================================
//                          DOWLOAD CV
// ====================================================================

document
  .getElementById('downloadButton')
  .addEventListener('click', function () {
    // Define the file URL
    var fileURL = './data/cv.pdf' // Replace with the actual file URL

    // Create a temporary anchor element
    var downloadLink = document.createElement('a')
    downloadLink.href = fileURL
    downloadLink.download = 'francoisdutoit-cv.pdf'
    // You can set the desired filename here

    // Trigger a click event on the anchor element
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  })
