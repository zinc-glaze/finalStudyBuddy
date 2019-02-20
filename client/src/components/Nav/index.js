import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import "./style.css";
import { MyContext } from "../../MyContext";

function Nav() {
  return (
  
      
          <nav className="navbar navbar-expand-lg d-flex flex-row-reverse">
            <LoginForm />
            <div className="mr-auto p-2">
              <Link to="/"><i class="fas fa-strikethrough" style={{fontSize: "40px"}}></i>tudy Buddy</Link>
              <span style={{ padding: "10px" }}>|</span>
              <Link to="/getQuestions">Add Questions</Link>
              <span style={{ padding: "10px" }}>|</span>
              <Link to="/test">Start Quiz</Link>
            </div>
          </nav>
       
  );
}

export default Nav;
