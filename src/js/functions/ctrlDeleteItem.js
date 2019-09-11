import { deleteItem } from "./deleteItem";
import { deleteListItem } from './deleteListItem';
import { updateHours } from './updateHours';


export const ctrlDeleteItem = (event) => {
    let itemID, splitID, type, ID;

    itemID = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;

    if (itemID) {

        splitID = itemID.split('-');
        type = splitID[0];
        ID = parseInt(splitID[1]);

        deleteItem(type, ID);

        deleteListItem(itemID);

        // Calculate and update hours
        updateHours();
    }
};