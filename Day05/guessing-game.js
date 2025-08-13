let max=prompt("enter a max number");

let random=Math.floor(Math.random()*max)+1;
console.log(random);
let guess=prompt("gess a number");
while(true){
    if(guess == "quit"){
        console.log("you quit");
        break;4
    }
    
    if(guess == random){
        console.log("congrats",random);
        break;
    }else{
        if(guess>random){
             guess=prompt("your guess was to large, please try again");
        }else{
             guess=prompt("your guess was to small, please try again");
        }
    }
}