// Write your code here
const student = require('./student');

module.exports = class Class {

    constructor(number) {
        this.number = number;
        this.classMember = [];
        this.teachers = [];
    }

    assignLeader(student) {
        this.leader = student.name;

        this.teachers.forEach(t => t.notifyLeaderAssigned(student.name +'become Leader of Class '+this.number));

        if (this.hasStudent(student.name)) {
            return "Assign team leader successfully.";
        } else {
            return "It is not one of us."
        }

    }

    hasStudent(name) {
        return this.classMember.includes(name)
    }


    appendMember(student) {
        this.classMember.push(student.name);
        // this.teacher.notifyStudentAppended(student);
        this.teachers.forEach(t => t.notifyStudentAppended(
            student.name +'has joined Class'+ this.number));

    }


};
