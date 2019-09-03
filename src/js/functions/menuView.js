import { selectElements } from '../objects/selectElements';

// Show or hide appropriate divs

const names = selectElements;

const changeAdultsStyle = (property, value) => {
    if(!names.selectAdultsId) {
        return;
    }
    names.selectAdultsId.style[property] = value;
}

const changeKidsStyle = (property, value) => {
    if(!names.selectKidsTeensId) {
        return;
    }
    names.selectKidsTeensId.style[property] = value;
}

const changeChatStyle = (property, value) => {
    if(!names.selectChatsId) {
        return;
    }
    names.selectChatsId.style[property] = value;
}

const changeCompanyStyle = function(property, value) {
    if(!names.selectCompaniesId) {
        return;
    }
    names.selectCompaniesId.style[property] = value;
}

const changeSubAbsStyle = function(property, value) {
    if(!names.selectSubsAbsClass) {
        return;
    }
    names.selectSubsAbsClass.style[property] = value;
}

// Decides which div styles to change

export const adultsMenu = () => {
    changeAdultsStyle('display', 'block');
    changeKidsStyle('display', 'none');
    changeChatStyle('display', 'none');
    changeCompanyStyle('display', 'none');
    changeSubAbsStyle('display', 'none');
}

export const kidsTeensMenu = () => {
    changeAdultsStyle('display', 'none');
    changeKidsStyle('display', 'block');
    changeChatStyle('display', 'none');
    changeCompanyStyle('display', 'none');
    changeSubAbsStyle('display', 'none');
}

export const companiesMenu = () => {
    changeAdultsStyle('display', 'block');
    changeKidsStyle('display', 'none');
    changeChatStyle('display', 'none');
    changeCompanyStyle('display', 'block');
    changeSubAbsStyle('display', 'none');
}

export const subsAbsMenu = () => {
    changeAdultsStyle('display', 'block');
    changeKidsStyle('display', 'none');
    changeChatStyle('display', 'none');
    changeCompanyStyle('display', 'none');
    changeSubAbsStyle('display', 'block');
}

export const chatMenu = () => {
    changeAdultsStyle('display', 'none');
    changeKidsStyle('display', 'none');
    changeChatStyle('display', 'block');
    changeCompanyStyle('display', 'none');
    changeSubAbsStyle('display', 'none');
}
