"use strict";
import constant from './const.js'


/**
 * Verification if input text is empty
 * @param input selector input you want check
 */
export function isInputTextEmpty(inputToChecks) {

    let valid = true

    for (let inputToCheck of inputToChecks) {
        if (!inputToCheck.value || inputToCheck.value.length < 2 || inputToCheck.value === "") {
            addErrorTextInvalidInput(inputToCheck, 'au minimun 2 caractères')
            valid = false;
        }
    }
    return valid
}


/**
 *  add error text after input 
 * @param previousElement Element where the have test and where the text should be displayed next
 */
export function addErrorTextInvalidInput(previousElement, message) {
    previousElement.insertAdjacentHTML("afterend",
        '<span class="error" style="color:red;font-size: small">Ce champs doit ' + message + '</span>');
}


/**
 *  remove error text after input 
 * 
 */
export function removeErrorInvalidInputText(callback) {
    let errorSpans = document.querySelectorAll(".error");
    errorSpans.forEach((e, a) => {
        callback(e, a)
    })
}

/**
 *  check if email is valide 
 * @param emailSelector selector input email you want check
 */
export function validateEmail(emailValue, addErrorAfterElements) {
    const validRegexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;

    if (emailValue.match(validRegexEmail)) {
        return true;
    }

    addErrorTextInvalidInput(addErrorAfterElements, 'être un email valide')
    return false;


}


/**
 *  check if date format is conform to local fr
 * @param dateToCheckValue  date to verify format 12/12/1970
 * @param addErrorAfterElement  the after display span error
 */
export function checkDate(dateToCheckValue, addErrorAfterElement) {
    const validRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    let myDate = new Date(dateToCheckValue)
    if (myDate.toLocaleDateString("fr").match(validRegex)) {
        return true;
    }
    addErrorTextInvalidInput(addErrorAfterElement, 'être au format 12/12/2012')
    return false;

}


export function isNumber(Elementvalue, addErrorAfterElement) {

    if (Number.isInteger(parseInt(Elementvalue))) {
        return true;
    }
    addErrorTextInvalidInput(addErrorAfterElement, 'être un nombre')
    return false

}

function messageSubmissionForm() {

    const content = constant.form.parentNode
    constant.form.parentNode.innerHTML = ""
    constant.validationContent.classList.remove("hidden")
    constant.validationContent.classList.add("display-center")

    content.insertAdjacentElement("afterbegin", constant.validationContent)

}

function inputRadioIschecked(inputRadio, addErrorAfterElement) {
    let valid = false
    inputRadio.forEach((elt) => {
        if (elt.checked)
            valid = true
    })
    if (!valid) {
        addErrorTextInvalidInput(addErrorAfterElement, 'être selectionné')
    }

}

/**
 * validate form 
 */
export function validate() {
    const inputTextToCheck = [constant.inputName, constant.inputLastName]

    constant.form.addEventListener("submit", (e) => {
        const radioErrorMessage = constant.radioLocation.nextElementSibling
        let nbError = 0
        e.stopPropagation()
        e.preventDefault()

        removeErrorInvalidInputText(elt => elt.remove())
        isInputTextEmpty(inputTextToCheck)
        validateEmail(constant.emailToCheck.value, constant.emailToCheck)
        checkDate(constant.birthDate.value, constant.birthDate)
        isNumber(constant.quantity.value, constant.quantity)
        removeErrorInvalidInputText((errorElt, nb) => nbError = nb)
        inputRadioIschecked(constant.location, radioErrorMessage)
        inputRadioIschecked([constant.termsOfUse], constant.termsOfUse)
        if (nbError < 1)
            messageSubmissionForm()
    })
}