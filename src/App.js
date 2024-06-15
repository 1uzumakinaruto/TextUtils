import "./App.css";
import Navbar from "./cpmponents/Navbar";
import TextForm from "./cpmponents/TextForm";
// import About from "./cpmponents/About";
import React, { useState } from 'react';



function App() {
  
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const toggleMode =()=>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title= "TextUtils" About = "About Us" mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar/> */}
    {/* <Navbar title= "TextUtils"/> */}
    <div className="container my-3">    
    <TextForm heading = "Enter The Text To Analyze Below" mode={mode} toggleMode={toggleMode}/>
    {/* <About/> */}
    </div>
    </>
  );
}


export default App;
