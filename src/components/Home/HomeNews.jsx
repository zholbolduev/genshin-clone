import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const homeNews = () => {
  return (
    <div className="news">
      <h3>NEWS</h3>
      <div className="news-main">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <img
              src="https://webstatic.hoyoverse.com/upload/op-public/2023/01/28/c9b5b12bbad46d47ae66d5f5aed380d3_3977482022795869516.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://webstatic.hoyoverse.com/upload/op-public/2023/01/28/531021916b638a8aca59d0bd507957d4_6173957124329751789.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://webstatic.hoyoverse.com/upload/op-public/2023/01/23/bd4ed8c3329b128cdb2b32b76a6f3278_7322964754142710898.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://webstatic.hoyoverse.com/upload/op-public/2023/01/22/4f532c510529dab1e61fbab400fc654e_6713577028753620746.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <div className="news__content">
          <ul className="news__tab__list">
            <li className="news__tab__item">Latest</li>
          </ul>
          <ul className="news-list">
            <li>
              <a className="news__item" href="#">
                <p className="news__title">
                  Web Event "Iridescence in Papers" Now Online: Take part...
                </p>
                <p className="news__item__date">Jan 29, 2023</p>
              </a>
            </li>
            <li>
              <a className="news__item" href="#">
                <p className="news__title">
                  "A Journey of Art and Heritage" - Adeptal Tales: Inside...
                </p>
                <p className="news__item__date">Jan 28, 2023</p>
              </a>
            </li>
            <li>
              <a className="news__item" href="#">
                <p className="news__item">
                  "A Journey of Art and Heritage" - Adeptal Tales: New Year
                  Wo...
                </p>
                <p className="news__item__date">Jan 24, 2023</p>
              </a>
            </li>
            <li>
              <a className="news__item" href="#">
                <p className="news__title">
                  Lantern Rite Promotional Video: Dream Upon a Lantern...
                </p>
                <p className="news__item__date">Jan 22, 2023</p>
              </a>
            </li>
            <li>
              <a className="news__item" href="#">
                <p className="news__item__title">
                  The Exquisite Night Chimes Cutscene Animation: "A Brilli...
                </p>
                <p className="news__item__date">Jan 21, 2023</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default homeNews;
