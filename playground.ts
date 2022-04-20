// // interface Person {
// //   name: string;
// //   age: number;
// // }
// //interface and type are similar.
// //interface is recomended

// // type Person = {
// //   name: string;
// //   age: number;
// // };
// ////////////
// // interface PersonLoggerFn {
// //   (name: string, age: number): string;
// // }
// //////

// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// //////
// type PersonLoggerFn = (name: string, age: number) => string;
// ////////
// export default function play() {
//   const name: string = "MMM";
//   const age: number = 23;

//   const person = {
//     name: "name",
//     age: 23,
//   };
//   //////////
//   //   function logPersonInfo(personName: string, personAge: number) {
//   //     const info = personAge + personName;
//   //     console.log(info);
//   //     return info;
//   //   }
//   ///////////

//   const logPersonInfo: PersonLoggerFn = (
//     personName: string,
//     personAge: number
//   ): string => {
//     const info = personAge + personName;
//     console.log(info);
//     return info;
//   };

//   /////////
//   //   function logPersonInfo2(person: { name: string; age: number }) {
//   function logPersonInfo2(person: Person) {
//     const info = person.name + person.age;
//     console.log(info);
//     return info;
//   }

//   logPersonInfo(name, age);
//   logPersonInfo2(person);
//   logPersonInfo2(new Person("bbb", 54));
// }

///////////////

// export default function play() {
//   //   const name: string[] = ["lol", "1"];
//   //   const numbers: Array<number> = [1, 2, 3, 4];

//   //Narrowing////
//   const random = Math.random() > 0.5 ? "hello" : [1, 2];
//   ////when doing work on the var whose type is not know then,use conditional
//   if (typeof random === "string") {
//     const upper = random.toUpperCase();
//   } else {
//     console.log(random);
//   }
// }

////

/////  extends
interface Person {
  name: string;
  age: number;
}

interface BusinessPerson extends Person {
  salary: number;
}
interface AcademicPerson extends Person {
  publications: string[];
}

type Car = {
  name: string;
};

type RaceCar = {
  speed: number;
} & Car & { mileage: number };

export default function play() {
  //   const person: AcademicPerson = {
  //     name: "LOL",
  //     age: 32,
  //     publications: ["12"],
  //   };
  //   const person2: BusinessPerson = {
  //     name: "LOL",
  //     age: 32,
  //     salary: 23,
  //   };

  //   function logPerson(person: Person) {}
  //   logPerson(person2);

  const car: Car = {
    name: "asdf",
  };
}
