
import { data } from '../objects/data';

export const getTotals = () => {
    return {
        totalReport: data.allTot,
        totalCourses: data.totals.Courses + data.totals.Chat + data.totals.Kids,
        totalCompanies: data.totals.Companies,
        totalSubs: data.totals.Substitutions,
        totalAbs: data.totals.Absences,
        totalChats: data.totals.Chat
    };
}