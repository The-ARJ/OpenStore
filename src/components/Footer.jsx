import React from "react";
import { useState, useEffect } from "react";
import { FaAngleUp,FaMapMarkerAlt,FaEnvelope,FaPhoneAlt } from "react-icons/fa";
import SocialMedia from "./SocialMedia";
import QuickLinks from "./QuickLinks";
import NewsLetter from "./NewsLetter";
import payments from "../assets/payments.png";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="container-fluid bg-warning text-dark mt-5 pt-2">
        <div className="row px-xl-5  pt-5">
          <div className="col-lg-4  col-md-12 mb-5 pr-3 pr-xl-5">
            <a href className="text-decoration-none">
              <h1 className="mb-4 display-5 font-weight-semi-bold">
                <span className="text-success font-weight-bold px-0 mr-1">
                  Open
                </span>
                Store
              </h1>
            </a>
            <p>
              Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum
              no sit erat lorem et magna ipsum dolore amet erat.
            </p>
            <p className="mb-2">
              <FaMapMarkerAlt className=" text-success mr-3" />
              Basundhara, Kathmandu, Nepal
            </p>
            <p className="mb-2">
              <FaEnvelope className="text-success mr-3" />
              joshiaayush871@gmail.com
            </p>
            <p className="mb-0">
              <FaPhoneAlt className=" text-success mr-3" />
              +977 9818984104
            </p>
          </div>
          <div className="col-lg-8 col-md-12  ">
            <div className="row">
            <div className="col-md-4 col-6 mb-5">
              <QuickLinks />
              </div>
              <div className="col-md-4 col-6 mb-5">
                <SocialMedia />
              </div>
              <NewsLetter />
            </div>
          </div>
        </div>
        <div className="row border-top border-light mx-xl-5 py-4">
          <div className="col-md-6 px-xl-0">
            <p className="mb-md-0 text-center text-md-left text-dark">
              ©{" "}
              <a className="text-dark font-weight-semi-bold" href="#">
                OpenStore
              </a>
              . All Rights Reserved.
              <br />
              Designed and Developed By{" "}
              <a
                href="https://aayushrajjoshi.com.np/"
                className="text-success"
                target="_blank"
              >
                Aayush Raj Joshi
              </a>
            </p>
          </div>
          <div className="col-md-6 px-xl-0 text-center text-md-right">
            <img className="img-fluid" src={payments} alt />
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Back to Top */}
      <div className="top-to-btm">
        {" "}
        {showTopBtn && (
          <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
        )}{" "}
      </div>
    </div>
  );
};

export default Footer;
