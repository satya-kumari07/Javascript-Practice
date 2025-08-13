let num=-234.7;
let num2=234.7;
let num3=-234.2;
let num4=234.2;

console.log(Math.abs(num));                 //abs     234
console.log(Math.PI);                       //PI       3.141592653589793
console.log(Math.pow(2,3));                 //pow       8

console.log(Math.floor(num));               //floor -235
console.log(Math.floor(num2));              //234
console.log(Math.floor(num3));              //-235
console.log(Math.floor(num4));              //234

console.log(Math.ceil(num));                //ceil   -234
console.log(Math.ceil(num2));               //235
console.log(Math.ceil(num3));               //-234
console.log(Math.ceil(num4));               //235       

console.log(Math.floor(Math.random()*10))+1;            //random
console.log(Math.floor(Math.random()*5))+21;            //  21 to 25

console.log(Math.floor(23.9));      //23
console.log(Math.floor(23.1));      //23
console.log(Math.ceil(34.9));       //35
console.log(Math.ceil(23.1));       //24

console.log(Math.floor(-23.9));      //  -24
console.log(Math.floor(-23.1));      //  -24
console.log(Math.ceil(-34.9));       //   -34
console.log(Math.ceil(-23.1));       //   -23