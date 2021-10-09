// scope: Scope means where you can access the specific variable and function in our code.

// Scode chain: The way of finding the varible inside scope or in lexical environment.

// Lexical Environment: Lexical Envirnment is created whenever execution context is created.

// LE= Local memory + Lexical Environment Parent

// Scope is directly dependent on Lexical Environment

/** 
function a(){
    var b=10;
    c();
    function c(){

    }
}
console.log(b);// b is not defined
a()
**/
/** 
function a(){
    var b=10;
    c();
    function c(){
        console.log(b);
        
    }
}

a();**/

function a(){
    
    c();
    function c(){
        console.log(b);
        
    }
}
var b=10;
a(); 