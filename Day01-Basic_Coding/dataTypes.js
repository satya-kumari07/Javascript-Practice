//+++++++++++++++++++++  PRIMITIVE DATATYPES  ++++++++++++++++++
// 1. Boolean
// 2. String
// 3. Number
// 4. Null
// 5. Symbol
// 6. Bigint
// 7. Undefined


let a=4;
let b=3.14;
let c="satya";
let d=true;
let e='r';
let x;
let y=null;
let z=BigInt("123");
// console.log(a, typeof(a));              //number
// console.log(b,typeof(b));              //number
// console.log(c,typeof(c));              //string
// console.log(d,typeof(d));              //boolean
// console.log(e,typeof(e));              //string
// console.log(x,typeof(x));               //undefined
// console.log(y,typeof(y));               //object
// console.log(z,typeof(z));               //bigint


//++++++++++++++++++++++  NON PRIMITIVE DATAYPES+++++++++++++++

// Object
//Array
//Function



//*****************************Dataypes Conversion*****************/


let score="33";
// console.log(typeof score);                //string

let valueInNumber=Number(score);
// console.log(typeof valueInNumber);          //number


let word=true;
// console.log(typeof word);                   //string

let num=Number(word);
console.log(num);                             //NaN
console.log(typeof num);                     //number


