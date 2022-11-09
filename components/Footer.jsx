import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-footer flex justify-center items-end pt-2 pb-2 gap-3">
      <p>©2022 by Junipers Guinea Pig Rescue</p>
      <p>||</p>
      <p>
        Design by <Link href="https://geoffreybelk.tech/">GBWS</Link>
      </p>
    </footer>
  );
};

export default Footer;
