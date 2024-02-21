import React, { useEffect, useState } from "react";
import "./App.css";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import {Routes,Route,Router} from "react-router-dom"




function App() {

  return (
    <div>
      <QuestionBox/>
      {/* <Router> */}
      <Routes>
        {/* <Route exact path="/" element={<QuestionBox/>}/> */}
        <Route exact path="/result" element={<Result/>}></Route>
      </Routes>
      {/* </Router> */}

          
    </div>
  );
}

export default App;