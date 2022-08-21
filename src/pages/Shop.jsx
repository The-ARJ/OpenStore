import React, { useEffect, useState } from "react";
import FilterBy from "../components/FilterBy";
import Pagination from "../components/Pagination";

import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import MultiCarousel from "../components/MultiCarousel";
import axios from "axios";
const Shop = () => {

  // Using Fetch 
  
  // const [Products, setProduct] = useState([]);

  // const getData = async () => {
  //   const response = await fetch("https://fakestoreapi.com/products");
  //   setProduct(await response.json());
  // };

  // useEffect(() => {
  //   getData();
  // }, []);


  // USing Axios to Fetch Data
  const [Products, setProduct] = useState([]);
  const getData = async()=>{
    const response = await axios.get('https://fakestoreapi.com/products')
    setProduct(response.data)
  }
  useEffect(() => {
    getData();
  }, []);


  
  return (
    <div>
      {/* Page Header Start */}
      <div className="container-fluid bg-light mb-5">
        <MultiCarousel />

        {/* Shop Start */}
        <div className="container-fluid pt-5">
          <div className="row px-xl-5">
            <FilterBy />
            {/* Shop Product Start */}
            <div className="col-lg-9 col-md-12">
              <div className="row pb-3">
                <div className="col-12 pb-1">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <form action>
                      <div className="input-group border border-warning">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search by name"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text bg-transparent text-primary">
                            <FaSearch className="text-success" />
                          </span>
                        </div>
                      </div>
                    </form>
                    <div className="dropdown ml-4">
                      <button
                        className="btn border border border-warning dropdown-toggle"
                        type="button"
                        id="triggerId"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Sort by
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="triggerId"
                      >
                        <a className="dropdown-item" href="#">
                          Latest
                        </a>
                        <a className="dropdown-item" href="#">
                          Popularity
                        </a>
                        <a className="dropdown-item" href="#">
                          Best Rating
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row px-xl-5 pb-3 d-inline-flex justify-content-center">
                  {Products.map((prod) => {
                    return (
                      <div className="col-lg-3  col-md-3 col-5 pb-1">
                      <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                          <img className="img-fluid w-100" src={prod.image} style={{height:'35vh',width:'15vw'}} alt />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                          <h6 className="text-truncate mb-3">
                            {prod.title}
                          </h6>
                          <div className="d-flex justify-content-center">
                            <h6 className="small">${prod.price}</h6>
                            <h6 className="text-muted small ml-2">
                              <del>$123.00</del>
                            </h6>
                          </div>
                        </div>
                        <button className="card-footer d-flex justify-content-center bg-secondary border">
                          <div className=" small  text-dark p-0">
                            <i className="fas fa-shopping-cart text-success mr-1" />
                            Add To Cart
                          </div>
                        </button>
                      </div>
                    </div>
                    );
                  })}
                 
                </div>

                <Pagination />
              </div>
            </div>
            {/* Shop Product End */}
          </div>
        </div>
        {/* Shop End */}
      </div>
      {/* Page Header End */}
    </div>
  );
};

export default Shop;
