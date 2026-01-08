import { useMemo, useState } from "react";

import Math from "./Math.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1000);
// jab hum count ko increment karte hai to app component re render hota hai
// aur jab app component re render hota hai to andar ke sare functions firse call hote hai
// isliye calculatePrime function bhi firse call hota hai jo ki ek heavy function hai
// isse bachne ke liye hum calculatePrime function ko useMemo ke andar wrap kar sakte hai
// taaki jab tak number change na ho tab tak ye function firse na chale 

  // function calculatePrime() {

  //   let total = 0;

  //   if (number > 1)
  //     total++;

  //   for (let i = 3; i <= number; i++) {
  //     total++;
  //     for (let j = 2; j < i; j++) {
  //       if (i % j == 0) {
  //         total--;
  //         break;
  //       }
  //     }
  //   }

  //   return total;
  // }

  let prime = useMemo(() => {
    
    let total = 0;

    if (number > 1)
      total++;

    for (let i = 3; i <= number; i++) {
      total++;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          total--;
          break;
        }
      }
    }

    return total;
  },[number]);
  
// ! yaha humne calculatePrime function ko useMemo ke andar wrap kar diya hai
// ! ab jab tak number change na ho tab tak ye function firse nahi chalega agar hum count ko increment karte hai aur agar empty array de dete to ye function sirf pehli baar chalega aur agar kuchdependecy nhi dete to ye function har render pe chalega aur normal behave karega
  //console.log("re render");

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>Your Current Number: {number}</h2>
      <button onClick={() => setNumber(number + 100)}>
        Increment Number
      </button>
      <h2>Prime: {prime}</h2>
      <Math number={number} />
    </>
  );
}
export default App;
