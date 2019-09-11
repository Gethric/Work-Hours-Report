
import { DOMstrings } from '../objects/DOMstrings';

export const setDate = () => {
    let curfrom,
        curto,
        prdfrom,
        prdto,
        newfromdatearr,
        newfromdatestr,
        newtodatearr,
        newtodatestr,
        splitcurfrom,
        dayfrom,
        dayto,
        month,
        year;

    curfrom = new Date().toISOString().substr(0, 10);
    splitcurfrom = curfrom.split('-');
    dayfrom = splitcurfrom[2];
    month = parseInt(splitcurfrom[1]);
    year = splitcurfrom[0];

    if (dayfrom >= 10 && dayfrom < 25) {
        dayfrom = 26;
        dayto = 10;
        month +=  1;
    } else {
        dayfrom = 11;
        dayto = 25;
    }

    newfromdatearr = [year, month, dayfrom];
    newfromdatestr = newfromdatearr.join('-');

    newtodatearr = [year, month, dayto];
    newtodatestr = newtodatearr.join('-');

    prdfrom = newfromdatestr;
    prdto = newtodatestr;

    document.querySelector(DOMstrings.period_from).value = prdfrom;

    curto = new Date().toISOString().substr(0, 10);
    document.querySelector(DOMstrings.period_to).value = prdto;

}

