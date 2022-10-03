"use strict";
import constant from './const.js';
import * as modal from './modal.js';
import * as form from './form.js';
import * as formBystep from './validFormByStep.js';
import * as navigation from './nav.js';

// Modal 
modal.launchModal();
modal.closeModal();


//form 
formBystep.initializeFocusListeners();
form.validate();


// navigation bar

constant.nav.addEventListener("click", (e) => {
    navigation.editNav()
    navigation.displayMenu()
});


