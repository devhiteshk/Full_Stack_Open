import React from 'react';

function Filter({handleFilchange}) {
  return (
    <>
     <p>
        filter shown with <input type="text" onChange={handleFilchange} />
      </p> 
    </>
  );
}

export default Filter;
