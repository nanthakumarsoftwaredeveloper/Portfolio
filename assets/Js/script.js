let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//  Scroll ----------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    // Ensure this targets the correct elements!
    const sr=ScrollReveal({
        origin:'top',
        distance: '60px',
        duration: 2500,
        Delay: 400,
        //reset: true
    })
    
    sr.reveal('.skills, .projects, .footer')
    sr.reveal('.home-img', {origin: 'bottom'})
    sr.reveal('.about-img, .certificate, .contact ', {origin: 'left'})
    sr.reveal('.about-content, .services', {origin: 'right'})
    sr.reveal('.services__card, .project__card', {interval:100})


    // Typing -----------------------------------------------------

    var typed = new Typed('#element', {
        strings: [
    'Software Developer',
    'Web Developer',
    'Java Developer',
    'Python Developer',
    'Mobile App Developer',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'Game Developer',
    'IoT Developer',
    'IT Project Manager',
    'Network Engineer',
    'Database Developer',
    'Computer Hardware Engineer',
    'IT Risk Manager',
    'Mobile Application Tester',
    'Software Tester',
    ],
    typeSpeed: 100,
    loop:true,
    });

});

// Service Code

document.querySelectorAll(".card-design").forEach(card => {
  const extraContent = card.querySelector(".extra-content");
  const button = card.querySelector(".view-btn");

  extraContent.style.display = "none"; // Hide content initially
  
  button.addEventListener("click", () => {
      if (extraContent.style.display === "none" || extraContent.style.display === "") {
          extraContent.style.display = "inline";
          button.textContent = "View less";
      } else {
          extraContent.style.display = "none";
          button.textContent = "View more";
      }
  });
});



//view pdf


let pdfUrl = 'assets/resume/resume.pdf'; // Change this to your actual PDF file

function openPDF() {
    document.getElementById("pdfModal").style.display = "block";
    document.querySelector('html').style.overflow = 'hidden';
    loadPDF(pdfUrl);
}

function closePDF() {
    document.getElementById("pdfModal").style.display = "none";
    document.querySelector('html').style.overflow = 'scroll';
}

function loadPDF(url) {
    var pdfjsLib = window['pdfjs-dist/build/pdf'];
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';

    var loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(function(pdf) {
        pdf.getPage(1).then(function(page) {
            var canvas = document.getElementById('pdfCanvas');
            var context = canvas.getContext('2d');

            // Get modal width dynamically
            var modalWidth = document.getElementById("canvasContainer").clientWidth;

            // Get PDF viewport at default scale
            var viewport = page.getViewport({ scale: 1.0 });

            // Calculate new scale to fit 100% width of modal
            var scale = modalWidth / viewport.width;
            var scaledViewport = page.getViewport({ scale: scale });

            // Set canvas dimensions based on new scale
            canvas.width = scaledViewport.width;
            canvas.height = scaledViewport.height;

            var renderContext = {
                canvasContext: context,
                viewport: scaledViewport
            };

            page.render(renderContext);
        });
    });
}



function downloadPDF() {
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Nantha-CV.pdf'; // Set download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Projects

function openPopup(page) {
    document.getElementById('main-content').style.transform = 'scale(0.9)';
    document.getElementById('popup').style.display = 'block';
    document.getElementById('popup').style.opacity = '1';
    document.querySelector('header').style.display = 'none';
    document.getElementById('popup-frame').src = page;
    document.querySelector('html').style.overflow = 'hidden';
}

function closePopup() {
    document.getElementById('popup').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('main-content').style.transform = 'scale(1)';
        document.querySelector('header').style.display = 'flex';
        document.querySelector('html').style.overflow = 'scroll';
    }, 300);
}

// Project view

/*=============== CARD POPUP JS ===============*/
const modal = document.querySelectorAll('.modal'),
      cardBtn = document.querySelectorAll('.card__product'),
      modalClose = document.querySelectorAll('.modal__close'),
      modalCard = document.querySelectorAll('.modal__card')

