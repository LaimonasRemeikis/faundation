import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../assets/admin.scss";
import { Link } from "react-router-dom";
import Donation from "./Donation";
import Patrons from "./Patrons";

function Idea() {
  //   const [comment, setComment] = useState("");

  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [goal, setGoal] = useState(null);

  let params = useParams();
  console.log(params);
  useEffect(() => {
    axios
      .get("http://localhost:3007/fundation-manager/" + params.id, params)
      .then((res) => {
        console.log(res.data);
        setGoal(res.data);
        console.log(goal);
      });
  }, [lastUpdate]);


  if (!goal) return <p>loading</p>;

  const connected_amount = goal.connected_amount ?? 0

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">{goal.title}</h1>
          <Link to={"/"}>Back</Link>
        </div>
        <div className="idea-details">
          <div className="content">
            <img src={goal.photo} alt={goal.title} />
            <h2> {goal.title}</h2>
            <p>{goal.description}</p>
            <span>
              Raised: {connected_amount.toFixed(2)} $ /{" "}
              {goal.total_amount.toFixed(2)} $
            </span>
            <Patrons id={goal.id} lastUpdated={lastUpdate}></Patrons>
          </div>
          {goal.connected_amount < goal.total_amount && (
            <Donation id={params.id}></Donation>
          )}
        </div>
      </div>
    </div>
  );
  
}
export default Idea;
