let isDone: boolean = false;

let hex: number=0xf00d;
let octal:number=0o733;

let color:string='blue';
color='red';
color='1231';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

//Array
let list:number[]=[1,2,3];
let list1:Array<number>=[1,2,3,4];

let x:[string,number];

x=["hello",10];

let list2:any[]=[1,true,"free"];
list2[1]=100
console.log(list2);