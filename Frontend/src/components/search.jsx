import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";
import { FiSearch } from "react-icons/fi";
import useMobile from "../hooks/useMobil";
const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectSearchPage = () => {
    navigate("/search");
  };
  const [isSearchPage, setSearchPage] = useState(false);

  useEffect(() => {
    const isSearch = location.pathname === "/search";
    setSearchPage(isSearch);
  }, [location]);

  const isMobile = useMobile();

  return (
    <div className="font-prompt w-full min-w-[250px] bg-[#F8F8F8]  group focus-within:border-green-600  cursor-text p-1 lg:min-w-[500px] lg:h-12 h-10 rounded-lg border flex items-center">
      <div>
        {(isSearchPage && isMobile) ? (
          <Link to="/">
            <button className=" flex items-center  rounded-full shadow-md group-focus-within:text-green-600 m-2 p-1 bg-slate-100">
              <IoMdArrowBack size={20} />
            </button>
          </Link>
        ) : (
          <Link to="/search">
            <button className=" flex items-center p-3 group-focus-within:text-green-600">
              <FiSearch size={20} />
            </button>
          </Link>
        )}
      </div>
      <div className="w-full h-full  " onClick={redirectSearchPage}>
        {!isSearchPage ? (
          <div className=" text-sm text-gray-400  w-full h-full flex items-center">
            <TypeAnimation
              sequence={[
                'Search "Apples"',
                1500,
                'Search "Bananas"',
                1500,
                'Search "Carrots"',
                1500,
                'Search "Tomatoes"',
                1500,
                'Search "Potatoes"',
                1500,
                'Search "Onions"',
                1500,
                'Search "Milk"',
                1500,
                'Search "Bread"',
                1500,
                'Search "Eggs"',
                1500,
                'Search "Cheese"',
                1500,
                'Search "Chicken"',
                1500,
                'Search "Rice"',
                1500,
                'Search "Pasta"',
                1500,
                'Search "Oranges"',
                1500,
                'Search "Grapes"',
                1500,
                'Search "Yogurt"',
                1500,
                'Search "Butter"',
                1500,
                'Search "Coffee"',
                1500,
                'Search "Tea"',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        ) : (
          <div className=" text-sm text-gray-400 w-full h-full">
            <input
              type="text"
              autoFocus={true}
              placeholder="Search for atta dal and more."
              className="w-full h-full p-1 pl-2 text-sm text-black outline-none bg-[#F8F8F8]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
