
import { data } from '../objects/data';


export const calcTotals = (type) => {
    let sum = 0;

    data.allHours[type].forEach((cur) => {
        sum += cur.hours;
    });
    data.totals[type] = sum;
};
