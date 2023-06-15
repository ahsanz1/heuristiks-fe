import React from "react";

const ImageBanner = ({ Image }) => {
  return (
    <div className="my-32 max-w-[100vw] overflow-x-scroll md:overflow-x-auto md:mx-32">
      <img className="w-[274vw] md:w-full h-auto max-w-none" src={Image}></img>
    </div>
  );
};

export default ImageBanner;
