
import React from "react";
import { useState,useRef } from "react";
function Demo() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Search..." />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
    
  
}
export default Demo;