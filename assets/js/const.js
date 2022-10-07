"use strict";
const constant = {
    modalbg: document.querySelector(".bground"),
    modalBtn: document.querySelectorAll(".modal-btn"),
    form: document.querySelector('form[name="reserve"]'),
    formData: document.querySelectorAll(".formData"),
    close: document.querySelectorAll(".close"),
    inputName: document.getElementById("first"),
    inputLastName: document.getElementById("last"),
    emailToCheck: document.getElementById('email'),
    birthDate: document.getElementById('birthdate'),
    quantity: document.getElementById('quantity'),
    validationContent: document.querySelector(".validation"),
    location: document.querySelectorAll("input[name='location']"),
    radioLocation: document.querySelector(".text-label"),
    termsOfUse: document.querySelector('.checkbox2-label'),
    cgu: document.getElementById("cgu"),
    nav: document.getElementById("nav"),
    menu: document.querySelectorAll(".main-navbar a"),
    topNav: document.getElementById("myTopnav"),

}
export default constant