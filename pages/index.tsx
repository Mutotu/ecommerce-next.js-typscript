import { useEffect } from "react";
import play from "../playground";

//differecen between ts and tsx extensions=>
// .ts is for pure TypeScrictpt files
//.tsx for files containing JSX

export default function Home() {
  // const message: string = "Hello";
  // let a: AddEventListenerOptions;
  // let b: NodeJS.Process;
  // let person: Person = {
  //   name: "LOl",
  // };

  useEffect(() => {
    play();
  }, []);

  return <div>LOL </div>;
}
