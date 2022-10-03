import constant from './const.js';

export function editNav() {

    if (constant.topNav.className === "topnav") {
        return constant.topNav.className += " responsive";
    }
    constant.topNav.className = "topnav";

}

export function displayMenu() {

    constant.menu.forEach((elt) => {
        if (elt.classList.contains("hiddenMenu")) {
            return elt.classList.remove("hiddenMenu")
        }
        elt.classList.add("hiddenMenu")
        // if (elt.style.display === "block") {
        //     return elt.style.display = "none"
        // }

        // elt.style.display = "block"
    })
    // if (e.target.classList.contains("hidden")) {
    //     console.log('ok')
    //     e.target.classList.remove('hidden')
    //     e.target.classList.add('block')
    // }
    // e.target.classList.add('hidden')
    // e.target.classList.remove('block')
}