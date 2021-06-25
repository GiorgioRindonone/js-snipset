//! SNIPPSET

/! SORT ARRAY OF STRING/

let names = ["Jack", "Loce", "Alice"];
names.sort();
// ["Alice", "Jack", "Loce"]

/! SORT ARRAY OF NUMBER/

let scores = [89, 76, 100]
scores.sort((a,b) => { return a - b });
// [76, 89, 100]



/! SELECT A RANDOM ELEMTN/

let items = ["Apple", "Banana", "Mango"];

let index = Math.floor(Math.random() * items.length);

items[index]

/! REVERSE A STRING /

function reverse(s) {
    return s.split("").reverse().join("");
}

reverse("Codapuma");
// amupadoC

/! CHECK IF ELEMENT HAS CLASS /

const element = document.querySelector("#element");

element.classList.contains("sctive");

// Returns true or false 

/! STRING INTERPOLATION/

let name = "Mark" ;

console.log('oh, hi ${name}'. You have ${2 ** 3} new notifications);

// oh, hi Mark. You have 8 new notifications and

/! LOOP TRHOUGH ARRAY /

let cars = ["Ford", "Ferrari", "BMW"];

for (let car of cars) {
    console.log(car);
}

// Ford Ferrari BMW

/! GET CURRENT TIME /

let d = new Date(); 
let now = '${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}';

console.log(now);

/! REPLACE IN A STRING/

let str = "ou are Awesome!";
let txt = str.replace("You", "We");

console.log(txt);

//! METODI UTILI BASE 

/! TOSTRING return a string representing the specified object/

const arr = [1, 2, 'a', 'b']; 
let num = 5;

console.log(arr.toString());
// 1,2, a,b
console.log(num.toString());
//5

/! JOIN return a new string by concatenating all of the elements in an ARRAY/

const al = ["Fire", "Air", "Water"];
console.log(al.join()); //FIre, Air, Water

console.log(al.join('')); //FireAirWater

console.log(al.join('-')); //Fire-Air-Water

/! PUSH adds once or more elements to the end of an array./

const arr = ['a', 'b'];

arr.push('c');
console.log(arr); //"a", "b", "c"

/! POP remove the last element from the array /

const arr = ['a', 'b', 'c'];

arr.pop();

console.log(arr); //"a", "b"

/! REVERSE reverse the order of the elements in array /

const arr = [1, 2, 3];

arr.reverse();

console.log(arr); //3 2 1 

/! INDEXOF search the array for an element and return its position /

const arr = ['x', 'y', 'z'];

console.log(arr.indexOf('y')); // 1
console.log(arr.indexOf('w')); //-1

/! SEARCH searches a string for a specific value and returns the position of the match./

let txt = "Hello World!";
console.log(txt.search('World!')); //6 

/! REPLACE replaces a specified value with another value in a string and string/

let txt = "Hello World!";

console.log(txt.replace('World!', 'Phyton')); // hello phyton

//! ARRAY IN JS 

/REMOVE A SPIFIC ITEM/

const array = [5, 4, 3];

//remove 4 
const index = array.indexOf(4);
if (index > 1 ) {
    array.splice(index, 1);
}

console.log(array); // 5 3

/LOOP THROUGH ARRAY/

const array = [5, 4, 3];

//first way 
for(const el of array) {
    console.log(el);
}

array.forEach( function( item, index ) {
    console.log(item, index);
}); 

/APPEND AN ELEMENT/ 

const array = [5, 4, 3];

array.push(2);


/EMPTY AN ARRAY/

const array = [5, 4, 3];

//first METOD
array = [];
//second metod
array.length = o;
//third metdo
array.splice(0, array.length);

/INSERT AN ITEM AT SPECIFIC INDEX/

const array = [5, 4, 3];

//array = 5 4 3 2 2 2
array.splice(3, 0, 2);

//array 6 5 4 3 2 2
array.splice(0, 0, 6);

/ CONCEPTS /
/*
var makes real ice cubes that rattle around in New York
let makes real ice cubes in Manhatten 
const is like let but the ice cubes never change because they are plastic


let can be updated but not re-declared
a variable declared in a block with let  is only available for use within that block


const cannot be updated or re-declared

SCOPE si intende l’ambito di valità di una variabile e dove il suo valore è accessibile, globalmente o localmente
//let is block scoped
//const is block scoped
//var => function scoped


Hoisting of var
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution


===	pari valore e pari tipo
==	uguale a
!=	non uguale
!==	Non valore uguale o diverso tipo