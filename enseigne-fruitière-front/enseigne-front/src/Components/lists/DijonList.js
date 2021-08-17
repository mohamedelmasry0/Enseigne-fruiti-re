import React from "react";
import { useState, useEffect } from "react";

// import axios from ".../axios";
import axios from "axios";
import "./Table.css";

function DijonList() {
  const [dijon, setDijon] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("http://localhost:8001/api/dijon/");
      setDijon(req.data);
    }
    fetchData();
  }, []);
  return (
    <>
      <table className="data">
        <thead>
          <tr>
            <th colspan="2">Dijon magasin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Orange</td>
            <td>
              {dijon.map((dijonMapped) => (
                <div key={dijonMapped._id}>
                  <div className="title">{dijonMapped.Orange}</div>
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <td>Cerise</td>
            <td>
              {dijon.map((dijonMapped) => (
                <div key={dijonMapped._id}>
                  <div className="title">{dijonMapped.Cerise}</div>
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <td>Banane</td>
            <td>
              {dijon.map((dijonMapped) => (
                <div key={dijonMapped._id}>
                  <div className="title">{dijonMapped.Banane}</div>
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <td>Pomme</td>
            <td>
              {dijon.map((dijonMapped) => (
                <div key={dijonMapped._id}>
                  <div className="title">{dijonMapped.Pomme}</div>
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <td>Fraise</td>
            <td>
              {dijon.map((dijonMapped) => (
                <div key={dijonMapped._id}>
                  <div className="title">{dijonMapped.Fraise}</div>
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default DijonList;
