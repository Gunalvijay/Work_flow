type Constructor = {
  new (...args: any[]): any;
  name: string;
};

function Logger<T extends Constructor>(constructor: T) {
  console.log("Decorator is executed");
  console.log("Constructor received:", constructor.name);

  return class extends constructor {
    createdAt = new Date();
  };
}

@Logger
class Person {
  constructor(public name: string) {
    console.log("Person constructor is executed");
  }

  greet() {
    console.log("Hello, my name is", this.name);
  }
}

const p1 = new Person("Gunal");

console.log("Created At:", (p1 as any).createdAt);
p1.greet();