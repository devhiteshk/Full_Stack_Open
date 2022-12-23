import React from "react";

function PersonForm({ handleChange, handleChangeN, handleClick }) {
  return (
    <>
      <div>
        name: <input id="name" onChange={handleChange} />
      </div>
      <div>
        number: <input id="number" onChange={handleChangeN} />
      </div>
      <div>
        <button type="submit" onClick={handleClick}>
          add
        </button>
      </div>
    </>
  );
}

export default PersonForm;
