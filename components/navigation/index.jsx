"use client";
import { fetchPage } from "@/utils";
import React, { useEffect, useState } from "react";
import MobileNav from "./mobile-nav";
import Nav from "./nav";
import StickyNav from "./sticky-nav";

const Navigation = ({
  bgClassName,
  HeaderCTALinks,
  ServicesCTAs,
  ButtonLink,
  ButtonText,
}) => {
  const [openMobNav, setOpenMobNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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
        HeaderCTALinks={HeaderCTALinks}
        ButtonLink={ButtonLink}
        ButtonText={ButtonText}
        ServicesCTAs={ServicesCTAs}
      />
      <StickyNav
        className={isSticky ? "translate-y-0" : "-translate-y-full"}
        openMobNav={openMobNav}
        setOpenMobNav={setOpenMobNav}
        HeaderCTALinks={HeaderCTALinks}
        ButtonLink={ButtonLink}
        ButtonText={ButtonText}
        ServicesCTAs={ServicesCTAs}
      />
      {/* <MobileNav
        openMobNav={openMobNav}
        setOpenMobNav={(e) => setOpenMobNav(!openMobNav)}
      /> */}
    </div>
  );
};

export default Navigation;
