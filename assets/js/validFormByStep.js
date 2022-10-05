"use strict";
import constant from './const.js'
import * as form from './form.js'

/**
 * Verification if input text is empty after loss focus
 * @param {node} input selector input you want check
 */
export function isEmptyImputTextBlur(inputToCheck) {

    inputToCheck.addEventListener("blur", (e) => {
        e.stopPropagation()
        e.target.nextElementSibling.remove()

        form.isInputTextEmpty([e.target])
    })
}

/**
 *  check if email is valide after loss focus
 * @param {string }emailSelector selector input email you want check
 * @param {node} addErrorAfterElements node element to add error after
 */
export function validateEmailBlur(inputEmail) {
    inputEmail.addEventListener("blur", (e) => {
        e.target.nextElementSibling.remove()
        form.validateEmail(inputEmail.value, inputEmail)
    })
}

/**
 *  check if date format is conform to local fr after element loss focus
 * @param dateToCheck  date to verify format 12/12/1970
 * @param addErrorAfterElement  the after display span error
 */
export function checkDateFormatBlur(dateToCheck, addErrorAfterElement) {
    dateToCheck.addEventListener("blur", (e) => {
        e.target.nextElementSibling.remove()
        form.checkDate(dateToCheck.value, addErrorAfterElement)
    })
}

/**
 * 
 * @param {Number} inputNumberTocheck 
 * @param {node} addErrorAfterElement the after display span error
 */
export function isNumberBlur(inputNumberTocheck, addErrorAfterElement) {
    inputNumberTocheck.addEventListener("blur", (e) => {
        if (e.target.nextElementSibling !== null)
            e.target.nextElementSibling.remove()
        form.isNumber(inputNumberTocheck.value, addErrorAfterElement)
    })
}

/**
 * initialize all focus listener 
 */
export function initializeFocusListeners() {
    isEmptyImputTextBlur(constant.inputName)
    isEmptyImputTextBlur(constant.inputLastName)
    validateEmailBlur(constant.emailToCheck)
    checkDateFormatBlur(constant.birthDate, constant.birthDate)
    isNumberBlur(constant.quantity, constant.quantity)
}