import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./homeStyle/home.css";
import HomeNews from "./HomeNews";
import Footer from "../Footer/Footer";
import HomeRegions from "./HomeRegions";
const Home = () => {
  return (
    <div className="parallax-div">
      <Parallax pages={4} style={{ top: "0", left: "0" }} class="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div class="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="grass-back"></div>
        </ParallaxLayer> */}
        <ParallaxLayer offset={0} speed={0.29}>
          <div class="animation_layer parallax" id="grass-front"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <HomeNews />
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <HomeRegions />
        </ParallaxLayer>
        <ParallaxLayer offset={3.25} style={{ overflow: "hidden" }}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
