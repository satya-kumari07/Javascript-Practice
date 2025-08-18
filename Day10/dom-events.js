let btn=document.querySelector("button");

function print(){
    console.log("button was clicked");
}
btn.onclick=print;

//______________________  Event Listener  ___________________________

btn.addEventListener("click",function(){
    console.log("button clicked");
});

function sayName(){
    console.log("i am satya");
}
btn.addEventListener("click",sayName);

let btn=document.querySelector(".btn");
let box=document.querySelector(".box");
let h1=document.querySelector(".color");

btn.addEventListener("click",function(){
    box.style.backgroundColor=generate();
    let randomColor=generate();
    h1.innerText=randomColor;

})

function generate(){
    let green=Math.floor(Math.random()*255)+1;
    let red=Math.floor(Math.random()*255)+1;
    let blue=Math.floor(Math.random()*255)+1;

    let color=(`rgb(${red},${green},${blue})`);
    return color;
}


//"""""""""""""""""""""""""""""" this with eventLisener  """"""""""""""""""""""""""

let btn1=document.querySelector("button");
let p=document.querySelector("p");
let head=document.querySelector("h1");
let h2=document.querySelector("h2");

// btn1.addEventListener("click",function(){
//     this.style.backgroundColor="blue";
// });

function changeColor(){
    this.style.backgroundColor="red";
}

btn1.addEventListener("click",changeColor);

p.addEventListener("click",changeColor);

head.addEventListener("click",changeColor);

h2.addEventListener("click",changeColor);


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  keyboard events  %%%%%%%%%%%%%%%%%%%%%%%%%%%

let inp=document.querySelector("input");
inp.addEventListener("keydown",function(e){
    console.log(e.key);
    console.log(e.code);
    console.log("click was pressed");
});
inp.addEventListener("keyup",function(e){
       console.log(e.key);
    console.log(e.code);
    console.log("click was released");
});

let input=document.querySelector(".inp");
input.addEventListener("keypress", function(e){
    console.log(e.key);
    console.log(e.code);
    if(e.code == "KeyU"){
        console.log("character moves up",e.key);
    }else if(e.code == "KeyD"){
        console.log("character moves down");
    }else if(e.code == "KeyL"){
        console.log("character moves left");
    }else if(e.code == "KeyR"){
        console.log("character moves right");
    }
});

//_________________________________  Form Event  ____________________

let form =document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();     //if you dont want to go that page
    alert("submitted successfully");
});

let form1 =document.querySelector("form");
form1.addEventListener("submit",function(event){            //track what we give input and password
    event.preventDefault();  

    // console.dir(form1);
    // console.dir(inp);

    let inp=document.querySelector(".inpu");
    let pass=document.querySelector(".pass");

    console.log(form1.elements[0].value);        //  console.log(inp.value);
    console.log(form1.elements[1].value);        //     console.log(pass.value);
});


let form2 =document.querySelector("form");
form2.addEventListener("submit",function(event){
    event.preventDefault();
});

// let inp=document.querySelector(".inpu");            //after writing the text and if we click outside then it print the value
// inp.addEventListener("change",function(){

//     console.log("input changed");
//     console.log("final value=", this.value);
// });

let inpu=document.querySelector(".inpu");            //after writing the text and if we click outside then it print the value
let para=document.querySelector(".para");
console.dir(para);
inpu.addEventListener("input",function(){
    para.innerText=this.value;
    console.log("input changed");
    console.log("final value=", this.value);
});


//====================================  Event-bubbling ==========================

let div=document.querySelector(".div");
let ul = document.querySelector(".ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click",function(e){
    e.stopPropagation();
    console.log("div");
});
ul.addEventListener("click",function(e){
    e.stopPropagation();
    console.log("ul");
});
for(li of lis){
    li.addEventListener("click",function(e){
        e.stopPropagation();
    console.log("li was");
});
}