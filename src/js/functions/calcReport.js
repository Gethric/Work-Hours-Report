
import { calcTotals } from './calcTotals';
import { data } from '../objects/data';

export const calcReport = () => {

    let datot = data.totals;

    // Calculate each course type
    calcTotals('Courses');
    calcTotals('Substitutions');
    calcTotals('Companies');
    calcTotals('Absences');
    calcTotals('Chat');
    calcTotals('Kids');
  
    // Calculate the report hours total: All courses - Absences
    data.allTot = datot.Substitutions + datot.Companies + datot.Courses + datot.Chat + datot.Kids - datot.Absences;

};