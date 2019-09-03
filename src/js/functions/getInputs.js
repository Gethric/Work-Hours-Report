
import { DOMstrings } from '../objects/DOMstrings';

export const getInputs = () => {
    return {
        getTimeSlot: document.querySelector(DOMstrings.timeSlot).value,
        getAdults: document.querySelector(DOMstrings.adultsSelect).value,
        getTeacher: document.querySelector(DOMstrings.teacher).value,
        getHours: parseFloat(document.querySelector(DOMstrings.hours).value),
        getCompany: document.querySelector(DOMstrings.company).value,
        getFrequency: document.querySelector(DOMstrings.freq).value,
        getChatSelect: document.querySelector(DOMstrings.chatSelect).value,
        getDate: document.querySelector(DOMstrings.date).value,
        getKTSelect: document.querySelector(DOMstrings.kidsTeensSelect).value,
        getSubAbTime: document.querySelector(DOMstrings.subAbTime).value
             
    }
};
