let body=document.querySelector("body");
let div=document.createElement("div");
body.appendChild(div);

let para1=document.createElement("p");
para1.innerHTML="<h2>Hey i'm red</h2>";
para1.style.color="red";
div.appendChild(para1);

let h3=document.createElement("h3");
h3.innerText="I'm a blue h3";
h3.style.color="blue";
div.appendChild(h3);

let div1=document.createElement("div");

let p2=document.createElement("p");
p2.innerHTML="<h1>I'm in a div</h1>";

let p3=document.createElement("p");
p3.innerText="ME TOO!";

div1.append(p2);
div1.append(p3);
div1.classList.add("divo");

body.appendChild(div1);

let input=document.createElement("input");
let btn=document.createElement("button");

btn.innerText="click me";
body.append(input);
body.append(btn);

input.placeholder="name";
input.placeholder="username";
console.log(btn.getAttribute('id'));
btn.setAttribute('id',"btn");
console.log(btn.getAttribute('id'));
btn.setAttribute("id","button");
console.log(btn.getAttribute('id'));

