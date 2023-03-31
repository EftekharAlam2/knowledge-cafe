import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Datashow = (props) => {
  const { value } = props;
  const handleData = props.handleData;
  const handleBookmark = props.handleBookmark;

  return (
    <div className="card w-96 md:w-11/12  shadow-xl my-5 ms-3 md:mx-auto">
      <figure>
        <img src={value.cover_img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div>
              <div className="w-11">
                <img src={value.author_img} alt="" />
              </div>
            </div>
            <div className="my-auto">
              <p className="text-black font-semibold">{value.author_name}</p>
              <p className="text-xs">{value.date}</p>
            </div>
          </div>
          <div className="my-auto">
            <p className="text-black">
              {value.author_min_time} min read .
              <button onClick={() => handleBookmark(props.value)}>
                <FontAwesomeIcon icon={faBookmark} />
              </button>
            </p>
          </div>
        </div>
        <p className="text-black text-3xl mt-4 font-semibold">{value.title}</p>
        <div>
          <button onClick={() => handleData(props.value)}>
            <p className="underline underline-offset-1 text-sky-600 mt-2">
              Mark as read
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Datashow;
