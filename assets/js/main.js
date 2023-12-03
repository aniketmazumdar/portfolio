/* ------------------------------------------------------------------ */
/*                               SIDEBAR                              */
/* ------------------------------------------------------------------ */

// Definition of Sidebar Toggle
const sidebarToggle = () => {
  const btnEl = document.querySelector(".sidebar-btn");
  const sidebarEl = document.querySelector(".sidebar");
  const sidebarItemEls = document.querySelectorAll(".sidebar-item");
  const bodyContainerEl = document.querySelector(".body-container");


  // Sidebar Btn click method
  btnEl.addEventListener("click", function () {
    btnEl.classList.toggle("active");
    sidebarEl.classList.toggle("active");
  });

  // Sidebar Item click method
  sidebarItemEls.forEach(sIElm => {
    sIElm.addEventListener("click", function () {
      btnEl.classList.remove("active");
      sidebarEl.classList.remove("active");
    });
  });

  // Body Container click method
  bodyContainerEl.addEventListener("click", function () {
    btnEl.classList.remove("active");
    sidebarEl.classList.remove("active");
  });
};

sidebarToggle();





/* ------------------------------------------------------------------ */
/*                               MODAL                                */
/* ------------------------------------------------------------------ */
// Modal Container
const modal = document.querySelector(".modal");

// Modal Content Image
const modalContentImg = document.querySelector(".modal-content-img");

// All Image elements of the portfolio
const allImgs = document.querySelectorAll(".zoomable-img");
allImgs.forEach(el => {
  var img = el;
  if (el.tagName.toLowerCase() !== 'img') {
    img = el.querySelector('img');

    // Click event for any image
    el.onclick = function () {
      modal.style.display = "flex";
      modalContentImg.src = img.src;
    }
  } else {
    // Click event for any image
    img.onclick = function () {
      modal.style.display = "flex";
      modalContentImg.src = img.src;
    }
  }
});

// Modal close icon
const modalCloseIcon = document.querySelector(".close");

// Click event for close icon
modalCloseIcon.onclick = function () {
  modal.style.animation = "zoomOut 0.5s ease"
  setTimeout(() => {
    modal.style.display = "none";
    modal.style.animation = ""
  }, 500);
}





/* ----------------------------------------------------------- */
/*                           ACCORDION                         */
/* ----------------------------------------------------------- */
const accordionClickHandler = (accordianEl, atPageLoad = false) => {
  // fetch Section ID
  const sectionId = accordianEl.closest('section').id;

  // All Accordion Container
  const allAccords = document.querySelectorAll(`#${sectionId} .accordion`);

  // All Accordion Panel
  const allAccordPanels = document.querySelectorAll(`#${sectionId} .accordion-panel`);

  allAccords.forEach(acc => {
    if (acc !== accordianEl) {
      acc.classList.remove('active');
    }
  });
  accordianEl.classList.toggle("active");

  const selectedAccPanel = accordianEl.querySelector(".accordion-panel");
  allAccordPanels.forEach(accP => {
    if (accP !== selectedAccPanel) {
      accP.style.maxHeight = null;
    }
  });
  if (selectedAccPanel.style.maxHeight) {
    selectedAccPanel.style.maxHeight = null;
  } else {
    selectedAccPanel.style.maxHeight = selectedAccPanel.scrollHeight + "px";
  }

  // Fix page scroll position at active accordion
  if (!atPageLoad) {
    setTimeout(() => {
      // Calculate the top position of the header element relative to the document
      const headerTop = accordianEl.getBoundingClientRect().top + window.scrollY - 48;

      // Scroll to the header's top position
      window.scrollTo({
        top: headerTop,
        behavior: 'smooth'
      });
    }, 500);
  }
}





/* ----------------------------------------------------------- */
/*                               TAB                           */
/* ----------------------------------------------------------- */
const tabClickHandler = (tabEl, slNo) => {
  // fetch Section ID
  const sectionId = tabEl.closest('section').id;

  // Tab Buttons
  let allTabBtns = document.querySelectorAll(`#${sectionId} .tab-btn`);

  // Tab Contents
  let allTabContents = document.querySelectorAll(`#${sectionId} .tab-content`);

  allTabBtns.forEach(btn => {
    btn.classList.remove('active')
  });
  tabEl.classList.add('active');

  allTabContents.forEach(contentEl => {
    contentEl.style.display = "none";
  });
  allTabContents[slNo].style.display = "block";
}





/* ------------------------------------------------------------------ */
/*                                SLIDER                              */
/* ------------------------------------------------------------------ */
let currSlide = 0;

const showSlide = (index) => {
  slides[currSlide].classList.remove('active');
  currSlide = (index + slides.length) % slides.length;
  slides[currSlide].classList.add('active');
};

const changeSlide = (n) => {
  showSlide(currSlide + n);
};


// Slider Container
const slides = document.querySelectorAll('.slider .slide');
const prevBtn = document.querySelector('.slider .prev');
const nextBtn = document.querySelector('.slider .next');

nextBtn.addEventListener('click', () => { changeSlide(1) });
prevBtn.addEventListener('click', () => { changeSlide(-1) });

// Auto slide movement in 10s
setInterval(() => changeSlide(1), 10000);





/* ------------------------------------------------------------------ */
/*                              SKILLS                                */
/* ------------------------------------------------------------------ */
// All Skill Accordions
const allSkillAccords = document.querySelectorAll(`#skills .accordion`);

// Call first item at page load
accordionClickHandler(allSkillAccords[0], true);





/* ------------------------------------------------------------------ */
/*                              PROJECTS                              */
/* ------------------------------------------------------------------ */
// All Project Accordion Container
const allProjectAccords = document.querySelectorAll(`#projects .accordion`);

// Call first item at page load
accordionClickHandler(allProjectAccords[0], true);





/* ------------------------------------------------------------------ */
/*                             CERTIFICATES                           */
/* ------------------------------------------------------------------ */
// All Certificates Tab Buttons
let allCertificatesTabBtns = document.querySelectorAll(`#certificates .tab-btn`);

// Call first item at page load
tabClickHandler(allCertificatesTabBtns[0], 0);





/* ------------------------------------------------------------------ */
/*                             TESTIMONIALS                           */
/* ------------------------------------------------------------------ */
// All Testimonials Tab Buttons
let allTestimonialsTabBtns = document.querySelectorAll(`#testimonials .tab-btn`);

// Call first item at page load
tabClickHandler(allTestimonialsTabBtns[0], 0);





/* ------------------------------------------------------------------ */
/*                                GALLERY                             */
/* ------------------------------------------------------------------ */
// All Gallery Tab Buttons
let allGalleryTabBtns = document.querySelectorAll(`#gallery .tab-btn`);

// Call first item at page load
tabClickHandler(allGalleryTabBtns[0], 0);