import React from "react";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
         <Route exact path="/" component={Home}/>
         <Route exact path="/portfolio" component={Portfolio}/>
         <Route exact path="/Contact" component={Contact}/>
    </Router>
     
  );
} 

export default App;
