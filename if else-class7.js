console.log("This is class7");
//if else
//=== - check the type and value,both should be equal
const age = 40;
const drive = false;

// if (age==19){
//     console.log("Age is 19");
// }
// else if(age == 65){
//     console.log('Age is 65');
// }
// else{
//     console.log('Age is not 19');
// }

//if (drive && age>18
//if (drive || age>18
if (drive || age>18){
    console.log("you can drive");
}
else{
    console.log("You can not drive");
}

//Ternary operator
console.log(age == 40? 'age is 45': 'age is not 45');

switch(age){
    case 10:
        console.log('you are 10');
        break;
    case 20:
        console.log('you are 20');
        break;
    case 30:
        console.log('ypu are 30');
        break;
    default:
        console.log('Not Known');
        break;
}
