'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


//Contact from to google sheet
/*
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector('input[name="fullname"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    fetch("https://script.google.com/macros/s/AKfycbyflpzQfcDYOdzRudfBD62JL9NoONvULztzhkzn9068Z1lxZOS1qvVZ1O4pQJtveVNz/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((res) => res.text())
      .then((data) => {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send message.");
      });
  });
*/
//let form = document.getElementById("contactForm"); // First declaration
// Later...
//let contactForm = document.querySelector(".form");
/*
const contactForm  = document.getElementById("contactForm");
const submitButton = form.querySelector(".form-btn");

form.addEventListener("input", () => {
  // Enable button when all fields are filled
  const allFilled = [...form.querySelectorAll("[data-form-input]")].every(input => input.value.trim() !== "");
  submitButton.disabled = !allFilled;
});

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  submitButton.disabled = true;

  const name = contactForm .fullname.value.trim();
  const email = contactForm .email.value.trim();
  const message = contactForm .message.value.trim();

  const formData = {
    name,
    email,
    message
  };

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxUgr28VcE3SGJ9GuxZnzGwDERJOp2UbK8FtGNuOcRh0IdJtjyT3Hc_j3d-PWKoi9gs/exec", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert("✅ Message sent successfully!");
      form.reset();
    } else {
      alert("❌ Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("❌ Something went wrong.");
  } finally {
    submitButton.disabled = false;
  }
});
*/


/*
  const contactform = document.getElementById("contactForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
      name:contactform.name.value,
      email: contactform.email.value,
      message: contactform.message.value
    };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyVF-6QveIxYI_y-fdkTp8Ot54JrPtyf8ytcOvcE38pp-U3Ez6tyfBBbwJenjN6xXHmUA/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("✅ Message sent!");
        form.reset();
      } else {
        alert("❌ Failed to send.");
      }
    } catch (err) {
      alert("❌ Error: " + err.message);
    }
  });

*/

  const contactForm = document.getElementById("contactForm");
  const submitButton = contactForm.querySelector(".form-btn");

  contactForm.addEventListener("input", () => {
    const allFilled = [...contactForm.querySelectorAll("[data-form-input]")]
      .every(input => input.value.trim() !== "");
    submitButton.disabled = !allFilled;
  });

  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    submitButton.disabled = true;

    const formData = {
      name: contactForm.fullname.value.trim(),
      email: contactForm.email.value.trim(),
      message: contactForm.message.value.trim()
    };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwnsGheI6u9VGKo6UgddkiPAveK0JXJy2NIpkNacNR8rewfEY5AD0ETzEansI30Omr5/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const resultText = await response.text();
      document.body.innerHTML += `<div style="margin-top:20px;">${resultText}</div>`;
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Something went wrong.");
    } finally {
      contactForm.reset();
      submitButton.disabled = true;
    }
  });

