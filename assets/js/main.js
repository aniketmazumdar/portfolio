/* ------------------------------------------------------------------ */
/*                               MODAL                                */
/* ------------------------------------------------------------------ */
// Modal Container
const modal = document.querySelector(".modal");

// Modal Content Image
const modalContentImg = document.querySelector(".modal-content-img");

// All Image elements of the portfolio
const allImgs = document.querySelectorAll("img");
allImgs.forEach(img => {
  // Click event for any image
  img.onclick = function () {
    modal.style.display = "flex";
    modalContentImg.src = this.src;
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
/*                              SKILLS                                */
/* ------------------------------------------------------------------ */
// All Skill Accordions
const allSkillAccords = document.querySelectorAll(`#skills .accordion`);
accordionClickHandler(allSkillAccords[0], true);



/* ------------------------------------------------------------------ */
/*                              PROJECTS                              */
/* ------------------------------------------------------------------ */
// All Project Accordion Container
const allProjectAccords = document.querySelectorAll(`#projects .accordion`);
accordionClickHandler(allProjectAccords[0], true);



/* ------------------------------------------------------------------ */
/*                          CERTIFICATES                              */
/* ------------------------------------------------------------------ */
// Tab Buttons
let allTabBtns = document.querySelectorAll(`#certificates .tab-btn-certificate`);

// Tab Contents
let allTabContents = document.querySelectorAll(`#certificates .tab-content-certificate`);


// Tab click event
const selectCertificateTab = (btnEl, slNo) => {
  allTabBtns.forEach(btn => {
    btn.classList.remove('active')
  });
  btnEl.classList.add('active');


  allTabContents.forEach(contentEl => {
    contentEl.style.display = "none";
  });
  allTabContents[slNo].style.display = "block";
}

// By default first tab button click
allTabBtns[0].click();

