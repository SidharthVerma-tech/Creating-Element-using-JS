//CLOSURES
function outer(b){
    var a=10;
    function inner(){
        console.log(a,b);
    }
    
    return inner;
}
var close=outer("Hello World");
close();
//CLOSURE SUSED IN MODULE PATTERN IN SOME HIGHER ORDER FUNCTIONS
//DATA HIDING AND ENCAPSULATION