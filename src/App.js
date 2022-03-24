import "./App.css";
import Header from "./components/Header/Header";
import React, { useEffect, useState } from "react";
import Guns from "./components/Guns/Guns";

function App() {
  const [guns, setGuns] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  const [count , setCount] = useState(0);
  const addToCart = () =>{
    setCount(count + 1)
  }
  return (
    <div className="App">
      <Header count={count}></Header>
      <Guns guns={guns} addToCart={addToCart}></Guns>
    </div>
  );
}

export default App;
