import React from "react";
import "./App.css";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import {Routes,Route} from "react-router-dom"




function App() {

  return (
    <div>
      {/* using routes,route to navigate from one component to another */}
     
      <Routes>
        <Route exact path="/" element={<QuestionBox/>}/>
        <Route exact path="/result" element={<Result/>}></Route>
        <Route path="/*" element={<h1>Error 404 page</h1>}/>
      </Routes>
      

          
    </div>
  );
}

export default App;