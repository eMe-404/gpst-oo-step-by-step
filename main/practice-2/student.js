const Person = require('./person');

module.exports = class Student extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        let baseIntroduce = super.introduce();
        if (this.klass.leader === this.name) {
            return baseIntroduce +
                " I am a Student. I am Leader of Class " + this.klass.number + ".";
        } else {
            return baseIntroduce +
                " I am a Student. I am at Class " + this.klass.number + ".";
        }

    }
};
