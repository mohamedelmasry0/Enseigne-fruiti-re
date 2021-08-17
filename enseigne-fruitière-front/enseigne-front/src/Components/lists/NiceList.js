import React from "react";
import { useState, useEffect } from "react";

// import axios from ".../axios";
import axios from "axios";
import "./Table.css";

function NiceList() {
  const [nice, setNice] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("http://localhost:8001/api/nice/");
      setNice(req.data);
    }
    fetchData();
  }, []);
  return (
    <>
      <table className="data">
        <thead>
          <tr>
            <th colspan="2">Nice magasin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Orange</td>
            <td>
              {nice.map((niceMapped) => (
                <div key={niceMapped._id}>
                  <div className="title">{niceMapped.Orange}</div>
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <td>Cerise</td>
            <td>
              {nice.map((niceMapped) => (
                <div key={niceMapped._id}>
                  <div className="title">{niceMapped.Cerise}</div>
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <td>Banane</td>
            <td>
              {nice.map((niceMapped) => (
                <div key={niceMapped._id}>
                  <div className="title">{niceMapped.Banane}</div>
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <td>Pomme</td>
            <td>
              {nice.map((niceMapped) => (
                <div key={niceMapped._id}>
                  <div className="title">{niceMapped.Pomme}</div>
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <td>Fraise</td>
            <td>
              {nice.map((niceMapped) => (
                <div key={niceMapped._id}>
                  <div className="title">{niceMapped.Fraise}</div>
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default NiceList;
