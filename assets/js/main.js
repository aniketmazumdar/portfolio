/* ------------------------------------------------------------------ */
/*                              SKILLS                                */
/* ------------------------------------------------------------------ */
// Accordian Title
const allSkillAccordTitles = document.querySelectorAll(`#skills .accordion-title`);

// Accordian Panel
const allSkillAccordPanels = document.querySelectorAll(`#skills .accordion-panel`);

allSkillAccordTitles.forEach(accord => {
  accord.addEventListener("click", function () {
    allSkillAccordTitles.forEach(accT => {
      if (accT !== this) {
        accT.classList.remove('active')
      }
    });
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    allSkillAccordPanels.forEach(accP => {
      if (accP !== panel) {
        accP.style.maxHeight = null;
      }
    });

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

// By default first accordian click
allSkillAccordTitles[0].click();



/* ------------------------------------------------------------------ */
/*                              PROJECTS                              */
/* ------------------------------------------------------------------ */
// Accordian Title
const allProjectAccordTitles = document.querySelectorAll(`#projects .accordion-title`);

// Accordian Panel
const allProjectAccordPanels = document.querySelectorAll(`#projects .accordion-panel`);

allProjectAccordTitles.forEach(accord => {
  accord.addEventListener("click", function () {
    allProjectAccordTitles.forEach(accT => {
      if (accT !== this) {
        accT.classList.remove('active')
      }
    });
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    allProjectAccordPanels.forEach(accP => {
      if (accP !== panel) {
        accP.style.maxHeight = null;
      }
    });
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

// By default first accordian click
allProjectAccordTitles[0].click();


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






/* ------------------------------------------------------------------ */
/*                          MODAL                              */
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