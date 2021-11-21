<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
||||||| 8187b40
import './App.css';
import "./header"
=======

>>>>>>> upstream/main
import Header from "./Header"
// import Image from "./Image"
import Login from "./Login"


  return (
<<<<<<< HEAD
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Header/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
    {/* <Image /> */}
    </Routes>
||||||| 8187b40
    <div>
     <Header/>
    <Image />
=======
    <div>
    
     <Header/>,
    <Image />,
    
>>>>>>> upstream/main
    </div>
    </Router>
    
  );
}

export default App;
