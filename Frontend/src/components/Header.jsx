import React from "react";
import logo from "/logo/image.svg";
import { Link, useLocation } from "react-router-dom";
import Search from "./search";
import { LuUserCircle2 } from "react-icons/lu";
import useMobile from "../hooks/useMobil";
 import { PiShoppingCart } from "react-icons/pi";

const Header = () => {
  const isMobile = useMobile();
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";
  console.log(isSearchPage, isMobile);

  return (
    <header className="lg:h-20 h-28  flex  flex-col gap-4 p-4 lg:shadow sticky top-0  z-20 bg-slate-100 font-prompt">
      {(isSearchPage && !isMobile) || (
        <div className="lg:w-11/12 w-full mx-auto flex items-center justify-between lg:justify-between lg:p-2 p-0.5">
          <Link to="/">
            <div>
              <img
                src={logo}
                width={120}
                height={60}
                alt=""
                className="visible lg:hidden"
              />
              <img
                src={logo}
                width={150}
                height={60}
                alt=""
                className="hidden lg:block"
              />
            </div>
          </Link>

          <div className="hidden lg:block">
            <Search />
          </div>

          <div>
            <div className="lg:hidden block">
              <LuUserCircle2 size={25} />
            </div>

            <div className="lg:block hidden">
              <div className=" lg:flex items-center gap-8 ">
                <Link to="" className="px-6 py-3 rounded-lg  text-gray-600 border hover:bg-gray-100">
                  Login
                </Link>
                <div className="text-white font-semibold">
                  <button className="bg-[#0C831F] rounded-lg  flex items-center gap-3 px-3 py-3 ">
                    <PiShoppingCart
                      size={25}
                      className="hover:-translate-y-1 transition-all"
                    />

                    <div className="text-start">

                      <p>My cart</p>
                      {/* <p>2 items</p>
                      <p>₹ 35</p> */}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className=" container mx-auto lg:hidden ">
        <Search></Search>
      </div>
    </header>
  );
};

export default Header;
