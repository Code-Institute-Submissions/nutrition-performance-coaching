import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState();

  const router = useRouter();

  const path = router.pathname;

  const { user, logout } = useAuth();

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
        scroll
          ? "bg-gray-400"
          : `${
              path == "/" || path == "/login" ? "bg-transparent" : "bg-gray-400"
            }`
      } fixed flex justify-between items-center w-full z-50 p-4 text-2xl lg:px-20`}
    >
      <Link href="/">
        <a>
          <p className="z-10 text-white">
            <span className="">P</span>
            <span className="font-light">N</span>
            <span className="font-thin">C</span>
          </p>
        </a>
      </Link>
      {open ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={15}
          viewBox="0 0 17.678 17.678"
          onClick={handleOpen}
          className="md:hidden z-50"
        >
          <line
            id="Line_7"
            data-name="Line 7"
            x1={24}
            transform="translate(17.324 0.354) rotate(135)"
            fill="none"
            stroke="#fff"
            strokeWidth={1}
          />
          <line
            id="Line_8"
            data-name="Line 8"
            x1={24}
            transform="translate(0.354 0.354) rotate(45)"
            fill="none"
            stroke="#fff"
            strokeWidth={1}
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={15}
          viewBox="0 0 24 15"
          onClick={handleOpen}
          className="md:hidden z-50"
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
      )}
      <menu
        className={`transform ${
          open ? "-translate-x-0" : "translate-x-full"
        } top-0 right-0 mt-0 w-5/12 md:w-1/2 xl:w-1/3 fixed h-screen bg-gray-400 overflow-auto ease-in-out transition-all duration-300 md:block md:relative md:-translate-x-0 md:h-auto md:my-0 md:bg-transparent`}
      >
        <div className="md:my-auto md:flex-row md:items-center md:justify-between flex flex-col justify-start w-full mt-20 text-lg font-light text-white">
          <Link href="/">
            <a onClick={handleOpen} className="md:mb-0 md:mr-4 mb-4">
              Home
            </a>
          </Link>
          <Link href="/#features">
            <a onClick={handleOpen} className="md:mb-0 md:mr-4 mb-4">
              About
            </a>
          </Link>{" "}
          {user && (
            <Link href="/dashboard">
              <a onClick={handleOpen} className="md:mb-0 md:mr-4 mb-4">
                Dashboard
              </a>
            </Link>
          )}
          {user ? (
            <Link href="/">
              <a onClick={logout}>
                <button
                  onClick={handleOpen}
                  className="md:mb-0 px-4 py-1 mb-4 text-center bg-yellow-400 rounded"
                >
                  Logout
                </button>
              </a>
            </Link>
          ) : (
            <Link href="/login">
              <a>
                <button
                  onClick={handleOpen}
                  className="md:mb-0 px-4 py-1 mb-4 text-center bg-yellow-400 rounded"
                >
                  Login
                </button>
              </a>
            </Link>
          )}
        </div>
      </menu>
    </nav>
  );
};

export default Navbar;
