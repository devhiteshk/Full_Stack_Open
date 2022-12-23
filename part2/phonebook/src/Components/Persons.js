import React from "react";

function Persons({ persons }) {
  return (
    <div>
      {persons.map((p) => (
        <p key={p.name}>
          {p.name} {p.number}
        </p>
      ))}
    </div>
  );
}

export default Persons;
