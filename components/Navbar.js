const Navbar = () => {
  return (
    <nav className="fixed flex justify-between items-center w-full z-50 p-4 text-2xl">
      <p className="text-white">
        <span className="">P</span>
        <span className="font-light">N</span>
        <span className="font-thin">C</span>
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={15}
        viewBox="0 0 24 15"
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
    </nav>
  );
};

export default Navbar;
