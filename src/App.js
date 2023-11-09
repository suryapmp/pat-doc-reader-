import React from "react";
import "./App.css";
import Analysis from "./Analysis";
import Mannual from "./Mannual";
import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from 'react-router-dom';

function App() {
   return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Analysis />}/>
        <Route exact path="/mannual" element={<Mannual />}/>
      </Routes>
      </BrowserRouter>
    </div>
 );
}
export default App;
