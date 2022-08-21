import React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {FaCheck,FaShippingFast,FaExchangeAlt,FaPhoneAlt,FaShoppingCart} from "react-icons/fa"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

//import assets
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import six from "../assets/6.jpg";
import seven from "../assets/7.jpg";
import eight from "../assets/8.jpg";
import nine from "../assets/9.jpg";
import ten from "../assets/10.jpg";
import twentynine from "../assets/29.jpg";
import thirty from "../assets/30.jpg";
import thirtyone from "../assets/31.jpg";
import thirtytwo from "../assets/32.jpg";
import thirtythree from "../assets/33.jpg";
import thirtyfour from "../assets/34.jpg";
import thirtyfive from "../assets/35.jpg";
import thirtysix from "../assets/36.jpg";
import thiryseven from "../assets/37.jpg";
import thirtynine from "../assets/39.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Home = () => {
  return (
    <>
        {/* Products Start */}
        <OwlCarousel className="owl-theme " loop margin={1} items={3} autoplay={true} nav>
        <div class="item ">
          <img src={twentynine} />
        </div>
        <div class="item ">
          <img src={thirty} />
        </div>
        <div class="item ">
          <img src={thirtyone} />
        </div>
        <div class="item ">
          <img src={thirtytwo} />
        </div>
        <div class="item ">
          <img src={thirtyfour} />
        </div>
        <div class="item ">
          <img src={thirtyfive} />
        </div>
        <div class="item ">
          <img src={thirtysix} />
        </div>
        <div class="item ">
          <img src={thiryseven} />
        </div>

      </OwlCarousel>

      {/* Featured Start */}
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-warning  border mb-2"
              style={{ padding: 30 }}
            >
              <FaCheck className="h1 text-success m-0 mr-3" />
              <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-warning  border mb-2"
              style={{ padding: 30 }}
            >
              <FaShippingFast className="h1 text-success m-0 mr-3" />
              <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-warning border mb-2"
              style={{ padding: 30 }}
            >
               <FaExchangeAlt class="h1 text-success  m-0 mr-3" />
              <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-warning  border mb-2"
              style={{ padding: 30 }}
            >
              <FaPhoneAlt className="h1 text-success m-0 mr-3" />
              <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Featured End */}
      {/* Categories Start */}
      <div className="container-fluid pt-2">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Categories</span>
          </h2>
        </div>
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-4 col-6  pb-12">
            <div
              className="cat-item d-flex flex-column border border-warning  mb-4"
              style={{ padding: 30 }}
            >
              <p className="text-center">15 Products</p>
              <a
                href
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img className="img-fluid" src={two} alt="" />
              </a>
              <h5 className="font-weight-semi-bold m-0 text-center">
                Men's dresses
              </h5>
            </div>
          </div>
          <div className="col-lg-3 col-6  col-md-4 pb-1">
            <div
              className="cat-item d-flex flex-column border border-warning mb-4"
              style={{ padding: 30 }}
            >
              <p className="text-center">15 Products</p>
              <a
                href
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img className="img-fluid" src={one} alt="" />
              </a>
              <h5 className="font-weight-semi-bold m-0 text-center">
                Women's dresses
              </h5>
            </div>
          </div>
          <div className="col-lg-3 col-6 col-md-4 pb-1">
            <div
              className="cat-item d-flex flex-column border border-warning  mb-4"
              style={{ padding: 30 }}
            >
              <p className="text-center">15 Products</p>
              <a
                href
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img className="img-fluid" src={three} alt="" />
              </a>
              <h5 className="font-weight-semi-bold m-0  text-center">
                Kids's dresses
              </h5>
            </div>
          </div>

          <div className="col-lg-3 col-6 col-md-4 pb-1">
            <div
              className="cat-item d-flex flex-column border border-warning  mb-4"
              style={{ padding: 30 }}
            >
              <p className="text-center">15 Products</p>
              <a
                href
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img className="img-fluid" src={thirtynine} alt="" />
              </a>
              <h5 className="font-weight-semi-bold m-0 text-center">
                Elder's dresses
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/* Categories End */}
      {/* Offer Start */}
      <div className="container-fluid offer pt-5">
        <div className="row px-xl-5">
          <div className="col-md-6 pb-4">
            <div className="position-relative bg-secondary  text-right text-md-right text-white mb-2 py-5 px-5">
              <img img-fluid src={nine} alt="" />
              <div className="position-relative" style={{ zIndex: 1 }}>
                <h5 className="text-uppercase text-success mb-3">
                  20% off the all order
                </h5>
                <h1 className="mb-4 font-weight-semi-bold">
                  Spring Collection
                </h1>
                <a href className="btn btn-outline-success py-md-2 px-md-3">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 pb-4">
            <div className="position-relative bg-secondary text-left text-md-left text-white mb-2 py-5 px-5">
              <img className="img-fluid" src={ten} alt="" />
              <div className="position-relative" style={{ zIndex: 1 }}>
                <h5 className="text-uppercase text-success mb-3">
                  20% off the all order
                </h5>
                <h1 className="mb-4 font-weight-semi-bold">
                  Winter Collection
                </h1>
                <a href className="btn btn-outline-success py-md-2  px-md-3">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Offer End */}
      {/* Products Start */}
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Trendy Products</span>
          </h2>
        </div>
        <div className="row px-xl-5 pb-3 d-inline-flex justify-content-center">
          <div className="col-lg-2 col-md-3 col-5 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src={three} alt="" />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div className="d-flex justify-content-center">
                  <h6 className="small ">$123.00</h6>
                  <h6 className="text-muted small ml-1">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <button className="card-footer d-flex justify-content-center bg-secondary border">
                <div className="  text-dark small p-0">
                  <FaShoppingCart className=" text-success mr-1" />
                  Add To Cart
                </div>
              </button>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-5 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src={four} alt="" />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div className="d-flex justify-content-center">
                  <h6 className="small">$123.00</h6>
                  <h6 className="text-muted small ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <button className="card-footer d-flex justify-content-center bg-secondary border">
                <div className="  text-dark small p-0">
                <FaShoppingCart className=" text-success mr-1" />
                  Add To Cart
                </div>
              </button>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-5 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src={five} alt="" />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div className="d-flex justify-content-center">
                  <h6 className="small">$123.00</h6>
                  <h6 className="text-muted small ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <button className="card-footer d-flex justify-content-center bg-secondary border">
                <div className=" small text-dark p-0">
                <FaShoppingCart className=" text-success mr-1" />
                  Add To Cart
                </div>
              </button>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-5 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src={six} alt="" />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div className="d-flex justify-content-center">
                  <h6 className="small">$123.00</h6>
                  <h6 className="text-muted small ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <button className="card-footer d-flex justify-content-center bg-secondary border">
                <div className=" text-dark small p-0">
                <FaShoppingCart className=" text-success mr-1" />
                  Add To Cart
                </div>
              </button>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-5 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src={seven} alt="" />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div className="d-flex justify-content-center">
                  <h6 className="small">$123.00</h6>
                  <h6 className="text-muted small ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <button className="card-footer d-flex justify-content-center bg-secondary border">
                <div className=" text-dark small p-0">
                <FaShoppingCart className=" text-success mr-1" />
                  Add To Cart
                </div>
              </button>
            </div>
          </div>
          <div className="col-lg-2 col-md-3  col-5 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src={eight} alt="" />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div className="d-flex justify-content-center">
                  <h6 className="small">$123.00</h6>
                  <h6 className="text-muted small ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <button className="card-footer d-flex justify-content-center bg-secondary border">
                <div className=" small text-dark p-0">
                <FaShoppingCart className=" text-success mr-1" />
                  Add To Cart
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Products End */}
    </>
  );
};

export default Home;
