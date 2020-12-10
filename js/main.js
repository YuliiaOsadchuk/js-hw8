class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.IsStudied = true;
    }

    get getMark() {
        if (!this.IsStudied) return null;
        return this.marks;
    }

    set setMark(mark) {
        if (!this.IsStudied) return null;
        this.marks.push(mark);
    }

    getInfo() {
        return `Студент ${this.course}го курсу ${this.university} , ${ this.fullName }`;
    }

    getAverageMark() {
        const sum = this.marks.reduce((total, mark) => {
            return total += mark;
        }, 0);
        return (sum / this.marks.length).toFixed(2);
    }

    dismiss() {
        this.IsStudied = false;
    }

    recover() {
        this.IsStudied = true;
    }
}

class BudgetStudent extends Student {
    constructor(...params) {
        super(...params);
        const interval = 30000;
        setInterval(() => this.getScholarship(), interval);
    }

    getScholarship() {
        if (this.getAverageMark() >= 4 && this.IsStudied) {
            console.log("Ви отримали 1400 грн. стипендії");
        }
    }
}

const ostap = new Student('Вищої Школи Психотерапії м.Одеса', 1, 'Остап Родоманський', [5, 5, 4, 5, 4, 5]);
console.log('getInfo: ', ostap.getInfo());
ostap.setMark = 5;
console.log('getMark: ', ostap.getMark);
console.log('getAverageMark: ', ostap.getAverageMark());
ostap.dismiss();
console.log('getMark: ', ostap.getMark);
ostap.recover();
console.log('getMark: ', ostap.getMark);

const oleksander = new BudgetStudent('ІППТ м.Львів', 5, 'Іванов Олександр Богданович', [3, 4, 5, 5, 5, 5, 5, 5]);