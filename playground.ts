interface Person {
  name: string;
  age: number;
}

// type Person = {
//   name: string;
//   age: number;
// };

export default function play() {
  const name: string = "MMM";
  const age: number = 23;

  const person = {
    name: "name",
    age: 23,
  };

  function logPersonInfo(personName: string, personAge: number) {
    const info = personAge + personName;
    console.log(info);
    return info;
  }

  //   function logPersonInfo2(person: { name: string; age: number }) {
  function logPersonInfo2(person: Person) {
    const info = person.name + person.age;
    console.log(info);
    return info;
  }

  logPersonInfo(name, age);
  logPersonInfo2(person);
}
