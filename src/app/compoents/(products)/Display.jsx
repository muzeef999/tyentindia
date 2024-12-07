"use client"
import React, { useEffect } from 'react';
import display from "../../../asserts/display/pro_06.png";
import display1 from "../../../asserts/display/pro_07.png";
import display2 from "../../../asserts/display/pro_08.png";
import display3 from "../../../asserts/display/pro_09.png";
import display4 from "../../../asserts/display/pro_10.png";
import display5 from "../../../asserts/display/pro_11.png";
import display6 from "../../../asserts/display/pro_12.png";
import Image from 'next/image';
import Aos from 'aos';

const Display = () => {
  const images = [
    { src: display, alt: "Alkaline level", range:"3 - 9.5 pH" },
    { src: display1, alt: "Alkaline level", range:"1 - 8.5 pH" },
    { src: display2, alt: "Acidic level", range:"1 - 4 pH" },
    { src: display3, alt: "H2O", range:"Purified Water 7 pH" },
    { src: display4, alt: "Acidic", range:"2 - 5.5 pH" },
    { src: display5, alt: "Alkaline Turbo", range:" 11.5 pH" },
    { src: display6, alt: "Alkaline level", range:" 2 - 9 pH" },
  ];


  useEffect(() => {
    Aos.init({ duration: 1000 }); // Animation duration in ms
  }, []);


  return (
    <div className="container text-center">
      <h2 style={{ color: '#008AC7', fontWeight: '600' }}>Easy To Use One Touch Display</h2>
      <p style={{ fontSize: '14px', fontWeight: 500 }}>
        Each function has distinct icons, and you can start or stop the <br /> desired water with one touch.
      </p>
      <div className="row align-items-center justify-content-center">
        {images.map((image, index) => (
          <div
            className="col-12 col-sm-8 col-md-6 p-3"
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} // Alternate animations
          >
            <div>
              <h4 className="m-0" style={{ fontWeight: 600 }}>{image.alt}</h4>
              <p style={{ fontSize: '18px', fontWeight: 400, color: '#008AC7' }}>{image.range}</p>
              <Image
                src={image.src}
                alt={image.alt}
                className="img-fluid"
                style={{ border: '1px solid #000', borderRadius: '5px' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
