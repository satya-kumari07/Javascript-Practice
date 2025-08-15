//______________________________  getElemntById _________________

let rse=document.getElementById("descr");       //select element with id

console.log(rse);
rse.innerText="hii satya";

//_________________________  getElementByClassName _________________

let text=document.getElementsByClassName("text");

text[0].innerText="let's break";
for(let i=0; i<text.length; i++){
    console.log(text[i].innerText);
}

//_____________________  getElementByTagName  _______________

let tag=document.getElementsByTagName("P");
tag[1].innerText="hii i am paragraph";
console.log(tag[1].innerText);

//_________________________ Query Selectors _______________________

document.querySelector("p");        //select first p element
document.querySelector("#descr");   //select first element with id=descr
document.querySelector(".text");    //select first element with class=text

document.querySelectorAll("p");     //select all p elements

let div=document.querySelector("div a");
console.log(div);


//++++++++++++++++++++++++++  Properties And Methods  ++++++++++++++++


//innerText  -  shows the visible text contained in a node
//textContent  -  shows all the full text
//innerHTML  -  shows the full markup


//===============================  Manipulating Attributes =================

//obj.getAttribute(attr)            = getter
//obj.setAttribute(attr,val)        = setter

let rseo=document.querySelector("#descr");

let val=rseo.getAttribute("id");        //get id from this method
console.log(val);

rseo.setAttribute("id","head");         //change id using this method

let value=document.querySelector('#head');
console.log(value);

div.setAttribute("href","hnji");           //change href link
console.log(div);

let text1 = document.getElementsByClassName("text")[0];
// let text1 = document.queryScelector(".text");
text1.setAttribute("class","text1");                        //change class name
let className=text1.getAttribute("class");
console.log(className);

rse.style.color="red";
rse.style.backgroundColor="black";


//(((((((((((((((((((((((((((((((    classList     )))))))))))))))))))))))))))))))

//classList.add()           - to add new classes
//classList.remove()        - to remove classes
//classList.contains()      - to check if class exists
//classList.toggle()        - to toggle between add & remove


text1.classList.add("abc");
let getValue=text1.classList;
console.log(getValue);


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  Navigation  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//parentElement
//children
// previousElementSibling / nextElementSibling

let h4=document.querySelector("h4");
console.log(h4.parentElement);

let box = document.querySelector(".box");
console.log(box.children);
let ul=document.querySelector(".box ul");
let li2=ul.children[1];
console.log(li2.previousElementSibling.innerText);
console.log(li2.nextElementSibling.innerText);


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  Adding Elements  ^^^^^^^^^^^^^^^^^^^^^^^^^^

//    document.createElement("p")

//appendChild(element)
//append(element)
//prepend(element)
//insertAdjacent(where, element)

let para=document.createElement("p");
para.innerHTML="<h1>good Morning</h1>";
rse.insertAdjacentElement("afterend",para);