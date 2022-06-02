function IdeaLine({ goal, setDeleteId, setModalData }) {
  
  
    return (
      <tr className="list-group-item">
        <td>{goal.title}</td>
        <td>{goal.description}</td>
        <td>{goal.total_amount} Euro</td>
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
          <button
            type="button"
            className="btn"
         
          >
            Approve
          </button>
        </td>
      </tr>
    );
  }
  
  export default IdeaLine;
  