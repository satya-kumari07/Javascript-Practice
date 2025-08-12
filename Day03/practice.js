let num=4;
let arr=[7,9,0,-2,5,6];
console.log(arr.slice(0,num));                      //[7,9,0,-2]
console.log(arr.slice(arr.length-num));             //[0,-2,5,6]

let str =" ";
if(str){
    console.log("string is not empty");
}else{                                          //string is not empty
    console.log("string is empty");
}

let word1 ="SaTYa";
let idx = 3;
if(word1[idx]==word1[idx].toUpperCase()){
    console.log("uppercase");
}else{                                         //uppercase
    console.log("lowecase");
}

let word="satya";
if(word === word.toUpperCase()){
    console.log("uppercase");
}else{                                      //lowercase
    console.log("lowercase");           
}

let str1 = "  satya  ";
console.log(str1);                          //  satya
console.log(str1.trim());                   //satya

let arr2=["satya","nikita","nandu"];
console.log(arr2.includes("nikita"));               //true
console.log(arr2.includes("neha"));                 //false