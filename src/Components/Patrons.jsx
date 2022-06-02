import { useEffect, useState } from "react";
import axios from "axios";

import "../assets/scss/app.scss";

function Patrons({ id, lastUpdated }) {
  const [patrons, setPatrons] = useState([]);

  // Read
  useEffect(() => {
    axios.get("http://localhost:3007/patrons-manager/" + id).then((res) => {
      console.log(res.data);
      setPatrons(res.data);
    });
  }, [id, lastUpdated]);

  return (
    <div className="patrons">
      <h2>Patrons</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full name</th>
            <th>Donation</th>
          </tr>
        </thead>
        <tbody>
            {patrons.map((patron)=> (
                <tr>
                    <td>{patron.id}</td>
                    <td>{patron.name}</td>
                    <td>{patron.fund_sum.toFixed(2)} $</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Patrons;
