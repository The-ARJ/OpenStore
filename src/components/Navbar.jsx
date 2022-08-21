import React from "react";
import { Link, NavLink } from "react-router-dom";
import {FaAngleDown} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div>
      {/* Navbar Start */}
      <div className="container-fluid mb-2 bg-success">
        <div className="row border-top px-xl-5 ">
          <div className="col-lg-3 d-none d-lg-block">
            <a
              className="btn shadow-none d-flex align-items-center justify-content-between bg-warning text-white w-100"
              data-toggle="collapse"
              href="#navbar-vertical"
              style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
            >
              <h6 className="m-0">Categories</h6>
              <FaAngleDown/>
            </a>
            <nav
              className="collapse  position-absolute navbar navbar-vertical navbar-light align-items-start -0 bg-success"
              id="navbar-vertical"
              style={{ width: "calc(100% - 30px)", zIndex: 1000 }}
            >
              <div
                className="navbar-nav w-100  overflow-hidden"
                style={{ height: 410 }}
              >
                <div className="nav-item dropdown ">
                  <a href="#" className="nav-link" data-toggle="dropdown">
                    Dresses <FaAngleDown className="float-right mt-1" />
                  </a>
                  <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                    <a href className="dropdown-item">
                      Men's Dresses
                    </a>
                    <a href className="dropdown-item">
                      Women's Dresses
                    </a>
                    <a href className="dropdown-item">
                      Baby's Dresses
                    </a>
                  </div>
                </div>
                <a href className="nav-item nav-link">
                  Shirts
                </a>
                <a href className="nav-item nav-link">
                  Jeans
                </a>
                <a href className="nav-item nav-link">
                  Swimwear
                </a>
                <a href className="nav-item nav-link">
                  Sleepwear
                </a>
                <a href className="nav-item nav-link">
                  Sportswear
                </a>
                <a href className="nav-item nav-link">
                  Jumpsuits
                </a>
                <a href className="nav-item nav-link">
                  Blazers
                </a>
                <a href className="nav-item nav-link">
                  Jackets
                </a>
                <a href className="nav-item nav-link">
                  Shoes
                </a>
              </div>
            </nav>
          </div>
          <div className="col-lg-9 ">
            <nav className="navbar bg-success navbar-expand-lg  navbar-light py-3 py-lg-0 px-0">
              <NavLink to='/' className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="text-warning font-weight-bold">Open</span>
                  Store
                </h1>
              </NavLink>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse text-center justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav  mr-auto py-0">
                  <NavLink to="/" className="nav-item  nav-link">
                    Home
                  </NavLink>
                  <NavLink to="/shop" className="nav-item nav-link">
                    Shop
                  </NavLink>
                  <NavLink to="/about" className="nav-item nav-link">
                    About
                  </NavLink>
                  <NavLink to="/contact" className="nav-item nav-link">
                    Contact
                  </NavLink>

                  {/* <div className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <div className="dropdown-menu rounded-0 m-0">
                      <a href="cart.html" className="dropdown-item">
                        Shopping Cart
                      </a>
                      <a href="checkout.html" className="dropdown-item">
                        Checkout
                      </a>
                    </div>
                  </div> */}
         
                </div>
                <div className="navbar-nav ml-auto py-0">
                  <NavLink to='' className="nav-item nav-link">
                    Login
                  </NavLink>
                  <NavLink to='' className="nav-item nav-link">
                    Register
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Navbar End */}
    </div>
  );
};

export default Navbar;
