
//----------------------  IF-Statement  ------------------------------
let age=20;
if(age<18){
    console.log("child");
}
if(age>=18){
    console.log("you can vote");
}



let light="green";
if(light==="red"){
    console.log(`stop! light is ${light}`);
}
if(light === "yellow"){
    console.log(`slow down! light is ${light}`);
}
if(light === "green"){
    console.log(`go! light is ${light}`);
}



//++++++++++++++++++++++ else if Statement  ++++++++++++++++++++++++++++

let rating=5;
if(rating===1){
    console.log("poor");
}else if(rating===2){
    console.log("Below Average");
}else if(rating===3){
    console.log("Average");
}else if(rating===4){
    console.log("Good");
}

//+++++++++++++++++++++++++++  else statement  +++++++++++++++++++++++


let rating1=5;
if(rating1===1){
    console.log("poor");
}else if(rating1===2){
    console.log("Below Average");
}else if(rating1===3){
    console.log("Average");
}else if(rating1===4){
    console.log("Good");
}else{
    console.log("excellent");
}


//+++++++++++++++++++++++++++++++++++  NESTED IF-ELSE  ++++++++++++++

let marks = 50;
if(marks>=33){
    if(marks>=80){
        console.log("O Grade");
    }else{
        console.log("A Grade");
    }
}else{
    console.log("better luck for next time");
}