let student = {
    name:"satya",
    2:20,
    marks:87.4,
    city:"giridih",
    colors:["red","pink"]
};
console.log(student["name"]);           //satya
console.log(student.name);              //satya

let res="name";
console.log(student[res]);          //satya
console.log(student["2"]);          //20
console.log(student[2]);            //20

student.name="nikita";
console.log(student["name"]);       //nikita

student.gender="female";
console.log(student["gender"]);         //female

delete student.city;
console.log(student["city"]);
console.log(student);


//@@@@@@@@@@@@@@@@@@@@@@@@@@@  Objects of Objects  @@@@@@@@@@@@@@@@@@@@@@@@@@

const classInfo = {
    aman:{
        grade:"A+",
        city:"Delhi"
    },
    shradha:{
        grade:"A",
        city:"Pune",
    },
    karan:{
        grade:"O",
        city:"Mumbai"
    }
};
console.log(classInfo);
console.log(classInfo["aman"]);
console.log(classInfo["aman"]["city"]);
classInfo.aman.city="giridih";
console.log(classInfo["aman"]["city"]);
delete classInfo.aman.city;
console.log(classInfo);


//##########################  Array of objects  ###################

const info=[
    {
        name:"satya",
        grade:"A+",
        city:"giridih",
    },
    {
        name:"nikita",
        grade:"A+",
        city:"patari",
    },
    {
        name:"nandu",
        grade:"A+",
    }
]
console.log(info);
console.log(info[0]);
// console.log(info["name"]);               //error

info[0].name="ankita";
console.log(info[0]);