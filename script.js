"use strict";
console.log('---task1---');
//Generation	Male	Female
//-3	great grandfather	great grandmother
//-2	grandfather	     grandmother
//-1	father	           mother
//0	    me!	              me!
//1	    son	            daughter
//2	     grandson	       granddaughter
//3	   great grandson	          great granddaughter
function generation(x, char) {
    let string = '';
    if (x === 0) {
        string = 'me!';
    }
    if (x === -1 && char === 'f') {
        string = 'mother';
    }
    else if (x === -1 && char === "m") {
        string = 'father';
    }
    else if (x === -2 && char === "f") {
        string = 'grandmother';
    }
    else if (x === -2 && char === "m") {
        string = 'grandfather';
    }
    else if (x === -3 && char === "m") {
        string = 'great grandfather';
    }
    else if (x === -3 && char === "f") {
        string = 'great grandmother';
    }
    if (x === 1 && char === 'm') {
        string = 'son';
    }
    else if (x === 1 && char === 'f') {
        string = 'daughter';
    }
    else if (x === 2 && char === 'm') {
        string = 'grandson';
    }
    else if (x === 2 && char === 'f') {
        string = 'granddaughter';
    }
    else if (x === 3 && char === 'm') {
        string = 'great grandson';
    }
    else if (x === 3 && char === 'f') {
        string = 'great granddaughter';
    }
    return string;
}
console.log(generation(2, "f")); // ➞ "granddaughter"
console.log(generation(-3, "m")); // ➞ "great grandfather"
console.log(generation(1, "f")); // ➞ "daughter"
console.log('---task2---');
//Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
function toArray(object) {
}
toArray({ a: 1, b: 2 }); //➞ [["a", 1], ["b", 2]]
toArray({ shrimp: 15, tots: 12 }); //➞ [["shrimp", 15], ["tots", 12]]
toArray({}); //➞ []
