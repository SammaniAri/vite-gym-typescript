//import { useState } from "react";
//import { BarsArrowDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const index = ({ selectedPage, setSelectedPage }: Props) => {
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
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Training"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Book a personal coach"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
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
