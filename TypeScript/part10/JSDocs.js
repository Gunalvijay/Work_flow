/**
 * Adds two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

const a = add(10, 20);      // ✅ OK
const b = add("10", 20);    // ❌ Type error

console.log(a);
console.log(b);