import React from 'react';
import quizicon from "../Assets/quizicon.png";
import { useLocation } from 'react-router-dom';
import {Link} from "react-router-dom";
import "../App.css";
import {useState} from "react"

export default function Result() {

  // with help of useLocation getting the prop which is sent from  QuestionBox.js
  let Location = useLocation()
  const myProp = Location.state 
//console.log(myProp.wrong)


const [theme, setTheme] = useState("Light");
    
// Change the backgroundColor from dark to light and light to dark
const handleTheme = () => {
    if (theme === "Light") {
        setTheme("Dark");
        document.body.style.backgroundColor = "black";
    } 
    else {
        setTheme("Light");
        document.body.style.backgroundColor = "white";
    }
}

  return (
    <div>
<div className="main1">

<div className="nav">
          <img className="imgicon" src={quizicon} alt="" />
          <button className="dark" onClick={handleTheme}>{theme}</button>
          </div>

          <h1 className="center">Final Results</h1>
          <h2 className="center">{myProp.correct} out of 5 are correct - ({(myProp.score/5)*100}%)</h2>

{/* Navigating to result page after clicking the restart button using link */}
          <Link to="/">
          <button className="restart">Restart game</button>
          </Link>

    </div>
    
      
    </div>
  )
}


