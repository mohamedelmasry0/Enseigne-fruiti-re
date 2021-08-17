import React from "react";
import ParisList from "../lists/ParisList";
import Navigation from "../Navigation";

const Paris = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <ParisList />
      </div>
    </div>
  );
};

export default Paris;
