import { useState, useEffect } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState();

  const handleOpen = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY >= 1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <nav
      className={`transition duration-500 ease-in-out transform ${
        scroll ? "bg-gray-400" : "bg-transparent"
      } fixed flex justify-between items-center w-full z-50 p-4 text-2xl`}
    >
      <p className="text-white z-10">
        <span className="">P</span>
        <span className="font-light">N</span>
        <span className="font-thin">C</span>
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={15}
        viewBox="0 0 24 15"
        onClick={handleOpen}
        className="z-50"
      >
        <line
          id="Line_2"
          data-name="Line 2"
          x1={24}
          transform="translate(0 0.5)"
          fill="none"
          stroke="#fff"
          strokeWidth={1}
        />
        <line
          id="Line_3"
          data-name="Line 3"
          x1={24}
          transform="translate(0 7.5)"
          fill="none"
          stroke="#fff"
          strokeWidth={1}
        />
        <line
          id="Line_4"
          data-name="Line 4"
          x1={24}
          transform="translate(0 14.5)"
          fill="none"
          stroke="#fff"
          strokeWidth={1}
        />
      </svg>
      <menu
        className={`transform ${
          open ? "-translate-x-0" : "translate-x-full"
        } top-0 right-0 mt-0 w-5/12 fixed h-screen bg-gray-400 overflow-auto ease-in-out transition-all duration-300 lg:translate-x-0`}
      >
        <ul className="text-white font-light text-lg mt-20 lg:mt-0 flex flex-col lg:flex-row justify-start w-full lg:mx-auto lg:flex lg:justify-between lg:max-w-screen-sm">
          <li className="mb-4">Account</li>
          <li className="mb-4">Teams</li>
          <li className="mb-4">Payments</li>
        </ul>
      </menu>
    </nav>
  );
};

export default Navbar;
