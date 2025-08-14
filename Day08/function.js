//_______________________________  this keyword  _____________________________

const student={
    name:"satya",
    age:23,
    eng:56,
    math:45,
    average(){
        let avg=(this.age+this.eng+this.math)/3;
        console.log(avg);
    }
}
student.average();

//______________________________  try & catch  ________________________

// try{
//     console.log(a);

// }catch(err){
//     console.log(err);
// }

//______________________________  Arrow functions  _______________________

const sum =(a,b)=>{
    console.log(a+b);
}
sum(2,3);

const func=(a,b)=>(a*b);        //implicit return
console.log(func(2,3));

