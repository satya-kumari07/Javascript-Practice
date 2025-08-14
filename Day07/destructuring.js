let names=["tony", "bruce","steeve","peter"];
let [tony, bruce, ...others]=names;
console.log(tony,bruce, ...others);

let obj={
    name:"satya",
    class:"btech",
    age:21,
    subjects:["hindi", "english","math","science"],
};
const {name:user, class:std, location="bergi"}=obj;
console.log(user,std, location);