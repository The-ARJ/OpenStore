import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsWhatsapp,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import {  FaTiktok } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <>
      <h5 className="font-weight-bold text-dark mb-4">Socail Media</h5>
      <div className="d-flex flex-column justify-content-start">
        <a className="text-dark mb-2" href="index.html">
          <BsFacebook className="mr-2" />
          Facebook
        </a>
        <a className="text-dark mb-2" href="shop.html">
          <BsInstagram className="mr-2" />
          Instagram
        </a>
        <a className="text-dark mb-2" href="detail.html">
          <BsWhatsapp className="mr-2" />
          Whatsapp
        </a>
        <a className="text-dark mb-2" href="cart.html">
          <FaTiktok className="mr-2" />
          TikTok
        </a>
        <a className="text-dark mb-2" href="checkout.html">
          <BsTwitter className="mr-2" />
          Twitter
        </a>
        <a className="text-dark" href="contact.html">
          <BsPinterest className="mr-2" />
          Pinterest
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
