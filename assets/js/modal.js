function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const submitBtn = document.querySelector(".btn-submit");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
submitBtn.addEventListener("onsubmit", validate)
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function closeModal() {
  modalbg.style.display = "none";
}


function isEmpty(input) {
  const inputToChecks = document.querySelectorAll(input);
  let valid = true
  for (let inputToCheck of inputToChecks) {
    if (!inputToCheck || inputToCheck.length === 0 || inputToCheck === "") {
      valid = false;
    }
  }
  return valid
}

function isCheck(radios) {
  let isValid = false;
  for (let radio of radios) {
    if (radio.checked) isValid = true;
  }

  return isValid;
}


isEmpty('input[type="text"]')

function validate(e) {
  e.preventDefault()
}