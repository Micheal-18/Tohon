import React, { useState } from "react";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa6";
import { RiSearch2Line, RiShoppingBag2Line } from "react-icons/ri";
import Navlink from "./Navlink";
import { FiMenu, FiX } from "react-icons/fi";
import dropdownImage from "../assets/shot.jpeg";
import Darkmode from "./Darkmode";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);


  // Nested menus
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);

  return (
    <div className="w-full fixed z-50  ">
      {/* Top Banner */}
      <Navlink />

      {/* MAIN NAV */}
      <div className="relative w-full shadow-sm">
        <div className=" lg:px-6 px-4 py-2 lg:py-4 flex items-center justify-between bg-(--primary) dark:bg-(--primary) text-(--secondary) dark:text-(--secondary)">

          {/* MOBILE ICON */}
          <button
            onClick={() => setOpen(!open)}
            className="relative w-10 h-10 lg:hidden flex items-center justify-center text-xl cursor-pointer"
          >
            <FiMenu
              className={`absolute transition-all duration-500 ${
                open ? "opacity-0 scale-0" : "opacity-100 scale-100"
              }`}
            />
            <FiX
              className={`absolute transition-all duration-500 ${
                open ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            />
          </button>

          {/* MOBILE DROPDOWN */}
          <div
            className={`lg:hidden absolute top-[58px] left-0 w-full  shadow-md transition-all  overflow-y-auto max-h-[80vh] bg-(--primary) dark:bg-(--primary) duration-500
              ${
                open
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5 pointer-events-none"
              }
            `}
          >
            <div className="flex flex-col p-4 gap-4 font-bold">

              {/* SHOP */}
              <div className="flex justify-between">
                <a href="/" className="hover:underline">Shop</a>
                <button onClick={() => setShopOpen(!shopOpen)}>
                  {shopOpen ? <FaMinus /> : <FaPlus />}
                </button>
              </div>

              {/* SHOP DROPDOWN */}
              {shopOpen && (
                <div className="ml-4 mt-3 flex flex-col gap-4 text-gray-700 dark:text-gray-500 font-semibold">

                  {/* CATEGORIES */}
                  <div className="flex justify-between">
                    <span className="hover:underline cursor-pointer">Categories</span>
                    <button onClick={() => setCategoriesOpen(!categoriesOpen)}>
                      {categoriesOpen ? <FaMinus /> : <FaPlus />}
                    </button>
                  </div>

                  {/* CATEGORIES LIST */}
                  {categoriesOpen && (
                    <div className="pl-4 border-l-2 border-gray-300 flex flex-col gap-2 text-gray-600 dark:text-gray-400">
                      <a href="/" className="hover:bg-gray-200 p-2 rounded">Bags</a>
                      <a href="/" className="hover:bg-gray-200 p-2 rounded">Clothing</a>
                      <a href="/" className="hover:bg-gray-200 p-2 rounded">Leather Goods</a>
                      <a href="/" className="hover:bg-gray-200 p-2 rounded">Accessories</a>
                      <a href="/" className="hover:bg-gray-200 p-2 rounded">Gifts</a>
                      <a href="/" className="hover:bg-gray-200 p-2 rounded">Shoes</a>
                      <a href="/" className="hover:bg-gray-200 p-2 rounded">Shop All</a>
                    </div>
                  )}

                  {/* FEATURES */}
                  <div className="flex justify-between">
                    <span className="hover:underline cursor-pointer">Featured</span>
                    <button onClick={() => setFeaturesOpen(!featuresOpen)}>
                      {featuresOpen ? <FaMinus /> : <FaPlus />}
                    </button>
                  </div>

                  {featuresOpen && (
                    <div className="pl-4 border-l-2 flex flex-col gap-2 text-gray-600 dark:text-gray-400">
                      <a href="/" className="hover:bg-gray-200 p-2 rounded">New Arrivals</a>
                      <a href="/" className="hover:bg-gray-200 p-2 rounded">Best Sellers</a>
                      <a href="/" className="hover:bg-gray-200 p-2 rounded">Gifts Under ₦100k</a>
                      <a href="/" className="hover:bg-gray-200 p-2 rounded">Sale</a>
                    </div>
                  )}

                  {/* COLLECTIONS */}
                  <div className="flex justify-between">
                    <span className="hover:underline cursor-pointer">Collections</span>
                    <button onClick={() => setCollectionsOpen(!collectionsOpen)}>
                      {collectionsOpen ? <FaMinus /> : <FaPlus />}
                    </button>
                  </div>

                  {collectionsOpen && (
                    <div className="pl-4 border-l-2 flex flex-col gap-2 text-gray-600 dark:text-gray-400">
                      <a href="/" className="hover:bg-gray-200 p-2 rounded">Events</a>
                      <a href="/" className="hover:bg-gray-200 p-2 rounded">Office Looks</a>
                      <a href="/" className="hover:bg-gray-200 p-2 rounded">Selection</a>
                      <a href="/" className="hover:bg-gray-200 p-2 rounded">Online Exclusive</a>
                      <a href="/" className="hover:bg-gray-200 p-2 rounded">Knitwear</a>
                    </div>
                  )}

                </div>
              )}

              {/* OTHER MENU ITEMS */}
              {["New Arrivals", "Sale", "Journal", "User"].map((item) => (
                <div key={item} className="flex justify-between">
                  <a href="/" className="hover:underline">{item}</a>
                  <FaPlus />
                </div>
              ))}

            </div>
          </div>

          {/* LEFT SIDE LOGO + DESKTOP LINKS */}
          <div className="flex items-center gap-6">
            <h1 className="lg:text-2xl text-xl font-bold tracking-wide font-sans">
              711<span className="text-yellow-500">Tohon</span>.
            </h1>

            {/* DESKTOP LINKS */}
            <div className="lg:flex hidden gap-4 text-sm font-semibold ">
              <div className=" group cursor-pointer">
                <a href="/" className="hover:underline backdrop-blur-2xl">Shop</a>

                {/* MEGA MENU */}
                
                <div className="absolute left-0 hidden group-hover:block bg-(--primary) dark:bg-(--primary) shadow-lg w-full px-10 py-8">
                  <div className="flex justify-between w-full">

                    {/* THREE COLUMNS */}
                    <div className="grid grid-cols-3 gap-10 text-(--dropdownh1) dark:text-(--dropdownh1) font-semibold text-md ml-8 mt-4">
                      <div className="flex flex-col space-y-4">
                        <h1 className="text-gray-500 dark:text-gray-400 mb-3">Categories</h1>
                        <a className="hover:underline" href="/">Bags</a>
                        <a className="hover:underline" href="/">Clothing</a>
                        <a className="hover:underline" href="/">Leather Goods</a>
                        <a className="hover:underline" href="/">Accessories</a>
                        <a className="hover:underline" href="/">Gifts</a>
                        <a className="hover:underline" href="/">Shoes</a>
                        <a className="hover:underline" href="/">Shop All</a>
                      </div>

                      <div className="flex flex-col space-y-2">
                        <h1 className="text-gray-500 dark:text-gray-400 mb-3">Featured</h1>
                        <a className="hover:underline" href="/">New Arrivals</a>
                        <a className="hover:underline" href="/">Best Sellers</a>
                        <a className="hover:underline" href="/">Gifts Under ₦100k</a>
                        <a className="hover:underline" href="/">Sale</a>
                      </div>

                      <div className="flex flex-col space-y-2">
                        <h1 className="text-gray-500 dark:text-gray-400 mb-3">Collections</h1>
                        <a className="hover:underline" href="/">Party & Events</a>
                        <a className="hover:underline" href="/">Office Looks</a>
                        <a className="hover:underline" href="/">Online Exclusive</a>
                        <a className="hover:underline" href="/">Knitwear</a>
                        <a className="hover:underline" href="/">Basics</a>
                      </div>
                    </div>

                    {/* IMAGE */}
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={dropdownImage}
                        alt="dropdown"
                        className="w-[280px] h-[300px] object-cover"
                      />
                    </div>

                  </div>
                </div>
              </div>

              <a href="/new-arrival" className="hover:underline">New Arrivals</a>
              <a href="/sale" className="hover:underline">Sale</a>
              <a href="/journal" className="hover:underline">Journal</a>
            </div>
          </div>

          {/* RIGHT SIDE ICONS */}
          <div className="flex items-center gap-4 font-semibold text-sm">
            <Darkmode />
            <button onClick={() => setSearchOpen(!searchOpen)}><RiSearch2Line className="cursor-pointer" /></button>
            {searchOpen && (
              <div className=" absolute bg-(--primary) dark:bg-(--primary) text-(--dropdownh1) dark:text-(--dropdownh1)  left-0 w-full block top-14 shadow-lg mx-auto p-6  ">
                <div className="flex items-center gap-4  rounded-full px-4 py-2 mx-auto">
                  <RiSearch2Line size={20}/>
                <input type="text" placeholder="Search..." className="w-full   font-semibold tracking-wide   bg-transparent outline-none" />
                <FiX size={20} onClick={() => setSearchOpen(false)}/>
                </div>
              </div>
            )}
            <button className="lg:flex hidden hover:underline">Stores</button>

            <button className="flex items-center gap-1 cursor-pointer">
              <FaHeart /> 0
            </button>

            <button className="flex items-center gap-1 cursor-pointer">
              <RiShoppingBag2Line /> 0
            </button>

            <button className="lg:flex hidden hover:underline">Sign In</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
