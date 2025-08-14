let arr=[1,2,3,4];

let square=arr.map((el)=>{
    return el*el
});
console.log(square);
let sum=square.reduce((res,el)=>res+el,0);

let avg=sum/arr.length;
console.log(avg);


let arr2=arr.map((el)=>{
    return el+5
});
console.log(arr2);


let newArr=["satya", "nikita", "nandu"];
let upr=newArr.map((el)=>el.toUpperCase());
console.log(upr);
console.log(...newArr);


const doubleAnd=(arr,...args)=>[
    ...arr,
    ...args.map((el)=>el*2),
]
console.log(doubleAnd([2,3,4],2,4));

const mergeObjects=(obj1,obj2)=>({...obj1, ...obj2});
console.log(mergeObjects({name:"satya",age:21},{city:"nikita",location:21,},
))

function add(arr,...args){
    return [...arr,...args.map((el)=>el*2)];
}
console.log(add([2,3,4],4,5));


