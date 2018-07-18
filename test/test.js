const assert = require('assert');
const Person = require('../main/practice-3/person');

before(function () {
    console.log("hello mocha");

});

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('person', () => {
    it('should have filed name and age', function () {
        let person = new Person("Jone", 21);
        assert.equal(person.name, "Jone");
        assert.equal(person.age, 21);
    });

    it('should  have a method introduce, introduce person with name and age"', function () {
        let person = new Person("Tom", 21);

        let introduce = person.introduce();

        assert.equal(introduce,"My name is Tom. I am 21 years old.");
    });
});

