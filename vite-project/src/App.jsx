import { useEffect, useState } from "react";

function App() {
  // let [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount((count)=> count + 1);
  // }

  const [user, setUser] = useState([]);
  const [count, setCount] = useState(0);

 

  // function handle() {
  //   // setUser({...user});
  // //  setUser(user)// react ka state update asynchronous hota hai aur batches me hota hai isliye ye render nahi karega
  //    setUser({ name: "A", age: 20 });// ye  render  karega kyuki object reference same nhi hai
  //   // setUser({ ...user, age: user.age + 1 });// ye render karega kyuki naya object create hoga
  // }

  useEffect(()=>{
     async function fetchData() {
    const res = await fetch("https://api.github.com/users");
    const data = await res.json();
    console.log("hi");
    
   // console.log(data);
    setUser(data);
  }

  fetchData();

  },[count]); //~ jab count change hoga tabhi ye useEffect chalega;

  return (
    <>

    <button onClick={() => setCount(count + 1)}>Count: {count+1}</button>
      

      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // ⭐ key property
          gap: "12px",
          justifyContent: "center",
        }}
      >
        
        {user.map((user) => (
          <div
            key={user.id}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
