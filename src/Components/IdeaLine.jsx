import axios from "axios";
import { useEffect, useState } from "react";

function IdeaLine({ goal, setDeleteId, setModalData }) {
  const [active, setActive] = useState();
  const [lastUpdate, setLastUpdate] = useState(Date.now()); // state

  const isApproved= ()=>{
       
    active === true ? setActive(false) :setActive(true) 
     axios.put("http://localhost:3007/ideas-active/" + goal.id, { approved: active===true ? false : true})
     .then(res => {
       setLastUpdate(Date.now());
     })
     
 }

 const  handleOnApproved =()=>{
  setActive(active === true ? false : true )
}
useEffect(()=>{
  goal.approved === 1 ? setActive(true): setActive(false)
},[lastUpdate])
  
 
 

  

  return (
    <tr className="list-group-item">
      <td>{goal.title}</td>
      <td>{goal.description}</td>
      <td>{goal.total_amount} Euro</td>
      <td>
        <input
          type="checkbox"
          id="active"
          onChange={handleOnApproved}
          defaultChecked={active}
          readOnly  
          disabled
        />
      </td>
      <td className="tree-line__buttons">
        <button
          type="button"
          className="btn"
          onClick={() => setModalData(goal)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setDeleteId({ id: goal.id })}
        >
          Delete
        </button>
        {active  ? <button type="button" className="btn-red"  onClick={isApproved}>
          dissapprove
        </button> : <button type="button" className="btn"  onClick={isApproved}>
          approve
        </button>}
      </td>
    </tr>
  );
}

export default IdeaLine;
