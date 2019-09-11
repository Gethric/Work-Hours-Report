
import { calcReport } from './calcReport';
import { getTotals } from './getTotals';
import { displayHours } from './displayHours';

export const updateHours = () => {


    // Calculate the total hours
    calcReport();

    // Return the hours
    let report = getTotals();

    // Display the hours in the UI
    
    console.log(report);
    
    displayHours(report);
};