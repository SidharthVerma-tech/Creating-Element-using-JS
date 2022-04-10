function one(two){
    two();
    console.log("Function one is caaled , now call function 2");
}
function two(){
    console.log("Function 2 is called ");
}
one(two);
