console.log("This is class8");
console.log(1);
console.log(2);
console.log(3);

//loops- for, while, do-while

let a = 65;
a +=1;
a++;
console.log(a);

// for(let i=0; i<500; i++){
//     console.log(i);
// }

// let j=100;
// while (j > 10){
//     console.log(j + 1);
//     j += 1;
// }

// let k = 110;
// do{
//     console.log(k+1);
//     k += 1;
// }while(k<101);


// let k = 110;
// do{
//     console.log(k+1);
//     k += 1;
//     if(k===5){
//         break;
//     }
    
// }while(k+1);

let k=110;
do{
    if(k===5);{
        k+=1;
        continue;
    }
   console.log(k+1);
   k+=1;

}while(k<10);


let arr = [1,5,3,8,6];
// for (let i=0; i<arr.length; i++){
//     const element = arr[i];
//     console.log(element);
// }


arr.forEach(function(element, index, array){
    console.log(element, index, array);
});

let obj = {
    name:'shahnawaz',
    age: 22,
    type: "Heavy programmer",
    lan:'java'

}
for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`)
}
console.log('done');