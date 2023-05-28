import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const CaseStudyBanner = async ({
  Title,
  Headline,
  CTAlink,
  CTAtext,
  BackgroundColor,
  BackgroundImage,
}) => {
  // const pageData = await fetchPage("home");
  // const caseStudyBannerProps = pageData.content.body[0];
  // const {
  //   Title,
  //   Headline,
  //   CTAlink,
  //   CTAtext,
  //   BackgroundColor,
  //   BackgroundImage,
  // } = caseStudyBannerProps;
  // //   console.log(caseStudyBannerProps);
  // console.log("BackgroundImage: ", BackgroundImage);
  return (
    <div
      className="flex flex-col justify-between rounded-md md:flex-row-reverse items-center md:max-h-[650px]"
      style={{ backgroundColor: BackgroundColor }}
    >
      <div className="p-1 w-full flex-1 md:h-[650px] md:relative">
        <img
          src={BackgroundImage.filename}
          className="md:absolute top-0 left-0 right-0 bottom-0 md:h-full object-contain"
        ></img>
      </div>
      <div className="p-6 flex-1">
        <p className="font-sans text-xl text-white leading-8 md:text-2xl md:font-light">
          {Title}
        </p>
        <h2 className="font-sans text-2xl text-white font-bold mb-2 leading-7 md:text-4.5xl md:leading-10">
          {Headline}
        </h2>
        <div
          className="w-14 mt-6 mb-8 bg-white"
          style={{ height: "2px" }}
        ></div>
        <Link className="flex flex-row items-center" href={"/"}>
          <p className="font-sans text-base text-white font-semibold leading-5">
            {CTAtext}
          </p>
          <FontAwesomeIcon
            icon={faArrowRight}
            fontSize={16}
            color="white"
            className="ml-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyBanner;
