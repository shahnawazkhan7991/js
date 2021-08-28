console.log('This is class');
//strings
const name ='shahnawaz';
const greeting = 'Good morning';
console.log(greeting + ' ' + name);

let html = "<h1> This is headings </h1>" +
"<p> This is  paragraph</p> ";
html = html.concat('this ','str');
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html[1]);
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(3));
// console.log(html.endsWith('dsfd'));
// console.log(html.includes('fg'));
// console.log(html.substring(1, 6));
// console.log(html.slice(0,4));
// console.log(html.split('>'));
// console.log(html.replace('This', 'It'));

let fruit1 = 'apple\'';
let fruit2 = 'mango';
let myhtml = `Hello ${name}
<h> This is "my" heading</h1>
<p> you like ${fruit1} and ${fruit2}`;
// document.body.innerHTML = myhtml
document.write(myhtml);