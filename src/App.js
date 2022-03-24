import "./App.css";
import Header from "./components/Header/Header";
import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";

function App() {
  const [guns, setGuns] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div className="App">
      <Header></Header>
      {
        guns.map(gun => <Card key={gun.id} gun={gun}></Card>)
      }
    </div>
  );
}

export default App;
