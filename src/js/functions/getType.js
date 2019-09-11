
export const getType = () => {

    let type;

    if (getTimeSlot === 'Chat') {
        type = 'Chat';
    } else if (getTimeSlot === 'Kids and Teens') {
        type = 'Kids and Teens';
    } else if (getTimeSlot === 'Companies') {
        type = 'Companies';
    } else if (getTimeSlot === 'Substitutions') {
        type = 'Substitutions';
    } else if (getTimeSlot === 'Absences') {
        type = 'Absences';
    } else {
        type = 'Courses';
    }
    return type;
}