import { add, multiply } from "./calculator";

const result1 = add(10, 20);
const result2 = multiply(5, 3);

console.log(result1);
console.log(result2);

// Try this (to see type checking)
// add("hello", 5);   // ❌ TypeScript error