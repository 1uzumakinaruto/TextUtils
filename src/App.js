import "./App.css";
import Navbar from "./cpmponents/Navbar";
import TextForm from "./cpmponents/TextForm";
import About from "./cpmponents/About";
import React, { useState } from "react";
import Alert from "./cpmponents/Alert";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);

  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
    <Router>
      <Navbar title="TextUtils" About="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Navbar/> */}
      {/* <Navbar title= "TextUtils"/> */}
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
          <About/>
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter The Text To Analyze Below" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
          </Route>
      </Switch>
        
        
      </div>
    </Router>
    </>
  );
}

export default App;
