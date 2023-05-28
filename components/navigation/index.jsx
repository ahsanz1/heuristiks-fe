"use client";
import { faBars, faHeading } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import MobileNav from "./mobile-nav";

const Navigation = () => {
  const [openMobNav, setOpenMobNav] = useState(false);
  return (
    <div className="flex justify-between items-center py-5 px-6 h-17 bg-white shadow-lg mb-7 md:px-8">
      <div className="flex justify-start">
        <FontAwesomeIcon
          icon={faHeading}
          fontSize="24px"
          className="block md:hidden"
        />
        <h1 className="hidden md:block text-3xl font-sans font-bold">
          Heuristiks.
        </h1>
      </div>
      <div className="hidden md:flex md:flex-row md:items-center">
        <Link href={"/"} className="mr-8">
          <p className="font-sans text-lg font-normal leading-4">
            Case Studies
          </p>
        </Link>
        <Link href={"/"} className="mr-8">
          <p className="font-sans text-lg font-normal leading-4">Team</p>
        </Link>
        <Link href={"/"} className="mr-8">
          <p className="font-sans text-lg font-normal leading-4">Approach</p>
        </Link>
        <Link href={"/"} className="mr-8">
          <p className="font-sans text-lg font-normal leading-4">Careers</p>
        </Link>
        <button className="bg-black text-white py-2 px-4 rounded-md text-base font-sans font-normal">
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
      <MobileNav
        openMobNav={openMobNav}
        setOpenMobNav={(e) => setOpenMobNav(!openMobNav)}
      />
    </div>
  );
};

export default Navigation;
