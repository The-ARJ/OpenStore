import React from 'react'
import { FaAngleRight } from "react-icons/fa";

const QuickLinks = () => {
  return (
    <>
    
                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-dark mb-2" href="index.html">
                  <FaAngleRight className="mr-2" />
                    Home
                  </a>
                  <a className="text-dark mb-2" href="shop.html">
                    <FaAngleRight className="mr-2" />
                    Our Shop
                  </a>
                  <a className="text-dark mb-2" href="detail.html">
                  <FaAngleRight className="mr-2" />
                    Shop Detail
                  </a>
                  <a className="text-dark mb-2" href="cart.html">
                  <FaAngleRight className="mr-2" />
                    Shopping Cart
                  </a>
                  <a className="text-dark mb-2" href="checkout.html">
                  <FaAngleRight className="mr-2" />
                    Checkout
                  </a>
                  <a className="text-dark" href="contact.html">
                  <FaAngleRight className="mr-2" />
                    Contact Us
                  </a>
                </div>
    </>
  )
}

export default QuickLinks