let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0; i<arr.length; i++){

    // if(arr[i]==2){
    //     continue;
    // }
    // console.log(arr[i]);

     if(arr[i]==num){
        arr.splice(i,1);
     }
     console.log(arr[i]);
}
console.log(arr);



let number=287152;
let copy=number;
let count=0;
while(copy>0){
    copy=Math.floor(copy/10);
    console.log(copy);
    count++;
}
console.log(count);




let num2=287152;
let sum=0;
while(num2>0){
    let res=Math.floor(num2%10);
    sum=res+sum;
    num2=Math.floor(num2/10);
}
console.log(sum);




let n=7;
let fact=1;

// while(n>0){
//     fact=fact*n;
//     n--
// }
// console.log(fact);

for(let i=1; i<=n; i++){
    fact=fact*i;
}
console.log(fact);


let arr2=[234,45,6,-2];
let max=0;
for(let i=0; i<arr2.length; i++){
    if(arr2[i]>max){
        max=arr2[i];
    }
}
console.log(max);