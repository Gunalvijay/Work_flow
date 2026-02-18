// Step 1: Create a custom ReturnType utility
type MyReturnType<T> = 
  T extends (...args: any[]) => infer R 
    ? R 
    : never;


// Step 2: A sample function
function greet(name: string): string {
  return "Hello " + name;
}


// Step 3: Use typeof to get function type
type GreetReturnType = MyReturnType<typeof greet>;


// Step 4: Test it
const message: GreetReturnType = "Hello Gunal";

console.log(message);