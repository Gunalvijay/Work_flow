type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Gunal",
  employeeId: 101
};

console.log(staffMember.name);