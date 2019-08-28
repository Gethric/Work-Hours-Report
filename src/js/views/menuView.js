import * as base from './base';
import * as reportView from './reportView';

export const getMenu = () => {

        let option = document.querySelector(base.DOMstrings.timeSlot).value
        return option;
    
};

// Here we start the menu select functions

const names = base.selectElements;

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
    changeAdultsStyle('display', 'none');
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


/*

export const adultsMenu = () => { // Make all of these functions defined elsewhere and call them here
    
    adults.style.display = 'block';
    adults.classList.add('active');
    co.style.display = 'none';
    subAbs.style.display = 'none';

    kidsTeens.style.display = 'none';
    kidsTeens.classList.remove('active');

    chat.style.display = 'none';
    chat.classList.remove('active');
    
};

export const kidsTeensMenu = () => {
    
    adults.style.display = 'none';
    adults.classList.remove('active');
    companies.style.display = 'none';
    frequency.style.display = 'none';
    date.style.display = 'none';
    teacher.style.display = 'none';

    kidsTeens.style.display = 'block';
    kidsTeens.classList.add('active');

    chat.style.display = 'none';
    chat.classList.remove('active');
    
};

export const companiesMenu = () => {
    
    adults.style.display = 'block';
    adults.classList.add('active');
    companies.style.display = 'block';
    frequency.style.display = 'block';
    date.style.display = 'none';
    teacher.style.display = 'none';

    kidsTeens.style.display = 'none';
    kidsTeens.classList.remove('active');

    chat.style.display = 'none';
    chat.classList.remove('active');
    
};

export const subsMenu = () => {
    adults.style.display = 'block';
    adults.classList.add('active');
    companies.style.display = 'none';
    frequency.style.display = 'none';
    date.style.display = 'block';
    teacher.style.display = 'block';

    kidsTeens.style.display = 'none';
    kidsTeens.classList.remove('active');

    chat.style.display = 'none';
    chat.classList.remove('active');
};

export const absenceMenu = () => {
    adults.style.display = 'block';
    adults.classList.add('active');
    companies.style.display = 'none';
    frequency.style.display = 'none';
    date.style.display = 'block';
    teacher.style.display = 'block';

    kidsTeens.style.display = 'none';
    kidsTeens.classList.remove('active');

    chat.style.display = 'none';
    chat.classList.remove('active');
};

export const chatMenu = () => {
   
    adults.style.display = 'none';
    adults.classList.remove('active');
    companies.style.display = 'none';
    frequency.style.display = 'none';
    date.style.display = 'none';
    teacher.style.display = 'none';

    kidsTeens.style.display = 'none';
    kidsTeens.classList.remove('active');

    chat.style.display = 'block';
    chat.classList.add('active');
    
};

*/