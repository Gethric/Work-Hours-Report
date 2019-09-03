import { DOMstrings } from '../objects/DOMstrings';
import { getInputs } from './getInputs';


export const addListItem = (obj) => {
    let html, newHtml, element, input;

    html = "Jesus";
    newHtml = "Jones";
    input = getInputs();

    // Create HTML string with placeholder tags

    if (input.getTimeSlot === 'Absences') {

        element = DOMstrings.absencesContainer;

        html = `<div class="item" id="sub-%id%">
                    <tr>
                        <td>%date%</td>
                        <td>%level%</td>
                        <td>%subabtime%</td>
                        <td>%teacher%</td>
                        <td>%hours%</td>
                        <div class="item__delete">
                            <button class="item__delete--btn">
                            </button>
                        </div>
                    </tr>
                </div>`;
        
    } else if (input.getTimeSlot === 'Companies') {

        element = DOMstrings.companiesContainer;

        html = `<div class="item" id="cmp-%id%">
                    <td>%company%</td>
                    <td>%level%</td>
                    <td>%frequency%</td>
                    <td>%hours%</td>
                    <div class="item__delete">
                        <button class="item__delete--btn">
                        </button>
                    </div>
                </div>`;

    } else if (input.getTimeSlot === 'Substitutions') {

        element = DOMstrings.subsContainer;

        html = `<div class="item" id="sub-%id%">
                    <td>%date%</td>
                    <td>%level%</td>
                    <td>%subabtime%</td>
                    <td>%teacher%</td>
                    <td>%hours%</td>
                </div>`;

    } else {

        element = DOMstrings.coursesContainer;

        html = `<div class = "item" id="crs-%id%">
                    <tr>
                        <td>%schedule%</td>
                        <td>%level%</td>
                        <td>%hours%</td>
                    </tr>
                </div>`;

       }

    // Replace placeholder tags with actual data
    newHtml = html.replace('%id%', obj.id);
    newHtml = newHtml.replace('%schedule%', obj.schedule);
    newHtml = newHtml.replace('%level%', obj.level);
    newHtml = newHtml.replace('%teacher%', obj.teacher);
    newHtml = newHtml.replace('%hours%', obj.hours);
    newHtml = newHtml.replace('%company%', obj.company);
    newHtml = newHtml.replace('%frequency%', obj.frequency);
    newHtml = newHtml.replace('%chat%', obj.chat);
    newHtml = newHtml.replace('%date%', obj.date);
    newHtml = newHtml.replace('%kidsTeens%', obj.kidsTeens);
    newHtml = newHtml.replace('%subabtime%', obj.subabtime);


    // Insert HTML into the DOM
    document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
};