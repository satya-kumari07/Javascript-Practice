function hello(){                   //function declaration
    console.log("hello");
}
hello();                            //function calling

function print1to5(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}
print1to5();

function isAdult(){
    let age=18;
    if(age<18){
        console.log(child);
    }else{
        console.log("not adult");
    }
}
isAdult();

function dice(){
    let num=Math.floor(Math.random()*6)+1;
    console.log(num);
}
dice();

function name(name,num){                    //function with argument
    console.log(name,num);
}
name("satya",6);

function average(a,b,c){
    let res=(a+b+c)/3
    console.log(res);
}
average(2,4,6);

function sum(a,b){                      //function with return keyword
    return a+b;
}
let sum1=sum(3,4);
console.log(sum1);

function isAdult(age){
    if(age>18){
        return "adult";
    }else{
        return "not adult";
    }
}
console.log(isAdult(32));

function sumn(n){
    let sum=0;
    for(let i=1; i<=n; i++){
      sum=sum+i;
    }
    return sum;
}
// sumn(4);
console.log(sumn(4));

let arr=["satya","nikita","nandu","mnu"];
function concat(arr){
    let res="";
    for(let i=0; i<arr.length; i++){
        res=res+arr[i];
    }
    return res;
}
console.log(concat(arr));

                        //lexical scope

function outer(){
    let x=5;
    let y=5;
    function inner(){
        let z=2;
        console.log(x);
    }
    
    // console.log(z);         //error

    inner();
}
outer();

let greet="hello";              //global scope
function changeGreet(){
    let greet="namaste";            //function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet);             //lexical scope
    }
    innerGreet();
}
console.log(greet);
changeGreet();

const sum2=function(a,b){
    return a+b;
}
console.log(sum2(2,3));

const sum3=function(){
   console.log("hello");
}
sum3();

//Methods - Actions that can be performed on an object.

const calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
}
console.log(calculator.add(2,3));
console.log(typeof calculator);

function oddEvent(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }else if(request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    }else{
        console.log("wrong request");
    }
}
let check = "odd";
let req=oddEvent(check);
req(5);