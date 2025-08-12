let todo=[];

let req = prompt("enter your request");

while(true){
    if(req == "quit"){
        console.log("you quit this app");
        break;
    }

    if(req == "list"){
        console.log("_____________________________");
        for(list of todo){
            console.log(list);
        }
        console.log("_____________________________");
    }else if(req == "add"){
        let task = prompt("enter your task");
        todo.push(task);
        console.log("task added");
    }else if(req =="delete"){
        let idx = prompt("enter the index number");
        todo.splice(idx,1);
        console.log("task deleted");
    }else{
        console.log("invalid request");
    }
    req = prompt("enter your next request");
}