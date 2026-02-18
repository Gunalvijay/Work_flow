function greet() {
  console.log("Hi");
  return 1;
}

let x = greet;  
let y = greet(); 

console.log(x);  
console.log(y);  