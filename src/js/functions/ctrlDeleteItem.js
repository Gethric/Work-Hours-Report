import { deleteItem } from "./deleteItem";
import { deleteListItem } from './deleteListItem';


export const ctrlDeleteItem = (event) => {
    let itemID, splitID, type, ID;

    itemID = event.target.parentNode.id;

    if (itemID) {

        splitID = itemID.split('-');
        type = splitID[0];
        ID = parseInt(splitID[1]);

        deleteItem(type, ID);

        deleteListItem(itemID);
    }
};