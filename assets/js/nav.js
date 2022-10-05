import constant from './const.js';

/**
 * Add response class
 */
export function editNav() {

    if (constant.topNav.className === "topnav") {
        return constant.topNav.className += " responsive";
    }
    constant.topNav.className = "topnav";

}

/**
 * Display menu on mobile and tablet
 */
export function displayMenu() {
    constant.menu.forEach((elt) => {
        if (elt.classList.contains("hiddenMenu")) {
            return elt.classList.remove("hiddenMenu")
        }
        elt.classList.add("hiddenMenu")
    })
}