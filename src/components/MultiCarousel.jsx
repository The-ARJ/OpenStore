import React, { useEffect, useState } from "react";
import eleven from "../assets/11.jpg";
import twelve from "../assets/12.jpg";
import thirteen from "../assets/13.jpg";
import fourteen from "../assets/14.jpg";
import fifteen from "../assets/15.jpg";
import sixteen from "../assets/16.jpg";
import seventeen from "../assets/17.jpg";
import eighteen from "../assets/18.jpg";
import ninteen from "../assets/19.jpg";
import twenty from "../assets/20.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const MultiCarousel = () => {
  const [Products, setProduct] = useState([]);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    setProduct(await response.json());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* Products Start */}
      <OwlCarousel
        className="owl-theme "
        loop
        margin={1}
        items={4}
        autoplay={true}
        nav
      >
        {Products.map((prod) => {
          return (
            <div>
              <div class="item img-fluid" >
                <img src={prod.image} style={{height:'35vh',width:'15vw'}} />
              </div>
            </div>
          );
        })}

      </OwlCarousel>

      {/* Products End */}
    </>
  );
};

export default MultiCarousel;
