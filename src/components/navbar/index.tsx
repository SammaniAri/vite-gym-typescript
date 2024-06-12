//import { useState } from "react";
import { BarsArrowDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import Logo from "@/assets/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { useState } from "react";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <nav>
      <div className="flex items-center justify-between fixed top-0 z-30 w-full py-6">
        <div className="flex items-center justify-between mx-auto w-5/6">
          <div
            id="leftLogo"
            className="flex items-center justify-between gap-16 w-1/3"
          >
            <img alt="logo" src={Logo} className="w-24 h-24" />
          </div>
          {isAboveMediumScreens ? (
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
              <div className="flex items-center justify-between gap-8 text-sm">
                <p className="transition duration-500 hover:text-primary-300">
                  Sign In
                </p>
                <button className="transition duration-500 hover:text-primary-300">
                  Become a member
                </button>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              {isMenuToggled ? (
                <XMarkIcon className="h-6 w-6 text-white" />
              ) : (
                <BarsArrowDownIcon className="h-6 w-6 text-white" />
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
