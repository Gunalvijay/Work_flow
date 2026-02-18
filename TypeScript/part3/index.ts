interface User {
    name : string,
    age : number
}

class Dog implements User {
    name : string;
    age: number;
    
    constructor(name : string, age : number){
        this.name = name;
        this.age = age;
    }
}

const dog : Dog = new Dog("Jacky", 5);
console.log(dog.name);