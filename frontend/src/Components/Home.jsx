import React, { useState, useEffect } from "react";

function Home() {
  const bgArr = [
    `${process.env.PUBLIC_URL}/assets/bg1.jpg`,
    `${process.env.PUBLIC_URL}/assets/bg2.jpg`,
    `${process.env.PUBLIC_URL}/assets/bg3.jpg`,
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % bgArr.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div id="Home" style={{ background: `url(${bgArr[index]}) center/cover` }}>
      <form action="">
        <h1>Book Our Service</h1>
        <input type="number" name="" id="" placeholder="Phone No." />
        <button>Book Now</button>
        <p>By Sharing you are accepting our terms and condition</p>
      </form>
    </div>
  );
}

export default Home;
