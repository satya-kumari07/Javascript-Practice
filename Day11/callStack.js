function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    return one()+two();
}
three();



h1=document.querySelector("h1");

// function changeColor(color, delay){
//     setTimeout(()=>{
//         h1.style.color=color;
//     },delay);
// }
// changeColor("red",1000);
// changeColor("green",2000);
// changeColor("orange",3000);

//}}}}}}}}}}}}}}}}}}}}}} Callback hell  {{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}


// function changeColor(color,delay,nexColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nexColorChange){
//             nexColorChange();
//         }
//     },delay);
// }
// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000);
//     });
// });

// //{{{{{{{{{{{{{{{{{{{{{{{{{{{{{      Promises    }}}}}}}}}}}}}}}}}}}}}}}}}}}}}

// function savetoDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }else{
//         failure();
//     }
// }
// savetoDb(
//     "apna College",
//     ()=>{
//         console.log("data was saved");
//         savetoDb("hii Satya",
//             ()=>{
//             console.log("data2 was saved");
//             },
//             ()=>{
//             console.log("data2 not saved");
//          });
//     },
//     ()=>{
//     console.log("weak connection. try again!")
//     }
// );

// function savetoDb(data){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     return new Promise((resolve, reject)=>{
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             resolve("succes : data was saved");
//         }else{
//             reject("failure : weak conection");
//         }
//     });
// }
// savetoDb("apna Colege")
// .then((res)=>{
//     console.log("data1 was saved");
//     console.log(res);
//     return savetoDb("hello satya");
// })
// .then((res)=>{
//     console.log("data2 was saved");
//      console.log(res);
// })
// .catch((err)=>{
//     console.log("promis was rejected");
//     console.log(err);
// });


// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         h1.style.color=color;
//         resolve("color changed");
//         },delay);
//     })
 
// }
// changeColor("red",1000,)
// .then((res)=>{
//     console.log(res);
//     return changeColor("green",1000);
// })
// .then((res)=>{
//     console.log(res);
//     return changeColor("orange",1000);
// })
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


//""""""""""""""""""""""""""    Async Keyword    """"""""""""""""""""""""""""""""""""""""""""""""

// async function greet() {
//     return "hello world";
// }
// greet()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });



// function getNum(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }
// async function demo(){
//     await getNum();
//     await getNum();
//     getNum();
// }
// demo();



// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         h1.style.color=color;
//         resolve("color changed");
//         },delay);
//     })
 
// }
// async function print(){
//     await changeColor("red",1000);
//      await changeColor("yellow",1000);
//       await changeColor("blue",1000);
//         changeColor("green",1000);
// }
// print();


//((((((((((((((((((((((((((((((((((   Handling rejection   ))))))))))))))))))))))))))))))))))

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             if(num>=4){
//                 h1.style.color=color;
//                 resolve("color changed");
//             }else{
//                 reject("not changed");
//             }
//         },delay);
//     })
 
// }
// async function print(){
//     try{
//         await changeColor("red",1000);
//         await changeColor("yellow",1000);
//         await changeColor("blue",1000);
//         changeColor("green",1000);
//     }catch(err){
//         console.log(err);
//     }
//      let a=10;
//         console.log(a);
// }
// print();


//[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[   APIs  ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]


// let btn=document.querySelector("button");

// btn.addEventListener("click",async function(){
//     let fact=await getFacts();
//     console.log(fact);
//     let res=document.querySelector("#result");
//     res.innerText=fact;
// });

// let url="https://catfact.ninja/fact";

// async function getFacts() {
//     try{
//         let res=await axios.get(url);
//         return res.data.fact;
//     }catch(e){
//         console.log("error",e);
//         return  "no fact found";
//     }
    
// }


let url="https://universities.hipolabs.com/search?name=";
let btn=document.querySelector("#search");

btn.addEventListener("click", async()=>{
    let country=document.querySelector("input").value;
    console.log(country);

    let colleges=await getColleges(country);
    
    show(colleges);
});

function show(colleges){
    let list =document.querySelector(".list");
     let li=document.createElement("li");
    li.innerText="";
    for(let college of colleges){
        console.log(college.name);

        li.innerText=college.name;
        list.appendChild(li);
    }
}
async function getColleges(country){
    try{
        let res=await axios.get(url+country);
        return res.data;
    }catch(err){
        console.log("error : ",err);
        return [];
    }
}