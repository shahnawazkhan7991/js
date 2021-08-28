// Type conversion
console.log("Welcome to class4");

let myvar;
myvar = String(65);
console.log(myvar,(typeof myvar));

let Booleanvar = String(true);
console.log(Booleanvar,(typeof Booleanvar));

let date = String(new Date());
console.log(date,(typeof date));

let arr = String([1,2,3,4,5]);
console.log(arr.length,(typeof arr));

let i = 75;
console.log(i.toString());

let stri = Number("3434");
stri = Number("34d34");
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
console.log(stri,(typeof stri));


let number = parseFloat('34.098');
console.log(number.toFixed(2),(typeof number));


//Type coercion

// let mystr = Number("698");
let mystr = ("698");
let mynum = 34;
console.log(mystr + mynum);

