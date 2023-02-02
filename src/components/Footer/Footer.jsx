import React from "react";
import "./footer.css";
import { TbBrandFacebook } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <a href="#" className="footer__social"></a>
        <a href="#" className="footer__social"></a>
        <a href="#" className="footer__social"></a>
        <a href="#" className="footer__social"></a>
        <a href="#" className="footer__social"></a>
        <a href="#" className="footer__social"></a>
        <a href="#" className="footer__social"></a>
      </div>
      <div className="footer-bottom">
        <div className="footer__logo">
          <img
            src="https://uploadstatic-sea.mihoyo.com/hk4e/upload/officialsites/202004/GIEN_1587984203_6764.png"
            alt=""
          />
        </div>
        <ul className="footer__list">
          <a
            href="https://genshin.hoyoverse.com/en/company/privacy"
            target="_blank"
          >
            <li className="footer__link">Privacy Policy</li>
          </a>
          <a
            href="https://genshin.hoyoverse.com/en/company/terms"
            target="_blank"
          >
            <li className="footer__link">Terms of Service</li>
          </a>
          <a
            href="https://www.hoyoverse.com/en-us/about-us?utm_source=genshin&utm_medium=footer"
            target="_blank"
          >
            <li className="footer__link">About Us</li>
          </a>
          <a href="" target="_blank">
            <li className="footer__link">Contact Us</li>
          </a>
        </ul>
        <div className="footer__complience">
          <a href="#">
            <img
              src="https://webstatic.hoyoverse.com/upload/event/2022/12/20/c7c1a9b9e10646a8189632dde6a1747d_3319536451262499010.png"
              alt=""
            />
          </a>
        </div>
        <div className="footer__text">
          <p>
            "PlayStation Family Mark," "PS5 logo" and "PS4 logo" are registered
            trademarks or trademarks of Sony Interactive Entertainment Inc.
            <br />
            Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and
            Epic Online Services are trademarks and/or registered trademarks of
            Epic Games. All other trademarks are the property of their
            respective owners.
          </p>
        </div>
        <div className="footer__hoyo">
          <img
            src="https://webstatic.hoyoverse.com/upload/event/2021/12/29/eaa64d81ae6a7318a6afb91cbffd83a4_118924438105936743.png"
            alt=""
          />
        </div>
        <div className="footer__rights">
          <p>Copyright © COGNOSPHERE. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
