const Person = require('./person');

module.exports = class Teacher extends Person {
    constructor(name, age, classes) {
        super(name, age);
        this.classes = classes;
    }

    introduce() {

        let s = this.classes.map(v => v.number).join(",");
        if (s !== "") {
            return "My name is " + this.name + ". I am " + this.age + " years old." +
                " I am a Teacher. I teach Class " + s + ".";
        } else {
            return "My name is " + this.name + ". I am " + this.age + " years old." +
                " I am a Teacher. I teach No Class.";
        }

    }

};