import React, { useEffect, useState } from "react";
import Datashow from "./Components/Datashow";
import Nav from "./Components/Nav";
import Resultdata from "./Components/Resultdata";
import Resultdatatwo from "./Components/Resultdatatwo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./Components/Blog";

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
    for (const value2 of bookmark) {
      if (value2.id === data2.id) {
        toast.error("You Have Already Bookmarked This Blog!!");
        return;
      }
    }
    const newData = [...bookmark, data2];
    setBookmark(newData);
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
        <div className="my-5 md:ms-20 p-10 md:fixed md:right-0">
          <Resultdata data={data} bookmark={bookmark}></Resultdata>

          {bookmark.map((value2) => (
            <Resultdatatwo key={value2.id} value={value2}></Resultdatatwo>
          ))}
        </div>
      </div>
      <Blog></Blog>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
