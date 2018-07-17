const Person = require('./person');

module.exports = class Student extends Person{
    constructor(name,age,clazz) {
        super(name, age);
        this.klass = clazz;
    }

    introduce() {
        return super.introduce() +
            " I am a Student. I am at Class " + this.klass+".";
    }
};