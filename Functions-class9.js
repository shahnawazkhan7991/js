// console.log("This is class9");
// function message(message){
//     console.log(message);
// }
// message("Hello JavaScript");

// if(1){
//     let i=254;
//     console.log(i);
// }
// console.log(i);

// function ui(name){
//     let i = 9;
//     console.log(i)
//     return 'This is a ${name} ui';
// }
// console.log(ui("Shahnawaz"), i);

const mygreet = function(name, thank='Thank you'){
    let msg='Happy Birthday ${name} how i wish i would fly to you  right now and be with you on this special day of yours'
    return msg;
   
}

let name= 'skillF'
let name2='shahan'
let val= mygreet(name, 'Thanks a lot');
console.log(val);


const myobj={
    name:"SkillF",
    game:function(){
        return "GTA"
    }
}
console.log(myobj.game());



arr=['fruit', 'vegitable', 'furniture'];
arr.forEach(function(element, index, array){
console.log(element,index, array)
});

