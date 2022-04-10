const objects = [
    {name: "Rice", price: 5},
    {name: "Laptop", price: 200},
    {name: "Pen", price: 20},
]
let totalPrice = 0;
objects.forEach(object=>{
    totalPrice+=object.price;
})
console.log(totalPrice);