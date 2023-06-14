import React from "react";
import "./style.scss";

const TitleDescriptionTextCards = ({ Title, Description, TextCardsTable }) => {
  return (
    <div className="flex flex-col font-sans md:mt-16">
      <div className="px-6">
        <div className="max-w-lg md:ml-36">
          <h1 className="text-4.5xl leading-48px">{Title}</h1>
          <p className="text-xl leading-8 font-light">{Description}</p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap mt-12 gap-y-4 md:flex-nowrap md:gap-x-8">
        {TextCardsTable.tbody.map((row) => (
          <div className="px-6 pt-6 pb-8 bg-white md:px-12 md:pt-12 md:pb-16">
            <h3 className="text-2xl leading-9 mb-2">{row.body[0].value}</h3>
            <p className="text-xl leading-7 font-light">
              {row.body[1].value}
            </p>
            <span className="w-12 h-1px block bg-black mt-6 md:mt-10"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleDescriptionTextCards;
