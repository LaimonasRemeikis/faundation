import axios from "axios";
import { useEffect, useRef, useState } from "react";
import getBase64 from "../Functions/getBase64";

function Create() {

    const [createData, setCreateData] = useState(null);
    const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [title, setTitle] = useState("");
  const [total_amount, setTotal_amount] = useState("0");
  const [description, setDescription] = useState("")
//   const [connected_amount, setConnected_amount] = useState("0");
  const fileInput = useRef();
  

    //Create
    useEffect(() => {
        if (null === createData) {
          return;
        }
        axios
          .post("http://localhost:3007/fundation-manager", createData)
          .then((res) => {
            console.log(res);
            setLastUpdate(Date.now());
          });
      }, [createData]);


  const buttonHandler = () => {
    const file = fileInput.current.files[0];

    if (file) {
      getBase64(file).then(photo => {
        console.log(photo);
        setCreateData({
          title,
          description,
          total_amount,
          photo,
        });
      });
    } else {
      setCreateData({
        title,
        description,
          total_amount,
        photo: null,
      });
    }
    setTitle("");
    setDescription("");
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

  return (
    <div className="card-admin">
      <header className="header">
        <h1 id="title">Add New Charity</h1>
      </header>
      <div id="form-container">
        <div className="question-container">
          <label id="name-label" className="question-label" >
            Charity title
          </label>
          <input
            type="text"
            className="row-input"
            placeholder="Enter your charity title"
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
            placeholder="Enter your charity description"
            required
            onChange={(e) => inputHandler(e, "description")}
            value={description}
          />
        </div>
        <div className="question-container">
          <label id="number-label" className="question-label" >
            Total-amount
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
        <div>
          <button id="submit" type="submit" onClick={buttonHandler}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default Create;