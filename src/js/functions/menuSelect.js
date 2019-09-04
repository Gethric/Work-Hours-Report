
import { kidsTeensMenu, companiesMenu, subsAbsMenu, adultsMenu, chatMenu } from './menuView';
import { getMenu } from './getMenu';

export const menuSelect = () => {

    let menu = getMenu();

    if (menu === 'Chat') {
        chatMenu();
    } else if (menu === 'Kids') {
        kidsTeensMenu();
    } else if (menu === 'Companies') {
        companiesMenu();
    } else if (menu === 'Substitutions') {
        subsAbsMenu();
    } else if (menu === 'Absences') {
        subsAbsMenu();
    } else {
        adultsMenu();
    }
};