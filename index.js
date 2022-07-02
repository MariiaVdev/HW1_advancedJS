class Employee {
    constructor (name, age, salary) {
        this._name = name;
        this._age = age;
        this._salary = salary;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        return this._name = name;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        return this._age = age;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        return this._salary = salary;
    }
}


class Programmer extends Employee {
    // constructor (lang, ...args) {
    //     super (...args);
    //     this.lang = lang;
    // }
    constructor (lang, ...args) {
        super(...args);
        this.lang = lang;
       
    }
    get salary() {
        return super.salary * 3;
    }
}

const John = new Programmer ('eng', 'John', 25, 3000);
const Jeck = new Programmer ('ger', 'Jeck', 27, 8000);
const Joly = new Programmer ('eng', 'Joly', 26, 7000);

console.log(John);
console.log(Jeck);
console.log(Joly);

console.log("John salary =",John.salary);
console.log("Jeck salary =", Jeck.salary);
console.log("Joly salary =", Joly.salary);