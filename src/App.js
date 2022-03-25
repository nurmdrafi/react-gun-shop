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
  const [cart, setCart] = useState([]);
  const addToCart = (item) =>{
    setCount(count + 1);
    // const selectedItems = guns.find(gun => gun.id === id);
    const newCart = [...cart, item];
    setCart(newCart);
  }
  console.log('cart', cart);
  return (
    <div className="App">
      <Header count={count}></Header>
      <Guns guns={guns} addToCart={addToCart}></Guns>
    </div>
  );
}

export default App;
