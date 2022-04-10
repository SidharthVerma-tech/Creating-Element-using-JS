function about(hobby,favSinger){
    console.log(this.firstName, this.age, hobby,favSinger);
}
var obj1= {
    firstName: "Sidharth",
    age: 19,
    
}
const user1={
    firstName: "Sidharth Verma ",
    age: 8,
}
about.call(user1);
about.call(obj1);
//APPLY
about.apply(obj1,["guitar"]);
//BIND RETURNS THE FUNCTION
const func=about.bind(obj1,["guitar","dharia"]);
func();



