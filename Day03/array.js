let marks = [99,85, 93, 76, 62];
let names = ["adam", "bob", "catyln"];
let info = ["aman", 25, 6.1];            //mixed array

let newArr = [];          //empty array


console.log(info[0].length);                    //4
console.log(info);                             // ['aman', 25, 6.1]


//&&&&&&&&&&&   NOTE :-
//               string are immutable
//               arrays are mutable


let fruits = ["apple","grapes","guava"];
console.log(fruits);            //['apple', 'grapes','guava']
fruits[0]="banana";
console.log(fruits);            //['banana','grapes', 'guava']

let name="satya";
let res=name.replace("satya","nikita");
console.log(res);               // nikita
console.log(name);              // satya



//@@@@@@@@@@@@@@@@@@@@@@  ARRAY Methods  @@@@@@@@@@@@@@@@@@@@@@@@@@@

//              *************  push  ********************

let cars = ["audi", "suzuki", "maruti","BMW"];
console.log(cars[0]);                       //audi
cars.push("ferrari");
console.log(cars);                          //['audi', 'suzuki', 'maruti', 'BMW', 'ferrari']
console.log(cars[cars.length-1]);           //ferrari


//               ***********  pop  ***********

cars.pop();
console.log(cars);                          //['audi', 'suzuki', 'maruti', 'BMW']


//              ***************  shift  **************

cars.shift();
console.log(cars);                          //[ 'suzuki', 'maruti', 'BMW' ]


//              **************  unshift  ***************

cars.unshift("thar");
console.log(cars);                          //[ 'thar', 'suzuki', 'maruti', 'BMW' ]


//          ***********  indexOf  ******************

let res3=cars.indexOf("thar");
console.log(res3);                          //0

console.log(cars.includes("thar"));         //true


//         ****************  concat  *********************

let result=info.concat(cars);
console.log(result);                       //['aman', 25, 6.1, 'thar', 'suzuki', 'maruti', 'BMW']


//           ******************  reverse  ****************

let result1=cars.reverse();
console.log(result1);                    //[ 'BMW', 'maruti', 'suzuki', 'thar' ]


//             ******************  slice  *****************

let colors = ["red", "yellow", "blue", "orange"];
console.log(colors.slice());                    //[ 'yellow', 'blue', 'orange' ]
console.log(colors.slice(1,4));                //[ 'yellow', 'blue', 'orange' ]
console.log(colors.slice(2));                  //['blue', 'orange']
console.log(colors.slice(-2));                  //[ 'blue', 'orange' ]


//              **********************  splice  *****************

// console.log(colors.splice(2));
console.log(colors);                                    //[ 'red', 'yellow', 'blue', 'orange' ]
console.log(colors.splice(0,1,"voilet"));               //[ 'red' ]
console.log(colors);                                    //[ 'voilet', 'yellow', 'blue', 'orange' ]

console.log(colors.splice(0,1,"voilet","green"));      //[ 'voilet' ]
console.log(colors);                                //[ 'voilet', 'green', 'yellow', 'blue', 'orange' ]

console.log(colors.sort());                         //[ 'blue', 'green', 'orange', 'voilet', 'yellow' ]



//@@@@@@@@@@@@@@@@@@   Nested Array  @@@@@@@@@@@@@@@@@@@@@@@@@@

let nums = [[1,2],[3,4],[5,6]];
console.log(nums);                          //[[1,2],[3,4],[5,6]]
console.log(nums.length);                   // 3
console.log(nums[0].length);                //2
console.log(nums[2][0]);                    //5


//              ########### PRACTICE QUESTION   #################


let month = ['january', 'july', 'march','august'];
month.shift();
month.shift();
console.log(month);                         //[ 'march', 'august' ]
month.unshift("june");
month.unshift("july");
console.log(month);                        //[ 'july', 'june', 'march', 'august' ]

let month1=['jaunary','july','march','august'];
month1.splice(0,1);
console.log(month1);                        //[ 'july', 'march', 'august' ]
month1.splice(1,0,"june");
console.log(month1);                        //[ 'july', 'june', 'march', 'august' ]

let lang = ['c', 'c++', 'javascript','python','java','c#','sql'];
lang.reverse();
console.log(lang.indexOf('javascript'));