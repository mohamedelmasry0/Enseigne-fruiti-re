import React from "react";
import { useState, useEffect } from "react";

// import axios from ".../axios";
import axios from "axios";
import "./Table.css";

function MarseilleList() {
  const [marseille, setMarseille] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("http://localhost:8001/api/marseille/");
      setMarseille(req.data);
    }
    fetchData();
  }, []);
  return (
    <>
      <table className="data">
        <thead>
          <tr>
            <th colspan="2">Marseille magasin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Orange</td>
            <td>
              {marseille.map((marseilleMapped) => (
                <div key={marseilleMapped._id}>
                  <div className="title">{marseilleMapped.Orange}</div>
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <td>Cerise</td>
            <td>
              {marseille.map((marseilleMapped) => (
                <div key={marseilleMapped._id}>
                  <div className="title">{marseilleMapped.Cerise}</div>
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <td>Banane</td>
            <td>
              {marseille.map((marseilleMapped) => (
                <div key={marseilleMapped._id}>
                  <div className="title">{marseilleMapped.Banane}</div>
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <td>Pomme</td>
            <td>
              {marseille.map((marseilleMapped) => (
                <div key={marseilleMapped._id}>
                  <div className="title">{marseilleMapped.Pomme}</div>
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <td>Fraise</td>
            <td>
              {marseille.map((marseilleMapped) => (
                <div key={marseilleMapped._id}>
                  <div className="title">{marseilleMapped.Fraise}</div>
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default MarseilleList;
