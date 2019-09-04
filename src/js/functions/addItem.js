
import { data } from '../objects/data';
import { Absence } from '../objects/absences';
import { Substitution } from '../objects/substitutions';
import { Companies } from '../objects/companies';
import { Chat } from '../objects/chats';
import { Course } from '../objects/school';
import { KidsTeens } from '../objects/kidsTeens';

export const addItem = (sched = 'dfsched', lvl = 'dflvl', teacher = 'dfteacher', hrs = 'dfhrs', comp = 'dfcomp', freq = 'dffreq', chat = 'dfchat', date = 'dfdate', kt = 'dfkt', subabtime = 'sbabdf') => {
    let type, newItem, ID;
    type = sched;

    // Set type to 'Courses' if it's at the school
    if (sched !== 'Absences' && sched !== 'Companies' && sched !== 'Substitutions' && sched !== 'Chat' && sched !== 'Kids') {
        type = 'Courses';
    }

    // Create new ID
    if (data.allHours[type].length > 0) {
        ID = data.allHours[type][data.allHours[type].length - 1].id + 1;
    } else {
        ID = 0;
    }

    // Create new item based on type
    if (type === 'Absences') {
        newItem = new Absence(ID, type, sched, lvl, teacher, hrs, date, subabtime);

    } else if (type === 'Companies') {
        newItem = new Companies(ID, type, sched, lvl, hrs, comp, freq, date);

    } else if (type === 'Substitutions') {
        newItem = new Substitution(ID, type, sched, lvl, teacher, hrs, date, subabtime);

    } else if (type === 'Chat') {
        newItem = new Chat(ID, type, sched, hrs, chat);

    } else if (type === 'Kids') {
        newItem = new KidsTeens(ID, type, sched, kt, hrs);

    } else {
        newItem = new Course(ID, type, sched, lvl, hrs);
    }

    // Push it into data stucture
    data.allHours[type].push(newItem);
    
    // Return the new element
    return newItem;
};