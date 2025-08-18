let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let li=document.querySelectorAll("li");

btn.addEventListener("click",function(){

    let item=document.createElement("li");
    item.innerText=inp.value;

    let button=document.createElement("button");
    button.innerText="Delete";
    button.classList.add("delete");

    item.appendChild(button);
    ul.append(item);
    inp.value="";
});

ul.addEventListener("click",function(e){
   if(e.target.nodeName=="BUTTON"){
    console.log("delete");
    let par=e.target.parentElement;
    par.remove();
   }
});

//   let delBtns=document.querySelectorAll(".delete");

// for(delBtn of delBtns){
//         delBtn.addEventListener("click",function(){
//             console.log("deleted");
//             let par=this.parentElement;
//             par.remove();
//         });
//     }


