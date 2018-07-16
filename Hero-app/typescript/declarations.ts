var a =10;

function f(){
    var message ="Hello,world!";
    return message;
}


function f1():any{
    var a=10;
    function g():any{
        var b= a+1;
        return  b;
    }
    
}

var g=f();
//g();

