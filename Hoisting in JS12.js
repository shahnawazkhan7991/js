getAge();
console.log(x);
console.log(getAge);
var x= 22;
function getAge(){
    console.log("I am Shahnawaz Khan")
}

// Hoisting as a core concept relies on the way how Execution Context is created. In the first phase 
// i.e. the Memory Allocation Phase all the variables and functions are allocated memory, even before any code is executed. 
// All the variables are assigned undefined at this point in time in the local memory. 