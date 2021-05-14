import React from "react";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import { HashRouter as Router, Route } from "react-router-dom";
import './index.css';


function App() {
  return (
    <Router>
         <Route exact path="/" component={Home}/>
         <Route exact path="/portfolio" component={Portfolio}/>
         <Route exact path="/Contact" component={Contact}/>
         <Route exact path="/Skills" component={Skills}/>
    </Router>
     
  );
} 

export default App;
