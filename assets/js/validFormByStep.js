"use strict";
import constant from './const.js'
import * as form from './form.js'

export function isEmptyImputTextBlur(inputToCheck) {

    inputToCheck.addEventListener("blur", (e) => {
        e.stopPropagation()
        e.target.nextElementSibling.remove()

        form.isInputTextEmpty([e.target])
    })
}


export function validateEmailBlur(inputEmail) {
    inputEmail.addEventListener("blur", (e) => {
        e.target.nextElementSibling.remove()
        form.validateEmail(inputEmail.value, inputEmail)
    })
}

export function checkDateFormatBlur(dateToCheck, addErrorAfterElement) {
    dateToCheck.addEventListener("blur", (e) => {
        e.target.nextElementSibling.remove()
        form.checkDate(dateToCheck.value, addErrorAfterElement)
    })
}

export function isNumberBlur(inputNumberTocheck, addErrorAfterElement) {
    inputNumberTocheck.addEventListener("blur", (e) => {
        if (e.target.nextElementSibling !== null)
            e.target.nextElementSibling.remove()
        form.isNumber(inputNumberTocheck.value, addErrorAfterElement)
    })
}

export function initializeFocusListeners() {
    isEmptyImputTextBlur(constant.inputName)
    isEmptyImputTextBlur(constant.inputLastName)
    validateEmailBlur(constant.emailToCheck)
    checkDateFormatBlur(constant.birthDate, constant.birthDate)
    isNumberBlur(constant.quantity, constant.quantity)
}