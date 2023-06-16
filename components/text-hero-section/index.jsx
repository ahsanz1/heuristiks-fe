"use client";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";

const TextHeroSection = ({ Heading, Subtitle, CTAText }) => {
  const [ctaHovered, setCtaHovered] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const divElement = divRef.current;
    if (divElement) {
      divElement.classList.add("fade-in-bottom");
    }
  }, []);
  return (
    <div
      className="px-2 pt-20 pb-12 font-sans md:my-0 md:mx-auto md:py-32"
      ref={divRef}
    >
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold leading-[58px] md:text-7xl md:leading-[86px]">
          {Heading}
        </h1>
        <p className="text-xl leading-8 text-[#7f7f7f] md:text-2xl md:leading-[38px] md:max-w-[70%]">
          {Subtitle}
        </p>
        <div
          className="flex flex-row mt-8 items-center gap-x-2 md:mt-12 cursor-pointer"
          onMouseEnter={(e) => {
            e.preventDefault();
            setCtaHovered(!ctaHovered);
          }}
          onMouseLeave={(e) => {
            e.preventDefault();
            setCtaHovered(!ctaHovered);
          }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 625, behavior: "smooth" });
          }}
        >
          <p className="text-base font-semibold leading-[26px] md:text-2xl">
            {CTAText}
          </p>
          <FontAwesomeIcon
            icon={faArrowDown}
            fontSize="14px"
            className={`${ctaHovered ? "opacity-100" : "opacity-50"} text-xl`}
          />
        </div>
      </div>
    </div>
  );
};

export default TextHeroSection;
