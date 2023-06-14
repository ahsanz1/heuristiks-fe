import React from "react";

const ImageBanner = ({ Image }) => {
  return (
    <div className="my-8 max-w-[100vw] overflow-x-scroll md:overflow-x-auto md:mx-32">
      <img className="w-full h-auto max-w-none" src={Image}></img>
    </div>
  );
};

export default ImageBanner;
