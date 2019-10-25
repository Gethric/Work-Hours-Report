
import { getCompleteReport } from './getCompleteReport';


export const sendReport = () => {

    let report = getCompleteReport();

    let reportstring = JSON.stringify(report);

    console.log(report);

    writeUserData(report);

}