import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

function Navbar() {
  return (
    <header className="pt-[37px] bg-black ">
      <div className="container py-[32px] border-b-[1px] border-b-gray-600 flex justify-between items-center  ">
        <label className="text-white swap swap-rotate lg:hidden">
          <input type="checkbox" />

          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        <div>
          <Link
            className="lg:w-[143px] lg:h-[25px] font-bold text-lg md:text-xl lg:text-3xl text-[#FFFFFF] "
            to="/"
          >
            audiophile
          </Link>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex gap-[34px] ">
            <li className="">
              <Link className="lg:w-[44px] font-bold text-[13px] text-white ">
                Home
              </Link>
            </li>
            <li>
              <Link className="lg:w-[44px] font-bold text-[13px] text-white  ">
                HEADPHONES
              </Link>
            </li>
            <li>
              <Link className="lg:w-[44px] font-bold text-[13px] text-white ">
                SPEAKERS
              </Link>
            </li>
            <li>
              <Link className="lg:w-[44px] font-bold text-[13px] text-white ">
                EARPHONES
              </Link>
            </li>
          </ul>
        </nav>
        <FaCartArrowDown className="w-[23px] h-[16px] md:w-[23px] md:h-[20px] text-white" />
      </div>
    </header>
  );
}

export default Navbar;
