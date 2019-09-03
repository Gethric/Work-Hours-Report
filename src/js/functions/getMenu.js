import { DOMstrings } from '../objects/DOMstrings';

export const getMenu = () => {

    let option = document.querySelector(DOMstrings.timeSlot).value
    return option;

};