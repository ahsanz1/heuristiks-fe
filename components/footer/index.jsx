// "use client";
// import LinkedInIcon from "@/icons/svg/linkedin.svg";
import { fetchPage } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
import React from "react";

const Footer = async () => {
  const { rels } = await fetchPage("home");
  const footerProps = rels.find((r) => r.name.toLowerCase() === "footer");
  if (!footerProps) return <h3>Footer NOT FOUND!</h3>;

  const { CTATable1 = {} } = footerProps?.content?.global[0];
  const { CTATable2 = {} } = footerProps?.content?.global[0];
  const { CTATable3 = {} } = footerProps?.content?.global[0];
  const { LinkedInUrl = "" } = footerProps?.content?.global[0];
  const { BottomText = "" } = footerProps?.content?.global[0];
  const { BottomCTA1Text = "" } = footerProps?.content?.global[0];
  const { BottomCTA1Url = "" } = footerProps?.content?.global[0];
  const { BottomCTA2Text = "" } = footerProps?.content?.global[0];
  const { BottomCTA2Url = "" } = footerProps?.content?.global[0];

  return (
    <div className="flex flex-col bg-black text-white px-6 py-12 md:px-8">
      <div className="flex flex-col gap-y-4 md:flex-row md:justify-between md:pl-28 md:pr-72">
        <h1 className="font-sans font-bold text-7xl mb-6">heuristiks.</h1>
        <div className="flex flex-col gap-y-4 font-sans mt-3">
          {CTATable1.tbody.map((row) => (
            <Link href={row.body[1].value}>
              <p className="font-bold text-lg">{row.body[0].value}</p>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-y-4 font-sans mt-3">
          {CTATable2.tbody.map((row, idx) => (
            <Link href={row.body[1].value}>
              <p
                className={`${
                  idx === 0 ? "font-bold text-lg" : "font-medium text-sm"
                }`}
              >
                {row.body[0].value}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-y-4 font-sans mt-3">
          {CTATable3.tbody.map((row, idx) => (
            <Link href={row.body[1].value}>
              <p
                className={`${
                  idx === 0 ? "font-bold text-lg" : "font-medium text-sm"
                }`}
              >
                {row.body[0].value}
              </p>
            </Link>
          ))}
        </div>
        <Link href={LinkedInUrl} className="mt-6">
          <FontAwesomeIcon icon={faLinkedin} fontSize="24px" />
        </Link>
      </div>
      <div className="mt-2 font-sans md:mt-12 md:flex flex-row justify-center">
        <p className="text-sm font-light">
          {BottomText} |{" "}
          <Link href={BottomCTA1Url} className="font-medium underline">
            {BottomCTA1Text}
          </Link>{" "}
          |{" "}
          <Link href={BottomCTA2Url} className="font-medium underline">
            {BottomCTA2Text}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
