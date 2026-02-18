//Mapped type in TS

type User = {
  name: string;
  age: number;
};

type UserFlags = {
  [K in keyof User]: boolean;
};

//to test

const flags: UserFlags = {
  name: true,
  age: false
};

console.log(flags);
