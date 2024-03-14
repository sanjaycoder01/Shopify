import React from "react";
import NavBar from "./Navbar/Navbar";
// import { BG_URL } from "./utils/constants";
import Contact from "./About";
import VideoPlayer from "./VideoPlayer";
import { useSelector } from "react-redux";
import img from "./utils/background.png.png"; // Import the background image correctly
import Carousel from "./Carousel";
import Productlist from "./Productlist";
import Homeproduct from "./Homeproduct";
import Carouselproduct from "./Carouselproduct";
import Carouselproduct2 from "./Carouselproduct2";
import About from "./About";
import Carouselproduct3 from "./Carouselproduct3";

const Home = () => {
  const isPlaying = useSelector((store) => store.video.isPlaying);
  return (
    <>
      <div className=" bg-slate-100">
        {!isPlaying && (
          <div>
            {/* <img src={img} alt="img1" className="mt-20 h-screen w-screen" /> */}
          </div>
        )}

        <NavBar />
        <Carousel />
        {/* <VideoPlayer /> */}
        <Carouselproduct />
        <Carouselproduct2 />
        <Carouselproduct3 />
        <About />
      </div>
    </>
  );
};

export default Home;
