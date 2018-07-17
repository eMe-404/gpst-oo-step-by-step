// Write your code here
const student = require('./student');

module.exports = class Class {

    constructor(number) {
        this.number = number;
    }

    assignLeader(student) {
        this.leader = student.name;
    }

};
