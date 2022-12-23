import React from "react";
import Part from "./Part";

function Content({ parts }) {
  return (
    <>
      {parts.map((i) => (
        <Part key={i.id} part={i.name} exercises={i.exercises} />
      ))}
    </>
  );
}

export default Content;
