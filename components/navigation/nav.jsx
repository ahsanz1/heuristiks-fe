import { faBars, faHeading } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Nav = ({ className, openMobNav, setOpenMobNav }) => {
  return (
    <div
      className={`${className} justify-between items-center py-5 px-8 md:px-8`}
    >
      <div className="flex justify-start">
        {/* <FontAwesomeIcon
          icon={faHeading}
          fontSize="24px"
          className="block md:hidden"
        /> */}
        <h1 className="text-4xl md:block md:text-5xl font-sans font-bold">
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
        <button className="bg-black text-white py-4 px-8 rounded-md text-lg font-sans font-normal">
          Contact Us
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

export default Nav;
