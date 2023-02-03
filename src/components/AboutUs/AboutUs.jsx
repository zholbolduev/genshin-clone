import React from "react";
import "../AboutUs/AboutUs.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="main">
      <div className="content">
        <h1>Welcome</h1>
        <p>to Genshin Impact</p>
      </div>
      <h2>Pictures</h2>
      <div className="swiper-container">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://cdn.oneesports.gg/cdn-data/2022/12/GenshinImpact_TravelerTwins_Venti_Nahida_Wallpaper.jpg"
              alt="Loading..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.mos.cms.futurecdn.net/b8sPeUP33JFru9sjkfjTM5.jpg"
              alt="Loading..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ytimg.com/vi/H2LaRCieieM/maxresdefault.jpg"
              alt="Loading..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn2.unrealengine.com/genshin-impact-update-version-2-5-when-the-sakura-bloom-available-february-16-3840x2160-5d452c5c7040.png"
              alt="Loading..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.oneesports.gg/cdn-data/2022/12/GenshinImpact_Scaramouche_Wallpaper.jpg"
              alt="Loading..."
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <h2>Game Features</h2>
      <div className="features-content">
        <img
          className="features-img-right1"
          src="https://cdn.shazoo.ru/468905_qYjlqY7SP2_genshin.jpeg"
          alt="Loading..."
        />
        <div className="text-right1">
          <h3>An Epic Fantasy Adventure</h3>
          <p>
            Experience an immersive single-player campaign. As a traveler from
            another world, you will embark on a journey to reunite with your
            long-lost sibling and unravel the mysteries of Teyvat, and yourself.
          </p>
        </div>
        <img
          className="features-img-left"
          src="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2021/05/genshin-impact-inazuma.jpg"
          alt="Loading..."
        />
        <div className="text-left">
          <h3>Your World to Discover</h3>
          <p>
            Fly across the open world, swim through crystal-clear waters, and
            climb towering mountains. Stray off the beaten path to discover all
            the hidden secrets of a world full of wonder and mystery.
          </p>
        </div>
        <img
          className="features-img-right"
          src="https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200924/2020092418412067196.png"
          alt="Loading..."
        />
        <div className="text-right">
          <h3>Travel Alone or Battle Together</h3>
          <p>
            Charge head-on into battles solo, or invite friends to join the
            fight against dangerous monsters with 4-player cross-play for PS4,
            iOS, Android, and PC.
          </p>
        </div>
        <img
          className="features-img-left"
          src="https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200924/2020092418412659408.png"
          alt="Loading..."
        />
        <div className="text-left">
          <h3>Master the Seven Elements</h3>
          <p>
            Not just another mindless hack and slash. Manipulating the various
            elements is the key to defeating powerful enemies and solving
            challenging puzzles.
          </p>
        </div>
        <img
          className="features-img-right"
          src="https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200924/2020092418413164488.png"
          alt="Loading..."
        />
        <div className="text-right">
          <h3>Build Your Dream Team</h3>
          <p>
            Choose who fights by your side. Build your party from over 20+
            characters (with more to come) — each with unique abilities,
            personalities, and combat styles.
          </p>
        </div>
      </div>
      <Link to="/products">
        <button className="btn-nav">View Characters</button>
      </Link>
    </div>
  );
};

export default AboutUs;
