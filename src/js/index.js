import * as base from './views/base';
import * as reportView from './views/reportView';
import * as menuView from './views/menuView';

const setupEventListeners = () => {

    const DOM = base.DOMstrings;

    document.querySelector(DOM.timeSlot).addEventListener('change', menuSelect);

    document.querySelector(DOM.btn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keycode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
};


const updateHours = () => {

        // Calculate the total hours

        // Return the hours

        // Display the hours in the UI
};

const ctrlAddItem = () => {
    let input, newItem;

    // 1. Get the field input data
    input = base.getInputs();

    if (input.getHours !== "" && !isNaN(input.getHours) && input.getHours > 0 && input.getTimeSlot !== "" && input.getAdults !== "") {
        // 2. Add the item to the hours controller
        newItem = reportView.addItem(input.getTimeSlot, input.getAdults, input.getHours);

        // 3. Add the item to the UI
        reportView.addListItem(newItem, input.type);

        // Clear the fields
        // reportView.DOMclearFields();

        // Calculate and update hours
        updateHours();
    }
};

const menuSelect = () => {

    let menu = menuView.getMenu();

    if (menu === 'Chat') {
        menuView.chatMenu();
    } else if (menu === 'Kids and Teens') {
        menuView.kidsTeensMenu();
    } else if (menu === 'Companies') {
        menuView.companiesMenu();
    } else if (menu === 'Substitutions') {
        menuView.subsAbsMenu();
    } else if (menu === 'Absences') {
        menuView.subsAbsMenu();
    } else {
        menuView.adultsMenu();
    }
};

const init = () => {
    setupEventListeners();
};

init();
