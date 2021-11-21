import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
<<<<<<< HEAD
import './App.css';
import "./header.css"
||||||| 4d4421d
||||||| 8187b40
import './App.css';
import "./header"
=======

>>>>>>> upstream/main
=======

>>>>>>> upstream/main
import Header from "./Header"
import Image from "./Image"
import Login from "./Login"
<<<<<<< HEAD
function App(){
return (
||||||| 4d4421d


  return (
<<<<<<< HEAD
=======
function App(){

  return (
>>>>>>> upstream/main
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Header/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
    
    </Routes>
    
<<<<<<< HEAD
||||||| 4d4421d
     <Header/>,
=======
    
     
>>>>>>> upstream/main
    <Image />,
    
    </div>
    </Router>
    
<<<<<<< HEAD
   
  );
}
||||||| 4d4421d
  );
}
=======
  )};

>>>>>>> upstream/main

export default App;
