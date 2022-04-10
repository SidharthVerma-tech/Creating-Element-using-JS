let stocks = {
    Fruits: ["Strawberries","grapes","bananas","apple"],
    Liquid: ["water","ice"],
    holder: ["Cone","Cup","stick"],
    topping: ["Chocolate","Peanuts"]
}
//console.log(stocks.Fruits[2]);
let order=(Fruit_name,call_production)=>{
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected`)
        call_production();
    },4000);
    
    
}
let production = ()=>{ 
    setTimeout(()=>{
        console.log("Production has started");
        setTimeout(()=>{
            console.log("The food has been chopped")
        },1000);
        setTimeout(()=>{
            console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`);
        },2000)
    },0000)
}
order(3,production);