function warnUser():void{
    alert("This is my warning message");
}

let unusable:void=undefined;

function error(message:string):never{
    throw new Error(message);
}

declare function create(o:object|null):void;

create({prop:0});//ok
create(null);//ok

create({prop:42});

let someValue:any="this is a string";
let strLength:number=(<string>someValue).length;