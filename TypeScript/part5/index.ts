interface User{
    id: number;
    name: string;
    age: number;
}

type UserKeys = keyof User;

const user1 : UserKeys = "id";

console.log(user1);