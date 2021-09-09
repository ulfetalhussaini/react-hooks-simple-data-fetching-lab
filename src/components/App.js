// create your App component here
import React, { useState, useEffect } from "react";

export default function App() {
  const [dogImg, setDogImg] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogImg(data.message);
      });
  }, []);

  if (!dogImg) return <p>Loading...</p>;

  return <img src={dogImg} alt="A Random Dog" />;
}

