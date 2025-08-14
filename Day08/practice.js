const arrayAverage=(arr)=>{
    let total = 0;
    for(let res of arr){
        total=total+res;
    }
    return total/arr.length;
}
let arr=[2,3,4];
console.log(arrayAverage(arr));

const isEven=(n)=>n%2==0;
console.log(isEven(4));

const object ={
    message: "hello world",

    logMessage(){
        console.log(this.message);
    }
};
setTimeout(()=>{
    object.logMessage();
},1000);


let length = 4;
function callback(){
    console.log(this.length);
}
const object1={
    length:5,
    method(callback){
        callback();
    },
};
object1.method(callback,1,2);
