
import { getInputs } from './getInputs';
import { addItem } from './addItem';
import { addListItem } from './addListItem';
import { updateHours } from './updateHours';


export const ctrlAddItem = () => {
    let input, newItem;

    // 1. Get the field input data
    input = getInputs();

    if (input.getHours !== "" && !isNaN(input.getHours) && input.getHours > 0 && input.getTimeSlot !== "" && input.getAdults !== "") {

        // 2. Add the item to the hours controller
        newItem = addItem(input.getTimeSlot, input.getAdults, input.getTeacher, input.getHours, input.getCompany, input.getFrequency, input.getChatSelect, input.getDate, input.getKTSelect, input.getSubAbTime);

        // 3. Add the item to the UI
        addListItem(newItem);

        // Clear the fields
        // reportView.DOMclearFields();

        // Calculate and update hours
        updateHours();
    }
};