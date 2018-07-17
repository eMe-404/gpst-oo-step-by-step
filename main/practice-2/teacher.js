const Person = require('./person');

module.exports = class Teacher extends Person {
    constructor(name, age, classes) {
        super(name, age);
        this.classes = classes;
    }

    introduce() {

        let s = this.classes.map(v => v.number).join(",");
        let baseIntroduce = super.introduce();
        if (s !== "") {
            return baseIntroduce +
                " I am a Teacher. I teach Class " + s + ".";
        } else {
            return baseIntroduce +
                " I am a Teacher. I teach No Class.";
        }

    }

};