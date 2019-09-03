export class Course {
    constructor(id, type, sched, lvl, teacher, hrs, comp, freq, chat, date, kt) {
        this.id = id;
        this.type = type;
        this.schedule = sched;
        this.level = lvl;
        this.teacher = teacher;
        this.hours = hrs;
        this.company = comp;
        this.frequency = freq;
        this.chat = chat;
        this.date = date;
        this.kidsTeens = kt;
    }
};