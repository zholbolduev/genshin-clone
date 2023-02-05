import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./homeStyle/home.css";
import HomeNews from "./HomeNews";
import Footer from "../Footer/Footer";
import HomeRegions from "./HomeRegions";
import video from "./images/genshin-bg-video.mp4";
const Home = () => {
  return (
    <div className="homePage">
      <video autoPlay loop muted>
        <source src={video} type="audio/mp4" />
      </video>
      <HomeNews />
      <HomeRegions />
    </div>
  );
};

export default Home;
