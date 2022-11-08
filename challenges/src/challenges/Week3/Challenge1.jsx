import React, { useState } from "react";

const tempArray = [
  "Banana",
  "Apple",
  "Orange",
  "Mango",
  "Pineapple",
  "Watermelon",
];

export const Challenge1 = () => {
  const [search, setSearch] = useState(tempArray);

  const searchArray =(e)=>{
    if(!e.target.value) {setSearch(tempArray); return;}
    setSearch(tempArray.filter(t=>t.toLowerCase().includes(e.target.value.toLowerCase())));
  }

  return (
    <div style={{border: '2px solid black'}}>
          <h2>Challenge #1</h2>
      <input onChange={searchArray} />
      <ul>
      {
          search.map(e=>( <li key={e}>{e}</li> ))
      }
      </ul>
    </div>
  );
};


