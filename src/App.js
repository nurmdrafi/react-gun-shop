import "./App.css";
import Header from "./components/Header/Header";
import React, { useEffect, useState } from "react";
import Guns from "./components/Guns/Guns";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function App() {
  const [guns, setGuns] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  const addToCart = (item) => {
    setCount(count + 1);
    // const selectedItems = guns.find(gun => gun.id === id);
    const newCart = [...cart, item];
    setCart(newCart);
  };
  console.log("cart", cart);
  return (
    <div className="App">
      <Header count={count}></Header>
      <button onClick={openModal}>Open Modal</button>
      <Guns guns={guns} addToCart={addToCart}></Guns>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        {
          cart.map(item=> <h1>{item.name}</h1>)
        }
        
      </Modal>
    </div>
  );
}

export default App;
