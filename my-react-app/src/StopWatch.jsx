import { useState, useRef } from "react";
function Stopwatch() {
//   const [time, setTime] = useState(0);

//   const intervalRef = useRef(null);//! it does not create again and again on re render it values persists across re renders

//   const start = () => {
//      if (intervalRef.current !== null) return; // already running
//     intervalRef.current = setInterval(() => {
//       setTime(prev => prev + 1);
//     }, 1000);
//   };

//   const stop = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//   };

//   const reset = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//     setTime(0);
//   };

//   return (
//     <div>
//       <p>Time: {time}s</p>
//       <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// const [email,setEmail] = useState("");
    // const [password,setPassword] = useState("");

    const emailRef = useRef(null);
    const passRef = useRef(null);
     
    console.log("render");

    function handleSubmit(e){
      e.preventDefault();
// emailRef.current.value="Himanshu"
emailRef.current.focus();
    
    passRef.current.value="12345"   
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="email" ref={emailRef}></input>
            <input type="password" ref={passRef}></input>
            <button type="submit">Submit</button>
        </form>
        </>
    )

}
export default Stopwatch;