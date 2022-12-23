import React from "react";

function Total({ Total }) {
  let getTotal = Total.reduce((sum, i) => sum + i.exercises, 0);

  return <b>Total of {getTotal} exercises</b>;
}

export default Total;
