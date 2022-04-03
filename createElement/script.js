const newUl = document.createElement("ul");
const container=document.querySelector(".container");
newUl.textContent="Lists"
const list1=document.createElement("li");
const list2=document.createElement("li");
list1.textContent="list1";
list2.textContent="list2";
newUl.append(list1);
newUl.append(list2);
container.append(newUl);
list1.className="list1";
list2.className="list2";
newUl.className="newUl";
console.log("hello world");