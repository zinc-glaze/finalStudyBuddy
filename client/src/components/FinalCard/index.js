import React from "react";
import "./style.css";


function QuestionCard(props) {
  return (
    <div className="card">
      <div className="img-container">
      {props.wrong === 0 ? (
      <h1 id="perfect">💥💥💥💥BOOM💥💥💥💥 GOES THE DYNAMITE! PERFECT SCORE!</h1> 
      
      ) : (<h2>Round Complete! You answered {props.wrong + props.correct} questions, of which you got {props.wrong} wrong. Better luck next Time!</h2> )}
      </div>
    </div>
  );
}

export default QuestionCard;
