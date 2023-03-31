import React from "react";

const Resultdatatwo = ({ value }) => {
  return (
    <div>
      <div className="border-solid border-0 bg-slate-300 p-3 text-xl">
        <p className="text-black font-semibold w-75 bg-white p-4 rounded">
          {value.title}
        </p>
      </div>
    </div>
  );
};

export default Resultdatatwo;
