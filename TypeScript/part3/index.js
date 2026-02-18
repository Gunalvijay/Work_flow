var Dog = /** @class */ (function () {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
    }
    return Dog;
}());
var dog = new Dog("Jacky", 5);
console.log(dog.name);
