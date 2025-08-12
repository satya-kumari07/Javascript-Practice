for(let i=0; i<=5; i++){
    // console.log(i);
}

for (let i=0; i<i%2;i++){
    // console.log(i);
}

let n=5;
for(let i=1; i<=10;i++){
    // console.log(`${n} * ${i}=${i*n}`);
}

for(let i=5; i<=50; i=i+5){
    // console.log(i);
}

for(let i =1; i<=3; i++){
    for(let j=1; j<=3; j++){
        // console.log(j);
    }
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@  While loop  @@@@@@@@@@@@@@@@@@@@

// let i=1;
// while(i<=5){
//     // console.log(i);
//     i++;
// }

let i=1;
while(i<=20){
    console.log(i);
    i++;
}

let num=1;
while(num<20){
    if(num%2==0){
        console.log(num);
    }
    num++;
}

// let movie = "Sanam Teri Kasam";
// let guess=prompt("enter movie name");
// while((guess!=movie)){
//     if(guess=="quit"){
//         console.log("you quit this game");
//         break;
//     }
//     console.log("wrong");
//     guess=prompt("enter movie name");
// }
// if(guess === movie){
//     console.log("congrats");
// }

//#####################  break  ###############################

let num1=1;
while(num1<=10){
    if(num1==5){
        break;
    }
    console.log(num1);
    num1++;
}


//!!!!!!!!!!!!!!!!!!!!!!!  Loops with arrays  !!!!!!!!!!!!!!!!!!!!!!!

let fruits = ["mango","apple","banana","litchi"];
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

let heroes = [["ironman","spiderman","thor"],["superman","wonder woman", "flash"]];

for(let i=0; i<heroes.length; i++){
    for(let j=0; j<heroes[i].length; j++){
         console.log(heroes[i][j]);
    }
}


//^^^^^^^^^^^^^^^^^^^^^^^^^^^  For of loop   ^^^^^^^^^^^^^^^^^^^^^^^^^

let fruits1 = ["mango","apple","banana","litchi"]; 
for(fruit of fruits1){
    console.log(fruit);
}

for(char of "apnaCollege"){
    console.log(char);
}

let heroes1 = [["ironman","spiderman","thor"],["superman","wonder woman", "flash"]];

for(list of heroes1){
    for(hero of list){
        console.log(hero);
    }
}