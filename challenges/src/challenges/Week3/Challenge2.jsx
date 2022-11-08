import React, { useState } from "react";
import { useEffect } from "react";

export const Challenge2 = () => {
  const [obj, setObj] = useState({
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  });

  useEffect(() => {
    updateUser();
  }, [])
  

  const updateUser = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${
        Math.floor(Math.random() * (10 - 1) + 1)
      }`
    )
      .then((response) => response.json())
      .then((json) => setObj(json));
  };

  return (
    <div style={{ border: "2px solid black" }}>
      <h2>Challenge #2</h2>
      <h3>User Data</h3>
      <button onClick={updateUser}>Reset</button>
      <p>
        <strong>Name:</strong>
        {obj.name}
      </p>
      <p>
        <strong>Website:</strong>
        {obj.website}
      </p>
      <p>
        <strong>Email:</strong>
        {obj.email}
      </p>
      <p>
        <strong>Phone:</strong>
        {obj.phone}
      </p>
    </div>
  );
};
