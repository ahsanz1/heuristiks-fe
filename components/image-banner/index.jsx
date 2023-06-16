"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const ImageBanner = ({ Image }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      data-aos="fade-in"
      data-aos-duration="2500"
      className="my-32 max-w-[100vw] overflow-x-scroll md:overflow-x-auto md:mx-32"
    >
      <img className="w-[274vw] md:w-full h-auto max-w-none" src={Image}></img>
    </div>
  );
};

export default ImageBanner;
