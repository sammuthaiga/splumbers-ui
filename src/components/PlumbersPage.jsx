import React from "react";
import Plumbers from './Plumbers'
const PlumbersPage = ({ plumbers }) => {
  return (
    <div className="flex flex-wrap -mx-4">
      {plumbers.map((plumber) => (
        <Plumbers key={plumber.id} plumber={plumber} />
      ))}
    </div>
  );
};

export default PlumbersPage;