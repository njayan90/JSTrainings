
// inheritance - subclasses

//implement methods in subclass (Human) which will override parent class functionality

//1. implement a custom function which will add "Mr" to name property in subclass
//2. implement a method in subclass which will increment the power by 2
//3. implement a method in subclass to reduce the power by half
//4. add 2 more properties to Human class - city and state (private to human class)
class superhero {
    constructor(name, strength, speed) {
        this._name = name;
        this._strength = strength;
        this._speed = speed;
        // this.goodHero = true; // focus on this
    }
    powerUp() {
        this.strength += 5;
    }
    get name() {
        console.log("get name");
        return this._name;
    }
    set name(newname) {
        this._name = newname;
    }
    static goodHero() {
        return true;
    }
}

class Human extends superhero {
    constructor(healthpoints, ...superherostuff) {
        super(...superherostuff);
        this._healthpoints = healthpoints;
    }
     set name(name) {
         this._name = name;
     }
}
const details = [20, "Bill", 10, 8]
const hero3 = new Human(...details);
console.log(hero3);
hero3.name = "sai";
console.log(hero3)
const hero4 = new superhero(20, "abc", 8);
console.log(hero4);
