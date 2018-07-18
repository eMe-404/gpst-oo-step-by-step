const Person = require('./person');

 module.exports = class Teacher extends Person {
    constructor(name, age, clazzes) {
        super(name, age);
        this.clazzes = clazzes;
    }

    introduce() {

        let s = this.clazzes.map(v => v.number)
                            .join(",");

        if (s !== "") {
            return "My name is " + this.name + ". I am " + this.age + " years old." +
                " I am a Teacher. I teach Class " + s + ".";
        } else {
            return "My name is " + this.name + ". I am " + this.age + " years old." +
                " I am a Teacher. I teach No Class.";
        }

    }

    isTeaching(student) {
        for (let i = 0; i < this.clazzes.length; i++) {
            if (this.clazzes[i].hasStudent(student.name)) {
                return true;
            }
        }
        return false;
    }

      notifyStudentAppended(notification) {
          console.log(notification);
     }

      notifyLeaderAssigned(notification) {
          console.log(notification);
     }

};
