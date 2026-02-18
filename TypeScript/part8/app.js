"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculator_1 = require("./calculator");
var result1 = (0, calculator_1.add)(10, 20);
var result2 = (0, calculator_1.multiply)(5, 3);
console.log(result1);
console.log(result2);
// Try this (to see type checking)
// add("hello", 5);   // ❌ TypeScript error
