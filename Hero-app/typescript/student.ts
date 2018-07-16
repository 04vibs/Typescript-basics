class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter2(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user1 = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter2(user1);