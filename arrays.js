let fruits = ["apple", "mango", "banana"]
console.log(fruits);
console.log(typeof(fruits));
// array is an object in js
console.log(Array.isArray(fruits))
//push
fruits.push("grapes")
// since arrays are mutable in javascript
fruits.unshift("papaya")
console.log(fruits);
