type Admin = { role: "admin"; permissions: string[] };
type Customer = { role: "customer"; purchaseHistory: string[] };

type Person = {
  name: string;
};

type SystemUser = Person & (Admin | Customer);

const user1: SystemUser = {
  name: "Gunal",
  role: "admin",
  permissions: ["read", "write"]
};

console.log(user1);