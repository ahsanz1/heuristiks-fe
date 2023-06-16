import {
  faAngleDown,
  faAngleUp,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import Link from "next/link";
import React, { useState } from "react";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import "./style.scss";

const Nav = ({
  className,
  openMobNav,
  setOpenMobNav,
  HeaderCTALinks,
  ButtonLink,
  ButtonText,
  ServicesCTAs,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      className={`${className} justify-between items-center py-3 px-8 md:px-8`}
    >
      <div className="flex justify-start">
        <Link href={"/"}>
          <h1 className="text-4xl md:block md:text-5xl font-sans font-bold">
            heuristiks.
          </h1>
        </Link>
      </div>
      <div className="hidden md:flex md:flex-row md:items-center">
        {HeaderCTALinks.tbody.map((row, idx) => {
          const isServices = row?.body[0]?.value?.toLowerCase() === "services";
          return (
            <>
              {isServices ? (
                <Menu
                  key={idx}
                  menuButton={
                    <MenuButton
                      className={
                        "mr-8 font-sans text-xl font-normal leading-4 flex flex-row items-center"
                      }
                    >
                      {row.body[0].value}

                      <FontAwesomeIcon
                        icon={isMenuOpen ? faAngleUp : faAngleDown}
                        fontSize="16px"
                        className="ml-2"
                      />
                    </MenuButton>
                  }
                  transition
                  direction="bottom"
                  onMenuChange={({ open }) => {
                    setIsMenuOpen(open);
                  }}
                >
                  {ServicesCTAs.tbody.map((row, idx1) => (
                    <MenuItem className="padding-0" key={idx1}>
                      <Link
                        href={row.body[1].value}
                        className="border-b-2 py-1"
                        key={idx}
                      >
                        <p className="font-sans text-lg font-normal leading-4">
                          {row.body[0].value}
                        </p>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              ) : (
                <Link href={row.body[1].value} className={`mr-8`} key={idx}>
                  <p className="font-sans text-xl font-normal leading-4">
                    {row.body[0].value}
                  </p>
                </Link>
              )}
            </>
          );
        })}
        <Link href={ButtonLink}>
          <button className="bg-black text-white py-4 px-8 rounded-md text-lg font-sans font-normal">
            {ButtonText}
          </button>
        </Link>
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
