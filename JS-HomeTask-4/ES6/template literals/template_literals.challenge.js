// using template literals build a JS program to check if a person is eligible for a price discount or not
// check if 
// if a registered member - discount is 5% 
// if not registered member - discount is 4%

class User {
    constructor(firstName, lastName, registered, cost) {
        this.fname = firstName;
        this.lname = lastName;
        this.registered = registered;
        this.cost = cost;
    }

    check() {
        if (this.registered == true) {
            this.cost = this.cost - 0.5 * this.cost;
        }
        else {
            this.cost = this.cost - 0.4 * this.cost;
        }
        return this.cost;
    }
}

let user1 = new User("Nirmal", "Jayadharan", true, 100);
console.log(user1.check());
let user2 = new User("abc", "xyz", false, 500);
console.log(user2.check());