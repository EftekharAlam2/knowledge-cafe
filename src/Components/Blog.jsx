import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="md:me-96 md:pe-80 md:ms-16 text-black text-lg p-4 mt-4">
        <p>
          Question 01 : Props vs state <br />
          Ans: <br />
          In react, both props and state are an important part. The main
          difference between them is, how they operate in react. <br />
          Props are used to pass data from a parent component to a child
          component. On the other hand, state is used to manage data within a
          component. Props are read only memory and can not be modified by the
          child component. But on state, it can be modified within in a
          component using setState method. <br />
          This is the difference betwenn props and state.
        </p>
      </div>
      <div className="md:me-96 md:pe-80 md:ms-16 text-black text-lg p-4 mt-4">
        <p>
          Question 02 : How does useState work? <br />
          Ans: <br />
          In react, useState is a hook that allows us to add state to a
          functional component. It's array has two elements. It works by
          returning an array with two elements: the current state value and a
          function to update the state value.
        </p>
      </div>
      <div className="md:me-96 md:pe-80 md:ms-16 text-black text-lg p-4 mt-4">
        <p>
          Question 03 : Purpose of useEffect other than fetching data. <br />
          Ans: <br />
          Mainly we used useEffect for fetching data in react. But it has many
          purpose other than this. For example, we can use useEffect to manage
          timers, for example, by starting or stopping a timer when the
          component mounts or unmounts. This can be useful for implementing
          features such as countdown timers or auto-refreshing components. Such
          as this we can use the method useEffect on other purpose like create
          animations also. useEffect has many board purpose other than fetching
          data.
        </p>
      </div>
      <div className="md:me-96 md:pe-80 md:ms-16 text-black text-lg p-4 mt-4">
        <p>
          Question 04 : How does react work? <br />
          Ans: <br />
          We know that, React is a JavaScript library for building user
          interfaces. <br />
          When we want to build a react application, we create a tree of
          components that represent the different parts of our UI. Each
          component can have its own state, which is managed internally by
          React. When the state of a component changes, React will automatically
          re-render the component and any child components that depend on its
          state. <br />
          Also, to create a react component, we define a funtion or a class that
          returns a piece of JSX. The JSX describes the structure of the
          component and any data that it needs to display.
        </p>
      </div>
    </div>
  );
};

export default Blog;
