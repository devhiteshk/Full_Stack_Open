import React from "react";

function Total({ Total }) {
  console.log(Total);
  return (
    <p>
      Number of exercises{" "}
      {Total[0].exercises + Total[1].exercises + Total[2].exercises}
    </p>
  );
}

export default Total;
