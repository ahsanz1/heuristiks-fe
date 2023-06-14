"use client";
import { faBars, faHeading } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileNav from "./mobile-nav";
import Nav from "./nav";
import StickyNav from "./sticky-nav";

const Navigation = ({ bgClassName }) => {
  const [openMobNav, setOpenMobNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`w-screen ${bgClassName}`}>
      <Nav
        className={isSticky ? "hidden" : "flex"}
        openMobNav={openMobNav}
        setOpenMobNav={setOpenMobNav}
      />
      <StickyNav
        className={isSticky ? "translate-y-0" : "-translate-y-full"}
        openMobNav={openMobNav}
        setOpenMobNav={setOpenMobNav}
      />
      <MobileNav
        openMobNav={openMobNav}
        setOpenMobNav={(e) => setOpenMobNav(!openMobNav)}
      />
    </div>
  );
};

export default Navigation;
