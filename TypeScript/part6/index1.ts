type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

type UpdatedUser = ConvertNumbers<User>;

type ConvertNumbers<T> = {
  [K in keyof T]: T[K] extends number ? string : T[K];
};

const user1 : UpdatedUser = {
    name: "Gunal",
    age: "22",
    isAdmin: true
}

console.log(user1.name);