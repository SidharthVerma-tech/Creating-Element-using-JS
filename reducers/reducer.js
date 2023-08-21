const objects = [
    {name: "Rice", price: 5},
    {name: "Laptop", price: 200},
    {name: "Pen", price: 20},
]
//FOR EACH METHOD
let totalPrice = 0;
objects.forEach(object=>{
    totalPrice+=object.price;
})
//console.log("Using for-Each Method")
console.log(totalPrice);
//USING REDUCE METHOD
let prices=0;
const totalprice=objects.reduce((prices,item)=>{
    return prices+=item.price;
},0)
console.log(totalprice);