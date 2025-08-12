//&&&&&&&&&&&&&&&&&&&&&&&   trim() methods    $$$$$$$$$$$$$$$$$$$$$
let msg ="  Hello  ";
console.log(msg);              // hello with spaces

let newMsg=msg.trim();              

console.log(newMsg);            //hello without spaces
console.log(msg);               //hello with spaces


//$$$$$$$$$$$$$$$$$$$$$$   toUpperCase(), toLowerCase()   $$$$$$$$$$$$$$$$$$
console.log(msg.toUpperCase());
console.log(msg);
console.log(msg.toLowerCase());


//%%%%%%%%%%%%%%%%%%%%%%  indexOf()  %%%%%%%%%%%%%%%%%%%%%%%%%%%%
let $msg="satya kumari";
let res=$msg.indexOf("kuma");
console.log(res);


//####################3  Method Chaining  #########################
let name="SATYA";
let res1=name.toLowerCase().trim();
console.log(res1);
console.log(name.at(2));


//!!!!!!!!!!!!!!!!!!!  Slice  !!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(name.slice(2));
console.log(name.slice(1,4));
console.log(name.slice(-4));


//-----------------------  replace  -----------------------

let res2=name.replace("SATYA","satya");
console.log(res2);

//_________________________  repeat  ____________________________

res2=name.repeat(3);
console.log(res2);


////////////////////  pratcice Question  ///////////////////
let msg4="help!";
let newMsg4=msg4.toUpperCase();
console.log(newMsg4);

let new_Name="SatyaKumari";
console.log(new_Name.slice(4,9));
console.log(new_Name.indexOf("K"));
console.log(new_Name.replace("Satya","sati"));
console.log(new_Name.slice(5).replace("Kumari","Verma"));
