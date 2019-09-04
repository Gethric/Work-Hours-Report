
import { menuSelect } from './menuSelect';
import { ctrlAddItem } from './ctrlAddItem';
import { DOMstrings } from '../objects/DOMstrings';
import { ctrlDeleteItem } from './ctrlDeleteItem';

export const setupEventListeners = () => {

    const DOM = DOMstrings;

    // Function called on changing first menu

    document.querySelector(DOM.timeSlot).addEventListener('change', menuSelect);

    // Function called on clicking + or pressing enter

    document.querySelector(DOM.btn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keycode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

    // Function called on clicking delete button

    document.querySelector(DOM.itemContainer).addEventListener('click', ctrlDeleteItem);
};
