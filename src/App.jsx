import React, { useEffect, useState } from "react";
import Datashow from "./Components/Datashow";

const App = () => {
  const [values, setvalues] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setvalues(data));
  }, []);

  return (
    <div>
      {values.map((value) => (
        <Datashow key={value.id} value={value}></Datashow>
      ))}
    </div>
  );
};

export default App;
