//trim()
//toUpperCase()
// toLowerCase()


let firstName = "     Sidharth  ";
console.log(firstName.length);

let newString = firstName.trim();
// As strings are immutable .trim function will return new string
console.log(newString.length);
console.log(newString.toUpperCase());