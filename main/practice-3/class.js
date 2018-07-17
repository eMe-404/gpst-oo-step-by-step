// Write your code here
const student = require('./student');
const teacher = require('./teacher');

module.exports = class Class {

    constructor(number) {
        this.number = number;
        this.classMember = [];
    }

    assignLeader(student) {
        this.leader = student.name;


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
        // teacher.prototype.addedMember(student);

    }




};
