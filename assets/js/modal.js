"use strict";
import constant from './const.js'

// DOM Elements

// launch modal event

export function launchModal() {
    constant.modalBtn.forEach((e) => e.addEventListener('click', () => {
        constant.modalbg.style.display = "block";
    }));

}

/**
 *  Close modal 
 */
export function closeModal() {

    constant.close.forEach((btn) => btn.addEventListener("click", function (e) {
        constant.modalbg.style.display = "none";
    }));
}