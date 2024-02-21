
import React from "react";
import quizicon from "../Assets/quizicon.png";
import questions from "./Question";
import { useState } from "react";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function QuestionBox() {
    const [state,setState] = useState(0)
    const [data,setData] = useState({
        attempted: 0,
        correct : 0,
        wrong: 0,
        score:0
      })
    console.log(data.score)
    // const history = useHistory();
    const Navigate = useNavigate()

    const handleChange = (correct) => {
        if(state===4){
            // <Link to="/result"></Link>
            Navigate("/result")
            
        }
        else{
            if(correct === true){
                setState(state + 1)
                setData({...data,attempted:data.attempted+1,score:data.score + 1,wrong:data.wrong + 1})
    
    
            }
            else{
                setState(state + 1)
                setData({...data,attempted:data.attempted+1,correct:data.correct + 1})
    
            }

        }
      

    }
    

    return(
        <div className="container">
            <div className="main">

                <div className="nav">
                <img className="imgicon" src={quizicon} alt="" />
                <button className="dark">Dark</button>
                </div>

                <h2 className="qn">Questions</h2>
                <p className="qnno">{state + 1} of 5</p>
                <p className="qns">{questions[state].text}</p>

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
                    <button className="highlight">Highlight</button>
                    <button className="highlight">Remove Highlight</button>
                </div>
                {/* <Link to="/result">
                <button>Result</button>
                  </Link> */}





            </div>


        </div>
    )

  
}
