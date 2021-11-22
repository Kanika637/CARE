import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import './App.css';
import Header from "./Header"
import Image from "./Image"
import Login from "./Login"

function App(){
return (
<Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Header/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          
    
    </Routes>
    {/* <Image /> */}
    
    </div>
    </Router>
    );}
  export default App;
