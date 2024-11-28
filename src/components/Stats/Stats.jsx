import React from "react";

const Stats = ({ totalCount }) => {
  return (
    <div className="px-6 py-6 w-full shadow rounded">
      <h3 className="text-2xl">Total Count: {totalCount}</h3>
    </div>
  );
};

export default Stats;
