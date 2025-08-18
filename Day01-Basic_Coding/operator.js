//**********************ARITHMETIC OPERATORS******************/
var a=7;
let b=4;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log(a++);
console.log(a--);

//***********************ASSIGNMENT OPERATORS*****************/
var c=10;
console.log(a+=5);
console.log(a-=5);
console.log(a*=5);
console.log(a/=5);
console.log(a%=5);
console.log(a**=2);

//**********************COMPARISON OPERATORS*****************/
let d=10;
let e=2;
console.log(d==e);
console.log(d===e);
console.log(d!=e);
console.log(d>e);
console.log(d<e);
console.log(d>=e);
console.log(d<=e);
console.log(d=10?"yes":"no");

//********************Logical Operator**********************/

console.log(d>e && a>b);
console.log(d>e || d==0);
console.log(!(d==11));


// *********************UNARY OPERATORS**********************
let age = 10;
let newAge = ++age;
console.log(newAge);     //11

let age2=10;
var newAge2 = age2++;
console.log(newAge2);    //10
console.log(age2);
console.log("++++++++++++++++++++++++++++");

let age3=10;
age3++;
console.log(age3);              //11

let age4=10;
++age4;
console.log(age4);              //11

let age1=10;
console.log(age1++);        //10

let age5=10;
console.log(++age5);            //11

let num=5;              //num=5
let newNum=num++;       // newNum=5  num=6
newNum=++num;           // newNum=7