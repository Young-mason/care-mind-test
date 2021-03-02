import "./App.css";
import Navbar from "./componenets/Navbar";
import Main from "./pages/Main";
import { useState } from "react";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="App">
      <Navbar showNav={showNav} setShowNav={setShowNav}></Navbar>

      <Main showNav={showNav}></Main>
    </div>
  );
}

export default App;
