import React from "react";

const Person = (props) => {
  return (
    <>
      <h1>Hac3er</h1>
      <p>
        i am {props.name} {Math.floor(Math.random() * 50)} year old hacker
      </p>
      <>
        <h1>Hac3er</h1>
        <p>
          i am a {props.name} {Math.floor(Math.random() * 50)} year old hacker
        </p>
        <p className="bg-blue-900 text-white">{props.children}</p>
      </>
    </>
  );
};

export default Person;
