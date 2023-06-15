import React from "react";
import "./style.scss";

const TwoColumnTextWithImage = ({
  Heading = "",
  Description = "",
  ShowHeadingBorder = false,
  SplitHeading = true,
  Image = "",
  HeadingUppercase = false,
  ImagePosition = "",
}) => {
  return (
    <div
      className={`flex flex-col items-start ${
        ImagePosition[0] === "right" ? "md:flex-row md:gap-x-28" : ""
      } md:mx-32`}
    >
      <div
        className={`flex flex-col md:gap-x-48 md:px-12 ${
          ImagePosition[0] === "bottom"
            ? "md:flex-row"
            : ImagePosition[0] === "right"
            ? "md:flex-col md:justify-center md:py-[15%]"
            : "md:flex-row"
        }`}
      >
        <div className="flex flex-col">
          <h1
            className={`${
              HeadingUppercase ? "uppercase" : ""
            } text-[32px] md:text-4xl leading-9 mb-7 md:mb-11`}
          >
            {SplitHeading
              ? Heading.split(" ").map((h) => (
                  <>
                    {h}
                    <br></br>
                  </>
                ))
              : Heading}
          </h1>
          {ShowHeadingBorder && (
            <span className="h-[1px] w-12 bg-black mb-4"></span>
          )}
        </div>
        <img
          className={`w-100 align-middle inline-block mt-10 ${
            ImagePosition[0] === "right"
              ? "md:w-1/2 md:object-contain md:hidden"
              : "hidden md:mt-20"
          }`}
          src={Image}
        ></img>
        <p
          className={`${
            ImagePosition[0] === "right" ? "mt-6" : ""
          } text-2xl md:text-2xl font-extralight leading-8`}
        >
          {Description}
        </p>
      </div>
      <img
        className={`w-100 align-middle inline-block mt-10 ${
          ImagePosition[0] === "right"
            ? "hidden md:w-1/2 md:object-contain md:block"
            : "md:mt-20"
        }`}
        src={Image}
      ></img>
    </div>
  );
};

export default TwoColumnTextWithImage;
