import React, { useEffect, useState } from "react";
import Datashow from "./Components/Datashow";
import Nav from "./Components/Nav";
import Resultdata from "./Components/Resultdata";

const App = () => {
  const [values, setvalues] = useState([]);
  const [data, setData] = useState([]);
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setvalues(data));
  }, []);

  const handleData = (data2) => {
    const newData = [...data, data2];
    setData(newData);
  };

  const handleBookmark = (data2) => {
    const newData = [...bookmark, data2];
    setBookmark(newData);
    {
      newData.map((title) => console.log(title.title));
    }
  };

  return (
    <div>
      <Nav></Nav>
      <hr />
      <div className="flex flex-col md:flex-row">
        <div className="w-3/4">
          {values.map((value) => (
            <Datashow
              key={value.id}
              value={value}
              handleData={handleData}
              handleBookmark={handleBookmark}
            ></Datashow>
          ))}
        </div>
        <div className="my-5 md:pe-20 p-10 md:fixed md:right-0">
          <Resultdata data={data} bookmark={bookmark}></Resultdata>
        </div>
        {/* md:fixed md:right-0 */}
      </div>
    </div>
  );
};

export default App;
