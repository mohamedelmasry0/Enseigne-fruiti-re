import React from "react";
import { useState, useEffect } from "react";
import "./GrandTableauList.css";

// import axios from ".../axios";
import axios from "axios";
import "./Table.css";

function GrandTableauList() {
  const [magasins, setMagasins] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("http://localhost:8001/api/magasins/");
      setMagasins(req.data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function updateData() {
      const req = await axios
        .put("http://localhost:8001/api/magasins/")
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <>
      <table className="t">
        <tr>
          <td></td>
          <th scope="col" className="r">
            Orange
          </th>
          <th scope="col" className="rb">
            Banane
          </th>
          <th scope="col" className="rp">
            Pomme
          </th>
          <th scope="col" className="rf">
            Fraise
          </th>
          <th scope="col" className="rc">
            Cerise
          </th>
        </tr>
      </table>
      <div className="fakeTable">
        <div className="colu">
          {magasins.map((magasinsMapped) => (
            // <div key={magasinsMapped._id}>
            <div className="Magasin">{magasinsMapped.Magasin}</div>
            // </div>
          ))}
        </div>
        <div className="colu">
          {magasins.map((magasinsMapped) => (
            // <div key={magasinsMapped._id}>
            <div className="Orange">{magasinsMapped.Orange}</div>
            // </div>
          ))}
        </div>
        <div className="colu">
          {magasins.map((magasinsMapped) => (
            // <div key={magasinsMapped._id}>
            <div className="Banane">{magasinsMapped.Banane}</div>
            // </div>
          ))}
        </div>
        <div className="colu">
          {magasins.map((magasinsMapped) => (
            // <div key={magasinsMapped._id}>
            <div className="Pomme">{magasinsMapped.Pomme}</div>
            // </div>
          ))}
        </div>
        <div className="colu">
          {magasins.map((magasinsMapped) => (
            // <div key={magasinsMapped._id}>
            <div className="Fraise">{magasinsMapped.Fraise}</div>
            // </div>
          ))}
        </div>
        <div className="colu">
          {magasins.map((magasinsMapped) => (
            // <div key={magasinsMapped._id}>
            <div className="Cerise">{magasinsMapped.Cerise}</div>
            // </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default GrandTableauList;
