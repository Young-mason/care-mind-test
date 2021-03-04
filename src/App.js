import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";

import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./state/store";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <Provider store={store} className="App">
      <Navbar showNav={showNav} setShowNav={setShowNav}></Navbar>
      <Main showNav={showNav}></Main>
    </Provider>
  );
}

export default App;
