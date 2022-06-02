import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import IdeaLine from "./front/IdeaLine";
import "../assets/scss/app.scss";

function Front({ show }) {
  const [goals, setGoals] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now()); // state

  // Read
  useEffect(() => {
    axios.get("http://localhost:3007/fundation-list/" + show).then((res) => {
      console.log(res.data);
      setGoals(res.data);
    });
  }, [show, lastUpdate]);

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Ideas</h1>
          <Link to={"/create"}> Registration form</Link>
        </div>
        <div className="ideas">
          {goals.map((goal) => (
            <IdeaLine key={goal.id} goal={goal}></IdeaLine>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Front;
