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

        html = `<div id="Absences-%id%">
                    <table class="item">
                        <tr>
                            <td>%date%</td>
                            <td>%level%</td>
                            <td>%subabtime%</td>
                            <td>%teacher%</td>
                            <td>%hours%</td>
                            <td></td>
                            <td>
                                <button type = "button" class = "delete-btn">DELETE</button>
                            </td>
                        </tr>
                    </table>
                </div>`;
        
    } else if (input.getTimeSlot === 'Companies') {

        element = DOMstrings.companiesContainer;

        html = `<div id="Companies-%id%">
                    <table class="item">
                        <tr>
                            <td>%company%</td>
                            <td>%level%</td>
                            <td>%frequency%</td>
                            <td>%hours%</td>
                            <td></td>
                            <td></td>
                            <td>
                                <button type = "button" class = "delete-btn" id="cmp-%id%">DELETE</button>
                            </td>
                        </tr>
                    </table>
                </div>`;

    } else if (input.getTimeSlot === 'Substitutions') {

        element = DOMstrings.subsContainer;

        html = `<div id="Substitutions-%id%">
                    <table class="item">
                        <tr>
                            <td>%date%</td>
                            <td>%level%</td>
                            <td>%subabtime%</td>
                            <td>%teacher%</td>
                            <td>%hours%</td>
                            <td></td>
                            <td>
                                <button type = "button" class = "delete-btn">DELETE</button>
                            </td>
                        </tr>
                    </table>
                </div>`;

    } else if (input.getTimeSlot === 'Kids') {

        element = DOMstrings.coursesContainer;

        html = `<div id="Kids-%id%">
                    <table class = "item">
                        <tr>
                            <td>%schedule%</td>
                            <td>%level%</td>
                            <td>%hours%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button type = "button" class = "delete-btn">DELETE</button>
                            </td>
                        </tr>
                    </table>
                </div>`;

    } else if (input.getTimeSlot === 'Chat') {

        element = DOMstrings.coursesContainer;
    
        html = `<div id="Chat-%id%">
                    <table class = "item">
                        <tr>
                            <td>%schedule%</td>
                            <td>%level%</td>
                            <td>%hours%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button type = "button" class = "delete-btn">DELETE</button>
                            </td>
                        </tr>
                    </table>
                </div>`;

    } else {

        element = DOMstrings.coursesContainer;

        html = `<div id="Courses-%id%">
                    <table class = "item">
                        <tr>
                            <td>%schedule%</td>
                            <td>%level%</td>
                            <td>%hours%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button type = "button" class = "delete-btn">DELETE</button>
                            </td>
                        </tr>
                    </table>
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
    newHtml = newHtml.replace('%date%', obj.date);
    newHtml = newHtml.replace('%kidsTeens%', obj.kidsTeens);
    newHtml = newHtml.replace('%subabtime%', obj.subabtime);


    // Insert HTML into the DOM
    document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
};