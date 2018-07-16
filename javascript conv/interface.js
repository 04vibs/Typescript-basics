"use strict";
function greeter1(person) {
    return "hello," + person.firstName + "" + person.lastName;
}
var abc = { firstName: "Prashant", lastName: "User" };
document.body.innerHTML = greeter1(abc);
