import Link from "next/link";
import React from "react";

const ServiceNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-sans text-2xl">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        Go to{" "}
        <Link href="/" className="underline">
          Home
        </Link>
      </p>
    </div>
  );
};

export default ServiceNotFound;
