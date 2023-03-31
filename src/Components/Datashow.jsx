import React from "react";

const Datashow = ({ value }) => {
  return (
    <div className="card w-96 md:w-11/12  shadow-xl my-10 ms-3 md:mx-auto">
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
              <p>$ days ago</p>
            </div>
          </div>
          <div className="my-auto">min read</div>
        </div>
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
