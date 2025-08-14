//__________________________  forEach  _________________________________

let arr = [1,2,3,4,5];

arr.forEach((el)=>{
    console.log(el);
});

let arr1=[
    {
        name:"satya",
        marks:95,
    },
    {
        name:"nikita",
        marks:97,
    },
]
arr1.forEach((el)=>{
    console.log(el);
});

for(let arrs of arr1){
    console.log(arrs);
}

//_____________________________  Map  _________________________

let num = [1,2,3,4];
let double = num.map((el)=>{
    return el*2;
});
let square = num.map((el)=>{
    return el*el;
});
console.log(double);
console.log(square);

let students=[
    {
        name:"satya",
        marks:95,
    },
    {
        name:"nikita",
        marks:99,
    },
    {
        name:"nandu",
        marks:88,
    }
]
let gpa = students.map((el)=>{
    return el.marks/10;
});
console.log(gpa);

//_________________________________________  Filter  _________________

let nums = [2,4,1,5,6,2,7,8,9];
let even = nums.filter((el)=>(el%2 == 0));
console.log(even);

//__________________________________________  every  ___________________

let arr3=[1,2,4,6];
let eve=arr3.every((el)=>el%2==0);
console.log(eve);

let arr4=[1,3,5,7];
let odd=arr4.every((el)=>el%2!=0);
console.log(odd);

//__________________________________  Some _______________________________

let arr5=[1,2,3,4];
let res=arr5.some((el)=>
    el%2==0
);
console.log(res);

let arr6=[2,4,6,5];
let resu=arr6.some((el)=>el%2==0);
console.log(resu);

let arr7=[1,3,5];
let resu2=arr7.some((el)=>el%2==0);
console.log(resu2);

//___________________________________  Reduce  ______________________

let number=[1,2,3,4];
let val=number.reduce((res,el)=>res+el);
console.log(val);


let max=number.reduce((max,el)=>{
    if(max>el){
        return max;
    }else{
        return el;
    }
});
console.log(max);


function check(n){                  //fibonacci number just for practice
    let a=0;
    let b=1;
    for(let i=0; i<n; i++){
        console.log(a);
        let res=a+b;
        a=b;
        b=res;
    }
}
check(5);

function sum(a=2,b){                    //default parameter
    return a+b;
}
let result=sum(3,4);
console.log(result);


//++++++++++++++++++++++++++++  Spread  ++++++++++++++++++++++++++++
let num3=[1,2,3,4];
console.log(Math.min(...num3));
console.log(...num3);
console.log(num3);

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  Spread with array literals  &&&&&&&&&&&

let number4=[2,3,4,5,6];
let newArr=[...number4];
console.log(...newArr);

newArr.push(7);
console.log(newArr);
console.log(number4);

let str=[..."hello"];
console.log(str);

let even1=[2,4,6,8,4];
let odd1=[1,3,5,7,9];
let numb=[...even1, ...odd1];
console.log(numb);
console.log(...numb);

//@@@@@@@@@@@@@@@@@@@@@@@  Spread with object literals  @@@@@@@@@@@@@@@@@@

let data = {
    email:"satyakumarigrd2004@gmail.com",
    name:"satya",
    age:21,
}
// console.log(...data);
let dataCopy = {...data, address:"bergi"};
console.log(dataCopy);                          //change
console.log(data);                              //  not change



let data1=[
    {
        name:"satya",
        age:21,
    },
    {
        name:"nikita",
        age:21,
    },
    {
        name:"nishu",
        age:20,
    },
]
console.log(...data1,{name:"ankit"});           //change
console.log(data1);                         //not change


//__________________________  Spread with String  ___________________
let Arr={..."hello"};
console.log(Arr);


//___________________________________  Rest  ______________________________
            //Rest is just opposite of Spread

function print(...arr){
    arr.forEach((el)=>{
        console.log(`number is ${el}`);
    });
}
print(2,3,4);

function calc(...args){
      return args.reduce((res,el)=>
       res+el
);
}
console.log(calc(2,3,4));


function min(...args){
    return args.reduce((res,el)=>{
        if(res>el){
            return el;
        }else{
            return res;
        }
    });
}
let reso=min(3,2,6,8);
console.log(reso);
