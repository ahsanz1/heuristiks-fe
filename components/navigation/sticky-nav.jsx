import { faBars, faHeading } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const StickyNav = ({ className, openMobNav, setOpenMobNav }) => {
  return (
    <div
      className={`${className} bg-white fixed top-0 left-0 right-0 z-10 transition-transform duration-500 transform flex justify-between items-center py-5 px-8 md:px-8 shadow-md`}
    >
      <div className="flex justify-start">
        <h1 className="font-sans text-4xl font-bold md:hidden">h.</h1>
        <h1 className="hidden md:block text-4xl font-sans font-bold">
          heuristiks.
        </h1>
      </div>
      <div className="hidden md:flex md:flex-row md:items-center">
        <Link href={"/"} className="mr-8">
          <p className="font-sans text-xl font-normal leading-4">
            Case Studies
          </p>
        </Link>
        <Link href={"/"} className="mr-8">
          <p className="font-sans text-xl font-normal leading-4">Team</p>
        </Link>
        <Link href={"/"} className="mr-8">
          <p className="font-sans text-xl font-normal leading-4">Approach</p>
        </Link>
        <Link href={"/"} className="mr-8">
          <p className="font-sans text-xl font-normal leading-4">Careers</p>
        </Link>
        <button className="bg-black text-white py-2 px-4 rounded-md text-lg font-sans font-normal">
          Let's Talk
        </button>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        fontSize={24}
        onClick={(e) => {
          e.preventDefault();
          setOpenMobNav(!openMobNav);
        }}
        className="block md:hidden"
      />
    </div>
  );
};

export default StickyNav;
