import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./homeStyle/home.css";

const HomeRegions = () => {
  const navigate = useNavigate();
  return (
    <div className="city">
      <ul className="city__list">
        <Link to="/products?q=&region=Mondstadt">
          <li className="city__item" id="mond">
            <div className="city__item-bg">
              <p>Mondstadt</p>
            </div>
          </li>
        </Link>
        <Link to="/products">
          <li className="city__item" id="liyue">
            <div className="city__item-bg">
              <p>Liyue</p>
            </div>
          </li>
        </Link>
        <Link to="/products">
          <li className="city__item" id="inazuma">
            <div className="city__item-bg">
              <p>Inazuma</p>
            </div>
          </li>
        </Link>
        <Link to="/products">
          <li className="city__item" id="sumeru">
            <div className="city__item-bg">
              <p>Sumeru</p>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default HomeRegions;
