
import React from "react";
import quizicon from "../Assets/quizicon.png";
import questions from "./Question";
import { useState } from "react";
import '../index.css';
import { useNavigate } from "react-router-dom";

export default function QuestionBox() {
    const [state,setState] = useState(0)
    const [data,setData] = useState({
        attempted: 0,
        correct : 0,
        wrong: 0,
        score:0
      })
      const[highlight,setHighlight] = useState("blue")

  
    const Navigate = useNavigate()

    const handleChange = (correct) => {
        if(state===4){
            Navigate("/result",{state:data})            
        }

        else{
            if(correct === true){
                setState(state + 1)
                setData({...data,attempted:data.attempted+1,score:data.score + 1,correct:data.correct + 1})

            }
            else{
                setState(state + 1)
                setData({...data,attempted:data.attempted+1,wrong:data.wrong + 1})
    
            }

        }
      
    }
    
    const handleHighlight = () => {
        setHighlight("red")
    }

    const handleRemoveHighlight = () => {
        setHighlight("blue")
    }

    const [theme, setTheme] = useState("Light");
    
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
    
    
    return(
        <div className="container">
            <div className="main">

                <div className="nav">
                <img className="imgicon" src={quizicon} alt="" />
                <button className="dark" onClick={handleTheme}>{theme}</button>
                </div>

                <h2 className="qn">Questions</h2>
                <p className="qnno">{state + 1} of 5</p>
                <p className="qns" style={{color:highlight}}>{questions[state].text}</p>

<div className="options">
{
                    questions[state].options.map(function(ele,ind){
                        return(
                            <div key={ind}>
                            <button className="option" onClick={() => {handleChange(ele.isCorrect)}}>{ele.text}</button>
                        </div>

                        )
                    })
                }
</div>
               
                <div className="footer">
                    <button className="highlight" onClick={handleHighlight}>Highlight</button>
                    <button className="highlight" onClick={handleRemoveHighlight}>Remove Highlight</button>
                </div>


            </div>


        </div>
    )

  
}
