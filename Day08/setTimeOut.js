//______________________________  Set TimeOut _______________________
console.log("hello there!");

setTimeout(()=>{
    console.log("apna college");
},4000);
console.log("i am tired");


//_________________________________  Set Interval  ______________________

let id11=setInterval(()=>{
    console.log("hii, i am back");
},2000);


clearInterval(id);              //to stop execution


//________________________ this with arrow function ___________________

const student={
    name:"satya",
    marks:98,
    prop : this ,        //global scope
    getName(){
        return this.name;           //       ->student 
    },
    getMarks: ()=>{
        return this.marks;      //parent scope  -> window
    },
    getInfo:function(){
        setTimeout(()=>{
            console.log(this);          //student
        },2000);
    },
    getMarks:function(){
        setTimeout(function(){
            console.log(this);      //window
        },2000);
    }
};
console.log(student.getName());
// console.log(student.getMarks());        
console.log(student["name"]);

//+++++++++++++++++++++++  Practice  +++++++++++++++++++++++++++++

const square=(n)=>{
    return n*n;
}
console.log(square(2));

const square1=(n)=>(n*n);
console.log(square1(2));

let id=setInterval(()=>{
    console.log("hello world");
},2000);

setTimeout(()=>{
    clearInterval(id);
},10000);