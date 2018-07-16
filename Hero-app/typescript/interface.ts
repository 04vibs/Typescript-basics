interface Person{
    firstName:string;
    lastName:string;
}

function greeter1(person:Person){
    return "hello,"+person.firstName+""+person.lastName;

}

let abc = { firstName:"Prashant",lastName:"User"};
document.body.innerHTML = greeter1(abc);