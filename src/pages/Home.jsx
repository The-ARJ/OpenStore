import React from 'react'
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";



const Home = () => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="myswiper"


    
    
      >
        <SwiperSlide><img className='imgswiper' src="../assets/29.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgswiper' src="../assets/30.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgswiper' src="../assets/31.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgswiper' src="../assets/32.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgswiper' src="../assets/33.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgswiper' src="../assets/34.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgswiper' src="../assets/35.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgswiper' src="../assets/36.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgswiper' src="../assets/37.jpg" alt="" /></SwiperSlide>
      </Swiper>

    {/* Featured Start */}
    <div className="container-fluid pt-5">
      <div className="row px-xl-5 pb-3">
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div
            className="d-flex align-items-center border mb-4"
            style={{ padding: 30 }}
          >
            <h1 className="fa fa-check text-success m-0 mr-3" />
            <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div
            className="d-flex align-items-center border mb-4"
            style={{ padding: 30 }}
          >
            <h1 className="fa fa-shipping-fast text-success m-0 mr-2" />
            <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div
            className="d-flex align-items-center border mb-4"
            style={{ padding: 30 }}
          >
            <h1 className="fas fa-exchange-alt text-success m-0 mr-3" />
            <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div
            className="d-flex align-items-center border mb-4"
            style={{ padding: 30 }}
          >
            <h1 className="fa fa-phone-volume text-success m-0 mr-3" />
            <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
          </div>
        </div>
      </div>
    </div>
    {/* Featured End */}
    {/* Categories Start */}
    <div className="container-fluid pt-5">
      <div className="row px-xl-5 pb-3">
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: 30 }}
          >
            <p className="text-right">15 Products</p>
            <a
              href
              className="cat-img position-relative overflow-hidden mb-3"
            >
              <img className="img-fluid" src="../assets/cat-1.jpg" alt />
            </a>
            <h5 className="font-weight-semi-bold m-0">Men's dresses</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: 30 }}
          >
            <p className="text-right">15 Products</p>
            <a
              href
              className="cat-img position-relative overflow-hidden mb-3"
            >
              <img className="img-fluid" src="../assets/cat-2.jpg" alt />
            </a>
            <h5 className="font-weight-semi-bold m-0">Women's dresses</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: 30 }}
          >
            <p className="text-right">15 Products</p>
            <a
              href
              className="cat-img position-relative overflow-hidden mb-3"
            >
              <img className="img-fluid" src="../assets/cat-3.jpg" alt />
            </a>
            <h5 className="font-weight-semi-bold m-0">Baby's dresses</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: 30 }}
          >
            <p className="text-right">15 Products</p>
            <a
              href
              className="cat-img position-relative overflow-hidden mb-3"
            >
              <img className="img-fluid" src="../assets/cat-4.jpg" alt />
            </a>
            <h5 className="font-weight-semi-bold m-0">Accerssories</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: 30 }}
          >
            <p className="text-right">15 Products</p>
            <a
              href
              className="cat-img position-relative overflow-hidden mb-3"
            >
              <img className="img-fluid" src="../assets/cat-5.jpg" alt />
            </a>
            <h5 className="font-weight-semi-bold m-0">Bags</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: 30 }}
          >
            <p className="text-right">15 Products</p>
            <a
              href
              className="cat-img position-relative overflow-hidden mb-3"
            >
              <img className="img-fluid" src="../assets/cat-6.jpg" alt />
            </a>
            <h5 className="font-weight-semi-bold m-0">Shoes</h5>
          </div>
        </div>
      </div>
    </div>
    {/* Categories End */}
    {/* Offer Start */}
    <div className="container-fluid offer pt-5">
      <div className="row px-xl-5">
        <div className="col-md-6 pb-4">
          <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
            <img src="../assets/offer-1.png" alt />
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
          <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
            <img src="../assets/offer-2.png" alt />
            <div className="position-relative" style={{ zIndex: 1 }}>
              <h5 className="text-uppercase text-success mb-3">
                20% off the all order
              </h5>
              <h1 className="mb-4 font-weight-semi-bold">
                Winter Collection
              </h1>
              <a href className="btn btn-outline-success py-md-2 px-md-3">
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
          <span className="px-2">Trandy Products</span>
        </h2>
      </div>
      <div className="row px-xl-5 pb-3">
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img
                className="img-fluid w-100"
                src="../assets/product-1.jpg"
                alt
              />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>$123.00</h6>
                <h6 className="text-muted ml-2">
                  <del>$123.00</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-success mr-1" />
                View Detail
              </a>
              <a href className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-success mr-1" />
                Add To Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img
                className="img-fluid w-100"
                src="../assets/product-2.jpg"
                alt
              />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>$123.00</h6>
                <h6 className="text-muted ml-2">
                  <del>$123.00</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-success mr-1" />
                View Detail
              </a>
              <a href className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-success mr-1" />
                Add To Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img
                className="img-fluid w-100"
                src="../assets/product-3.jpg"
                alt
              />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>$123.00</h6>
                <h6 className="text-muted ml-2">
                  <del>$123.00</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-success mr-1" />
                View Detail
              </a>
              <a href className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-success mr-1" />
                Add To Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img
                className="img-fluid w-100"
                src="../assets/product-4.jpg"
                alt
              />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>$123.00</h6>
                <h6 className="text-muted ml-2">
                  <del>$123.00</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-success mr-1" />
                View Detail
              </a>
              <a href className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-success mr-1" />
                Add To Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img
                className="img-fluid w-100"
                src="../assets/product-5.jpg"
                alt
              />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>$123.00</h6>
                <h6 className="text-muted ml-2">
                  <del>$123.00</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-success mr-1" />
                View Detail
              </a>
              <a href className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-success mr-1" />
                Add To Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img
                className="img-fluid w-100"
                src="../assets/product-6.jpg"
                alt
              />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>$123.00</h6>
                <h6 className="text-muted ml-2">
                  <del>$123.00</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-success mr-1" />
                View Detail
              </a>
              <a href className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-success mr-1" />
                Add To Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img
                className="img-fluid w-100"
                src="../assets/product-7.jpg"
                alt
              />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>$123.00</h6>
                <h6 className="text-muted ml-2">
                  <del>$123.00</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-success mr-1" />
                View Detail
              </a>
              <a href className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-success mr-1" />
                Add To Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img
                className="img-fluid w-100"
                src="../assets/product-8.jpg"
                alt
              />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>$123.00</h6>
                <h6 className="text-muted ml-2">
                  <del>$123.00</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-success mr-1" />
                View Detail
              </a>
              <a href className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-success mr-1" />
                Add To Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Products End */}
    
    

  
  </>
  )
}

export default Home