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

        html = `<div id="sub-%id%">
                    <table class="item">
                        <tr>
                            <td>%date%</td>
                            <td>%level%</td>
                            <td>%subabtime%</td>
                            <td>%teacher%</td>
                            <td>%hours%</td>
                        </tr>
                    </table>
                    <button type = "button" class = "delete-btn" id="sub-%id%">DELETE</button>
                </div>`;
        
    } else if (input.getTimeSlot === 'Companies') {

        element = DOMstrings.companiesContainer;

        html = `<div id="cmp-%id%">
                    <table class="item">
                        <td>%company%</td>
                        <td>%level%</td>
                        <td>%frequency%</td>
                        <td>%hours%</td>
                    </table>
                    <button type = "button" class = "delete-btn" id="cmp-%id%">DELETE</button>
                </div>`;

    } else if (input.getTimeSlot === 'Substitutions') {

        element = DOMstrings.subsContainer;

        html = `<div id="sub-%id%">
                    <table class="item">
                        <td>%date%</td>
                        <td>%level%</td>
                        <td>%subabtime%</td>
                        <td>%teacher%</td>
                        <td>%hours%</td>
                    </table>
                    <button type = "button" class = "delete-btn" id = "sub-%id%">DELETE</button>
                </div>`;

    } else {

        element = DOMstrings.coursesContainer;

        html = `<div id="crs-%id%">
                    <table class = "item">
                        <tr>
                            <td>%schedule%</td>
                            <td>%level%</td>
                            <td>%hours%</td>
                        </tr>
                    </table>
                    <button type = "button" class = "delete-btn">DELETE</button>
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