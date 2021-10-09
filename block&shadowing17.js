/**  Block : It is defined by curly braces{}. It is also known as compound statement. 
It is comnining multiple javascript statement into a group.**/

// let & const are in block scope
/**{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);//error
console.log(c);//error
 **/

// shadowing:
/** 
var a=100;
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
**/
/** 
let b=100;
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
**/
// Block also follows Lexical scope chain pattern
const a=20;
{
    const a=100;
    {
        const a=200;
        console.log(a);
    }

}


