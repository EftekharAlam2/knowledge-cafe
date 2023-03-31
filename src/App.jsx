import React, { useEffect, useState } from "react";
import Datashow from "./Components/Datashow";
import Nav from "./Components/Nav";

const App = () => {
  const [values, setvalues] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setvalues(data));
  }, []);

  return (
    <div>
      <Nav></Nav>
      <hr />
      <div className="flex flex-col md:flex-row">
        <div className="w-3/4 bg-slate-400">
          {values.map((value) => (
            <Datashow key={value.id} value={value}></Datashow>
          ))}
        </div>
        <div className="">
          <div className="border-solid border-2 border-sky-500 p-4 rounded">
            <p className="text-sky-500 font-semibold">
              Spent time on read : min
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
