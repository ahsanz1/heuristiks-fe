import { faHeading, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const MobileNav = ({ openMobNav, setOpenMobNav }) => {
  return (
    <div
      className={`flex flex-col bg-black w-screen h-screen absolute top-0 left-0 ${
        openMobNav ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-row justify-between items-center h-17 px-8 py-3">
        <FontAwesomeIcon icon={faHeading} fontSize="24px" color="white" />
        <FontAwesomeIcon
          icon={faXmark}
          onClick={setOpenMobNav}
          color="white"
          fontSize={24}
        />
      </div>
      <div className="px-8 py-3">
        <Link href={"/"}>
          <p className="text-white font-sans opacity-100 text-4xl font-medium leading-48px my-6">
            Home
          </p>
        </Link>
        <Link href={"/"}>
          <p className="text-white font-sans opacity-40 text-4xl font-medium leading-48px mb-6">
            Case Studies
          </p>
        </Link>
        <Link href={"/"}>
          <p className="text-white font-sans opacity-40 text-4xl font-medium leading-48px mb-6">
            Team
          </p>
        </Link>
        <Link href={"/"}>
          <p className="text-white font-sans opacity-40 text-4xl font-medium leading-48px mb-6">
            Approach
          </p>
        </Link>
        <Link href={"/"}>
          <p className="text-white font-sans opacity-40 text-4xl font-medium leading-48px mb-6">
            Careers
          </p>
        </Link>
        <Link href={"/"}>
          <p className="text-white font-sans opacity-40 text-4xl font-medium leading-48px mb-6">
            Contact Us
          </p>
        </Link>
        <button className="bg-white py-4 px-6 rounded-md mt-8 text-2xl leading-7 font-sans font-medium">
          Let's Talk
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
