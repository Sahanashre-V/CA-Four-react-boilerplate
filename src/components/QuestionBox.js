
import React from "react";
import quizicon from "../Assets/quizicon.png";
import questions from "./Question";
import { useState } from "react";
import '../index.css';
import { useNavigate } from "react-router-dom";

export default function QuestionBox() {

    // useState to handle the state changes for score, to change the questions 
    const [state,setState] = useState(0)
    const [data,setData] = useState({
        attempted: 0,
        correct : 0,
        wrong: 0,
        score:0
      })
      const[highlight,setHighlight] = useState("blue")

  //useNavigate to navigate to another page and using this props can also be sent
    const Navigate = useNavigate()

    //checking the choosed option is correct or wrong
    const handleChange = (correct) => {
        if(state === 4){
            setData(prevData => ({
                attempted: prevData.attempted + 1,
                score: correct ? prevData.score + 1 : prevData.score,
                correct: correct ? prevData.correct + 1 : prevData.correct,
                wrong: correct ? prevData.wrong : prevData.wrong + 1

            }))
            Navigate("/result",{state:data}); // Sending data as props
        } else {
            // Update state only once
            setState(state + 1);
    
            // Update data based on correctness
            setData(prevData => ({
                ...prevData,
                attempted: prevData.attempted + 1,
                score: correct ? prevData.score + 1 : prevData.score,
                correct: correct ? prevData.correct + 1 : prevData.correct,
                wrong: correct ? prevData.wrong : prevData.wrong + 1
            }));
        }
    };
    
    
    //highlighting question
    const handleHighlight = () => {
        setHighlight("red")
    }

    const handleRemoveHighlight = () => {
        setHighlight("blue")
    }

    //changing the color of document body
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
                <h1 className="quiznam">QuizGenius</h1>
                {/* <button className="dark" onClick={handleTheme}>{theme}</button> */}
                </div>
                <div className="btn">
                <button className="dark" onClick={handleTheme}>{theme}</button>
                </div>

                <h2 className="qn">Questions</h2>
                <p className="qnno">{state + 1} of 5</p>
                <p className="qns" style={{color:highlight}}>{questions[state].text}</p>

{/* looping through the options and creating button for each option */}
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

      {/* to highlight the question and remove the highlight*/}
                <div className="footer">
                    <button className="highlight" onClick={handleHighlight}>Highlight</button>
                    <button className="highlight" onClick={handleRemoveHighlight}>Remove Highlight</button>
                </div>


            </div>


        </div>
    )

  
}
