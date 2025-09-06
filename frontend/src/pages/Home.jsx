import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Home = () => {
  console.log("✅ Home component rendered");
  return (
    <>
      <Navbar />
      <Banner />
    </>
  );
};

export default Home;
