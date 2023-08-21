let array1 = ["items1","item2","items3"]
//for copying into new array
 
// using slice
let array2 = array1.slice(0)
console.log(array2)
// using concat
let array3 = [].concat(array1);
console.log(array3)

// using spread operator
let array4 = [...array1]
console.log(array4);