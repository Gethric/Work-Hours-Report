export const DOMstrings = {

    timeSlot: '.timeSlot',
    timeSlotDiv: '#timeslot',
    active: '.active',
    hours: '.hours',
    subAbs: '.subabs',
    coDiv: '#co',
    company: '#company',
    freq: '#frequency',
    date: '#date',
    teacher: '#teacher',
    adultsSelect: '.adults',
    adultsDiv: '#adults',
    kidsTeensSelect: '.kidsTeens',
    kidsTeensDiv: '#kidsTeens',
    chatSelect: '.chat',
    chatDiv: '#chat',
    btn: '.addBtn',
    itemContainer: '.report__list',
    absencesContainer: '.absences__list',
    subsContainer: '.companies__list',
    companiesContainer: '.companies__list',
    coursesContainer: '.courses__list'
};

export const getType = () => {

    let type;

    if (getTimeSlot === 'Chat') {
        type = 'Chat';
    } else if (getTimeSlot === 'Kids and Teens') {
        type = 'Kids and Teens';
    } else if (getTimeSlot === 'Companies') {
        type = 'Companies';
    } else if (getTimeSlot === 'Substitutions') {
        type = 'Substitutions';
    } else if (getTimeSlot === 'Absences') {
        type = 'Absences';
    } else {
        type = 'Course';
    }
    return type;
}

export const selectElements = {

    selectAdultsId: document.querySelector('#adults'),
    selectKidsTeensId: document.querySelector('#kidsTeens'),
    selectChatsId: document.querySelector('#chat'),
    selectCompaniesId: document.querySelector('#co'),
    selectSubsAbsClass: document.querySelector('.subabs'),
};

export const getInputs = () => {
    return {
        getTimeSlot: document.querySelector(DOMstrings.timeSlot).value,
        getAdults: document.querySelector(DOMstrings.adultsSelect).value,
        getCompany: document.querySelector(DOMstrings.company).value,
        getFrequency: document.querySelector(DOMstrings.freq).value,
        getDate: document.querySelector(DOMstrings.date).value,
        getTeacher: document.querySelector(DOMstrings.teacher).value,
        getHours: parseFloat(document.querySelector(DOMstrings.hours).value)        
    }
};

/*
export const getInputs = () => {
    return {
        getTimeSlot: () => {
            if (!base.DOMstrings.timeSlot) {
                return null;
            }
            return document.querySelector(base.DOMstrings.timeSlot).value
        },
        getAdults: () => {
            if (!base.DOMstrings.adultsVal) {
                return null;
            }
            return document.querySelector(base.DOMstrings.adults).value        
        },
        getCompany: () => {
            if (!base.DOMstrings.timeSlot) {
                return null;
            }
            return document.querySelector(base.DOMstrings.company).value          
        },
        getFrequency: () => {
            if (!base.DOMstrings.timeSlot) {
                return null;
            }
            return document.querySelector(base.DOMstrings.frequency).value           
        },
        getDate: () => {
            if (!base.DOMstrings.timeSlot) {
                return null;
            }
            return document.querySelector(base.DOMstrings.date).value           
        },
        getTeacher: () => {
            if (!base.DOMstrings.timeSlot) {
                return null;
            }
            return document.querySelector(base.DOMstrings.teacher).value  
        },
        getHours: () => {
            if (!base.DOMstrings.timeSlot) {
                return null;
            }
            return parseFloat(document.querySelector(base.DOMstrings.hours).value)  
        }
    }
};
*/

export let data = {
    allHours: {
        Courses: [],
        Companies: [],
        Substitutions: [],
        Absences: [],
        Chat: [],
        
    },
    totals: {
        Courses: 0,
        Companies: 0,
        Substitutions: 0,
        Absences: 0,
        Chat: 0
    },
    allTot: 0 
};