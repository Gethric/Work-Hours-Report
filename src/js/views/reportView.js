import { Absence } from '../models/absences';
import { Chat } from '../models/chats';
import { Companies } from '../models/companies';
import {  } from '../models/period';
import { Course } from '../models/school';
import { Subsitution } from '../models/substitutions';
import * as base from './base';

export const addItem = (type, lvl, hrs) => {
    let newItem, ID;

    // Set type to 'Courses' if it's at the school
    if (type !== 'Absences' && type !== 'Companies' && type !== 'Substitutions' && type !== 'Chat') {
        type = 'Courses';
    }

    // Create new ID
    if (base.data.allHours[type].length > 0) {
        ID = base.data.allHours[type][base.data.allHours[type].length - 1].id + 1;
    } else {
        ID = 0;
    }

    // Create new item based on type
    if (type === 'Absences') {
        newItem = new Absence(ID, sched, lvl, teacher, hrs);

    } else if (type === 'Companies') {
        newItem = new Companies(ID, comp, freq, lvl, hrs);

    } else if (type === 'Substitutions') {
        newItem = new Substitution(ID, sched, lvl, teacher, hrs);

    } else if (type === 'Chat') {
        newItem = new Chat(ID, sched, chat, hrs);

    } else {
        newItem = new Course(ID, type, lvl, hrs);
    }

    // Push it into data stucture
    base.data.allHours[type].push(newItem);
    
    // Return the new element
    return newItem;
};

export const testing = () => {
    console.log(base.data);
}

export const addListItem = (obj, getTimeSlot) => {
    let html, newHtml, element;

    // Create HTML string with placeholder tags

    if (base.getInputs.getTimeSlot === 'Absences') {

        element = base.DOMstrings.absencesContainer;

        html = `<tr>
                    <td>%date%</td>
                    <td>%level%</td>
                    <td>%schedule%</td>
                    <td>%sub%</td>
                    <td>%hours%</td>
                </tr>`;
        
    } else if (base.getInputs.getTimeSlot === 'Companies') {

        element = base.DOMstrings.companiesContainer;

        html = `<div class="item clearfix" id="cmp-%id%">
                    <div class="schedule">%schedule%</div>
                    <div class="right clearfix">
                        <div class="level">%level%</div>
                        <div class="hours">%hours%</div>
                        <div class="item__delete">
                            <button class="item__delete--btn">
                                <i class="ion-ios-close-outline"></i>
                            </button>
                        </div>
                    </div>
                </div>`;

    } else if (base.getInputs.getTimeSlot === 'Substitutions') {

        element = base.DOMstrings.subsContainer;

        html = `<div class="item clearfix" id="sub-%id%">
                    <div class="schedule">%schedule%</div>
                    <div class="right clearfix">
                        <div class="level">%level%</div>
                        <div class="hours">%hours%</div>
                        <div class="item__delete">
                            <button class="item__delete--btn">
                                <i class="ion-ios-close-outline"></i>
                            </button>
                        </div>
                    </div>
                </div>`;

    } else {

        element = base.DOMstrings.coursesContainer;

        html = `<div class="item clearfix" id="crs-%id%">
                    <div class="schedule">%schedule%</div>
                    <div class="right clearfix">
                        <div class="level">%level%</div>
                        <div class="hours">%hours%</div>
                        <div class="item__delete">
                            <button class="item__delete--btn">
                                <i class="ion-ios-close-outline"></i>
                            </button>
                        </div>
                    </div>
                </div>`;

       }

    // Replace placeholder tags with actual data
    newHtml = html.replace('%id%', obj.id);
    newHtml = newHtml.replace('%schedule%', obj.schedule);
    newHtml = newHtml.replace('%level%', obj.level);
    newHtml = newHtml.replace('%hours%', obj.hours);


    // Insert HTML into the DOM
    document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
};

const clearFields = () => {
    fields = document.querySelectorAll(base.DOMstrings)
}