let activeModal = (modalClick) =>{
   modal[modalClick].classList.add('active-modal')
}

/* Show modal */
cardBtn.forEach((cardBtn, i) =>{
   cardBtn.addEventListener('click', () =>{
      activeModal(i)
   })
})

/* Hide modal */
modalClose.forEach((modalClose) =>{
   modalClose.addEventListener('click', () => {
       modal.forEach((modalRemove) => {
           modalRemove.classList.remove('active-modal')
       })
   })
})

/* Hide modal on background click */
modal.forEach((modal) =>{
   modal.addEventListener('click', () =>{
      modal.classList.remove('active-modal')
   })
})

/* Don't hide modal on card click (by event propagation) */
modalCard.forEach((modalCard) =>{
   modalCard.addEventListener('click', (e) =>{
      e.stopPropagation()
   })
})

// Open Page 2 with Image
function openPage2(imgSrc) {
    document.getElementById("displayImage").src = imgSrc;
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "flex";
    document.querySelector('header').style.display = 'none';
    document.querySelector('html').style.overflow = 'hidden';
}

// Close Page 2 and Return to Gallery
function closePage2() {
    document.getElementById("page2").style.display = "none";
    document.getElementById("page1").style.display = "flex";
    document.querySelector('header').style.display = 'flex';
    document.querySelector('html').style.overflow = 'scroll';
}

/*=============== Project ===============*/
function project(link){
    Swal.fire({
        
            title: "project description",
            text: "These sample projects are created for learning purposes, so please excuse their appearance as they are not complete products.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                // Replace 'https://example.com' with the URL you want to navigate to
                openPopup('assets/Projects/Sample_Projects.html')
            }
        });
      
}

function project_demo(link){
    Swal.fire({
        
            title: "project description",
            text: "These demo projects are not complete projects, but rather somewhat better projects that are either completed or almost completed.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                // Replace 'https://example.com' with the URL you want to navigate to
                openPopup('assets/Projects/Demo_Projects.html')
            }
        });
      
}

/*=============== EMAIL JS ===============*/
const contactForm=document.getElementById('contact-form'),
    contactMessage=document.getElementById('contact-message')

const sendEmail=(e)=>{
    e.preventDefault()
    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_w5bqojs','template_fh8szuf','#contact-form','57rXdC9YPX22yKbwX')
    .then(()=>{
        Swal.fire({
            title: "Good job!",
            text: "Message sent successfully",
            icon: "success",
        }).then(() => {
            //rest contact form
            document.getElementById('contact-form').reset();
        });
    },()=>{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
    } )
}

contactForm.addEventListener('submit',sendEmail)


function easter_egg() {
    Swal.fire({
        title: "Congratulations! You’ve found an Easter egg once again! Thank you for visiting my site.",
        width: window.innerWidth < 600 ? '90%' : 800,
        padding: window.innerWidth < 600 ? '5em' : '23em',
        color: "#716add",
        background: "#fff url(assets/Image/egg/easter_egg.png)",
        backdrop: `
            rgba(0,0,123,0.4)
            url("assets/Image/egg/you_made_it.gif")
            left top
            no-repeat
        `,
        customClass: {
            popup: 'custom-swal-popup'
        }
    });
    
}


//js
document.addEventListener("DOMContentLoaded", function () {
    var preloader = document.getElementById("preloader");
    var homeSection = document.getElementById("home"); // Target the home section

    // Check if IntersectionObserver is supported
    if ("IntersectionObserver" in window) {
        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        // Hide the preloader when home section is fully loaded
                        preloader.style.display = "none";
                    }
                });
            },
            { threshold: 1.0 } // Trigger only when 100% of the section is visible
        );

        observer.observe(homeSection);
    } else {
        // Fallback if IntersectionObserver is not supported
        window.addEventListener("load", function () {
            preloader.style.display = "none";
        });
    }
});

