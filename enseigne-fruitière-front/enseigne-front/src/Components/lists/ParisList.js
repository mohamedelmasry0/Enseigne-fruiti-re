import React from "react";
import { useState, useEffect } from "react";
import "./Table.css";

// import axios from ".../axios";
import axios from "axios";

function ParisList() {
  const [paris, setParis] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("http://localhost:8001/api/paris/");
      setParis(req.data);
    }
    fetchData();
  }, []);
  return (
    <>
      <table className="data">
        <thead>
          <tr>
            <th colspan="2">Paris magasin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Orange</td>
            <td>
              {paris.map((parisMapped) => (
                <div key={parisMapped._id}>
                  <div className="title">{parisMapped.Orange}</div>
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <td>Cerise</td>
            <td>
              {paris.map((parisMapped) => (
                <div key={parisMapped._id}>
                  <div className="title">{parisMapped.Cerise}</div>
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <td>Banane</td>
            <td>
              {paris.map((parisMapped) => (
                <div key={parisMapped._id}>
                  <div className="title">{parisMapped.Banane}</div>
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <td>Pomme</td>
            <td>
              {paris.map((parisMapped) => (
                <div key={parisMapped._id}>
                  <div className="title">{parisMapped.Pomme}</div>
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <td>Fraise</td>
            <td>
              {paris.map((parisMapped) => (
                <div key={parisMapped._id}>
                  <div className="title">{parisMapped.Fraise}</div>
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default ParisList;
