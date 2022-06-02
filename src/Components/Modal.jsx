import { useEffect, useRef, useState } from "react";
import getBase64 from "../Functions/getBase64";

function Modal({ setModalData, modalData, setEditData }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [total_amount, setTotal_amount] = useState("0");
  const [id, setId] = useState("0");
  const [remove, setRemove] = useState(false);
  const fileInput = useRef();

  const buttonHandler = () => {
    const file = fileInput.current.files[0];
    if (file) {
      getBase64(file).then(photo => {
        console.log(photo);
        setEditData({
          title,
          description,
          total_amount,
          id,
          photo,
          del: remove ? 1 : 0,
        });
        setModalData(null);
        setRemove(false);
      });
    } else {
      setEditData({
        title,
        description,
        total_amount,
        id,
        photo: '',
        del: remove ? 1 : 0,
      });
      setModalData(null);
      setRemove(false);
    }
  };

  const inputHandler = (e, which) => {
    switch (which) {
      case "title":
        setTitle(e.target.value);
        break;
        case "description":
        setDescription(e.target.value);
        break;
      case "total_amount":
        setTotal_amount(e.target.value.replace(/,/g, "."));
        break;
     
      default:
    }
  };

  useEffect(() => {
    if (modalData === null) {
      setTitle("");
      setDescription("")
      setTotal_amount("");
     
    } else {
      setTitle(modalData.title);
      setDescription(modalData.description);
      setTotal_amount(modalData.total_amount);
      setId(modalData.id);
    }
  }, [modalData]);

  if (modalData === null) {
    return null;
  }

  return (
    <div className="modal">
    <div className="edit">
      <div className="title">
        <h2>Edit Data</h2>
        <button
            type="button"
            className="close"
            onClick={() => setModalData(null)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
      </div>
     
      <form
        className="form"
      >

<div className="question-container">
          <label id="name-label" className="question-label" >
            Charity title
          </label>
          <input
            type="text"
            className="row-input"
            placeholder="Enter your movie title"
            required
            onChange={(e) => inputHandler(e, "title")}
            value={title}
          />
        </div>
        <div className="question-container">
          <label id="name-label" className="question-label" >
            Charity description
          </label>
          <input
            type="text"
            className="row-input"
            placeholder="Enter your movie title"
            required
            onChange={(e) => inputHandler(e, "description")}
            value={description}
          />
        </div>
        <div className="question-container">
          <label id="number-label" className="question-label" >
            Charity total amount
          </label>
          <input
            id="number"
            type="number"
            className="row-input"
            min="0"
            max="350"
            onChange={(e) => inputHandler(e, "total_amount")}
            value={total_amount}
          />
        </div>
       
        <div className="question-container">
          <label id="name-label">Photo</label>
          <input ref={fileInput} type="file" className="row-input" />
        </div>
        <div className="input">
          <div className="input-photo">
            <div>
              {" "}
              <input
                type="checkbox"
                onChange={() => setRemove((remove) => !remove)}
                checked={remove}
              />
              <label>Delete Photo</label>{" "}
            </div>
            <div>
              {modalData.photo ? (
                <img className="photo" src={modalData.photo} alt="#"></img>
              ) : null}
            </div>
          </div>
        </div>
        <div className="input-btn">
          <button
            type="button"
            className=""
            onClick={buttonHandler}
          >
            Save
          </button>
          <button
            type="button"
            className=""
            onClick={() => setModalData(null)}
          >
            Cancel
          </button>
          </div>
      </form>
    </div>
  </div>
  );
}

export default Modal;
