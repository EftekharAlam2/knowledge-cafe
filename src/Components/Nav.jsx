import React from "react";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <p className="text-4xl text-black font-semibold">Code and Caffe</p>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-16 rounded-full">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Nav;
