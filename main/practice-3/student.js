const Person = require('./person');

module.exports = class Student extends Person {
    constructor(name, age, clazz) {
        super(name, age);
        this.clazz = clazz;
    }

    introduce() {
        let baseIntroduce = super.introduce();
        if (this.clazz.leader === this.name) {
            return baseIntroduce +
                " I am a Student. I am Leader of Class " + this.clazz.number + ".";
        } else if (this.clazz.hasStudent(this.name)) {
            return baseIntroduce +
                " I am a Student. I am at Class " + this.clazz.number + ".";
        } else {
            return baseIntroduce +
                " I am a Student. I haven't been allowed to join Class.";
        }

    }
};
