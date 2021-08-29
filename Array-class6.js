console.log("This is class6");

let arr = [13,25,45,67];
const fruits = ['orange','apple','pineapple'];
const mixed = ['string', 1, 2, 5, [3,5]];

const New = new Array(2, 5, 125, 'orange');
console.log(arr);
console.log(fruits);
console.log(mixed);
console.log(arr.length);
console.log(fruits[1]);
console.log(Array.isArray('dfdf'));
arr[0]='shahnawaz'
let arrelement = arr[0];
console.log('element:', arrelement);
console.log(New);


let value = arr.indexOf(25);
console.log(value);

//mutating or modifying array
arr.push(3564);
arr.unshift(1009);
arr.pop();
arr.push();
arr.shift();
arr.splice(2,3);

let arr2 = [1,2,3,4];
arr = arr.concat(arr2);
console.log(arr);

let obj = {
    name:'shahnawaz',
    age:22,
    marks:[1,2,65,75,94]
}
console.log(obj);
console.log(obj['age']);
console.log(obj.age);
console.log(obj.name);











