
import { data } from '../objects/data';
import { DOMstrings } from '../objects/DOMstrings';
import { getInputs } from './getInputs';


export const getCompleteReport = () => {

    let get, reportData, allHours, totals, allTot;

    alert("Are you sure?");

    // Collect inputs from Name and Date fields
    // Collect arrays of objects from data structure

    get = getInputs();

    allHours = data.allHours;
    totals = data.totals;
    allTot = data.allTot;

    reportData = {
        inputs: {
            first: get.getFirstname,
            last: get.getLastname,
            fromdate: get.getPeriodFrom,
            todate: get.getPeriodTo
        },
        courseArrays: {
            Courses: allHours.Courses,
            Chat: allHours.Chat,
            Kids: allHours.Kids,
            Substitutions: allHours.Substitutions,
            Companies: allHours.Companies,
            Absences: allHours.Absences
        },
        courseTotals: {
            Courses: totals.Courses,
            Chat: totals.Chat,
            Kids: totals.Kids,
            Substitutions: totals.Substitutions,
            Companies: totals.Companies,
            Absences: totals.Absences
        },
        Tot: allTot
    };

return reportData;

}