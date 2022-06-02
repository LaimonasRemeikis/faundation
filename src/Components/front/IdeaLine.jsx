import { Link } from "react-router-dom";

function IdeaLine({ goal }) {
    const connected_amount = goal.connected_amount ?? 0

  return (
    <div className="idea">
      <Link to={"/goal/" + goal.id}>
        <img src={goal.photo} alt={goal.title} />
        <h2> {goal.title}</h2>
        <p>{goal.description}</p>
        <span>
          Raised: {connected_amount.toFixed(2)} $ /{" "}
          {goal.total_amount.toFixed(2)} $
        </span>
      </Link>
    </div>
  );
}

export default IdeaLine;
