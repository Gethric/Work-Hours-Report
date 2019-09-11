
import { DOMstrings } from '../objects/DOMstrings';

export const displayHours = (obj) => {

    document.querySelector(DOMstrings.courses_tot).textContent = obj.totalCourses;
    document.querySelector(DOMstrings.subs_tot).textContent = obj.totalSubs;
    document.querySelector(DOMstrings.companies_tot).textContent = obj.totalCompanies;
    document.querySelector(DOMstrings.abs_tot).textContent = obj.totalAbs;
    document.querySelector(DOMstrings.totalhrs).textContent = obj.totalReport;

}