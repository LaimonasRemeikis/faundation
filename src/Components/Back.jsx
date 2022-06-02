import { useEffect, useState } from "react";
import axios from "axios";
import IdeaLine from "./IdeaLine";
import Modal from "./Modal";
import "../assets/admin.scss";



function Back() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());

 
  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [goals, setGoals] = useState([]);

  // Read
  useEffect(() => {
    axios.get("http://localhost:3007/fundation-manager").then((res) => {
      console.log(res.data);
      setGoals(res.data);
    });
  }, [lastUpdate]);



  //Edit
  useEffect(() => {
    if (null === editData) {
      return;
    }
    axios
      .put("http://localhost:3007/fundation-manager/" + editData.id, editData)
      .then((res) => {
        console.log(res);
        setLastUpdate(Date.now());
      });
  }, [editData]);

  //Delete
  useEffect(() => {
    if (null === deleteId) {
      return;
    }
    axios
      .delete("http://localhost:3007/fundation-manager/" + deleteId.id)
      .then((res) => {
        console.log(res);
        setLastUpdate(Date.now());
      });
  }, [deleteId]);

  return (
    <>
      <div className="back-container">
        <div className="table-container">
        <div className="header">
        <h1 id="title">Charity list</h1>
      </div>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>total_amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="list-group">
              {goals.map((goal) => (
                <IdeaLine
                  key={goal.id}
                  goal={goal}
                  setDeleteId={setDeleteId}
                  setModalData={setModalData}
                ></IdeaLine>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        setEditData={setEditData}
        setModalData={setModalData}
        modalData={modalData}
      ></Modal>
    </>
  );
}

export default Back;