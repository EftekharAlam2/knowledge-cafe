import React from "react";

const Datashow = (props) => {
  return (
    <div className="card w-96 md:w-11/12 bg-base-100 shadow-xl my-10 ms-3 md:mx-auto">
      <figure>
        <img src={props.value.cover_img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Datashow;
