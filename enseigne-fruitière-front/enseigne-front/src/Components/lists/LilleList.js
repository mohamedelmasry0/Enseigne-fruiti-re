import React from "react";
import { useState, useEffect } from "react";

// import axios from ".../axios";
import axios from "axios";
import "./Table.css";

function LilleList() {
  const [lille, setLille] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("http://localhost:8001/api/lille/");
      setLille(req.data);
    }
    fetchData();
  }, []);
  return (
    <>
      <table className="data">
        <thead>
          <tr>
            <th colspan="2">Lille magasin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Orange</td>
            <td>
              {lille.map((lilleMapped) => (
                <div key={lilleMapped._id}>
                  <div className="title">{lilleMapped.Orange}</div>
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <td>Cerise</td>
            <td>
              {lille.map((lilleMapped) => (
                <div key={lilleMapped._id}>
                  <div className="title">{lilleMapped.Cerise}</div>
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <td>Banane</td>
            <td>
              {lille.map((lilleMapped) => (
                <div key={lilleMapped._id}>
                  <div className="title">{lilleMapped.Banane}</div>
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <td>Pomme</td>
            <td>
              {lille.map((lilleMapped) => (
                <div key={lilleMapped._id}>
                  <div className="title">{lilleMapped.Pomme}</div>
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <td>Fraise</td>
            <td>
              {lille.map((lilleMapped) => (
                <div key={lilleMapped._id}>
                  <div className="title">{lilleMapped.Fraise}</div>
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default LilleList;
