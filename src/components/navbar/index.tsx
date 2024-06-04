import { useState } from "react";
import { BarsArrowDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
type Props = {};

const index = (props: Props) => {
  return (
    <nav>
      <div className="flex items-center justify-between fixed top-0 z-30 w-full py-6">
        <div className="flex items-center justify-between mx-auto w-5/6">
          <div
            id="leftLogo"
            className="flex items-center justify-between w-full gap-16"
          >
            <img alt="logo" src={Logo} className="w-24 h-24" />
          </div>
          <div
            id="rightLinksContainer"
            className="flex items-center justify-between w-full"
          >
            <div className="flex items-center justify-between gap-8 text-sm">
              <p>Home</p>
              <p>Training</p>
              <p>Book a personal coach</p>
              <p>Contact Us</p>
            </div>
            <div className="flex items-center justify-between gap-8">
              <p>Sign In</p> <button>Become a member</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default index;
