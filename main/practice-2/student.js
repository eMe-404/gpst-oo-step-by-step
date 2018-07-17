const Person = require('./person');

module.exports = class Student extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        if (this.klass.leader === this.name) {
            return "My name is " + this.name + ". I am " + this.age + " years old." +
                " I am a Student. I am Leader of Class " + this.klass.number + ".";
        } else {
            return "My name is " + this.name + ". I am " + this.age + " years old." +
                " I am a Student. I am at Class " + this.klass.number + ".";
        }

    }
};
