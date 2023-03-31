import React from "react";
import Resultdatatwo from "./Resultdatatwo";

const Resultdata = (props) => {
  const { data, bookmark } = props;

  let totalSpentTime = 0;
  for (const value of data) {
    totalSpentTime = totalSpentTime + value.author_min_time;
  }

  return (
    <div>
      <div className="border-solid border-2 border-sky-500 p-5 px-6 rounded">
        <p className="text-sky-500 font-semibold text-xl">
          Spent time on read : {totalSpentTime} min
        </p>
      </div>
      <div className="border-solid border-0 bg-slate-300 p-5 px-6 mt-5 text-xl">
        <p className="text-black font-semibold">
          Bookmarked Blogs: {bookmark.length}
        </p>
      </div>
    </div>
  );
};

export default Resultdata;
