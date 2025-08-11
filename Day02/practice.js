let name="satya Kumari";
console.log(name);                      //satya kumari
console.log(typeof name);               //string
console.log(name.length);               //12
console.log(name[0]);                   //s
console.log(name[name.length-1]);       //i

let name1="apnaCollege"+123;            
console.log(name1);                     //apnaCollege123

let str="";
let str1=" ";
console.log(str.length);
console.log(str1.length);


let str2="ankit";
if((str2[0]==='a') && (str2.length>3)){
    console.log("good string");
}else{
    console.log("bad string");
}

let num=12;
if((num%3 == 0) && ((num+1 == 15) || (num-1 == 11))){
    console.log("safe");
}else{
    console.log("unsafe");
}


let num1=-10;
if(num1){
    console.log("num si not equal to 0");
}else{
    console.log("num is equal to 0");
}