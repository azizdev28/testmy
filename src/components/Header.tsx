"use client";
import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { useCartStore } from "@/store/useCartStore";
import useFromStore from "@/store/useFromStore";

export default function Header({ onCartIconClick }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const totalItems = useFromStore(useCartStore, (state) => state.totalItems);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`bg-white dark:bg-[#1a253c] -top-1 left-0 right-0 z-20 fixed ${
        isShrunk ? "shadow-lg" : ""
      }`}
    >
      <div
        className={`container mx-auto ${
          isShrunk
            ? "md:h-[85px] h-[55px] flex flex-col pt-[12px] pb-2 gap-y-1 duration-300"
            : "md:h-[132px] h-[70px] flex flex-col pt-[16px] gap-y-4 duration-300  "
        }  px-5`}
      >
        <div className="flex justify-between items-center">
          <IoIosSearch className="w-[24px] h-[24px] cursor-pointer hidden md:block dark:text-slate-200 text-[#22202E] hover:text-slate-950" />
          <p className="text-3xl md:pl-44 font-normal text-[#101727] dark:text-white">
            <Link href="/"> Avion</Link>
          </p>
          <div className="flex gap-4 jus items-center">
            <div className=" gap-3 hidden md:flex">
              <Link href="/about">About</Link>
              <Link href="/products">Products</Link>
            </div>
            <IoIosSearch className="block md:hidden    w-[32px] h-[32px] cursor-pointer dark:text-slate-200 text-[#22202E] hover:text-slate-950" />
            <Link href="/cart">
              <AiOutlineShoppingCart className=" w-[28px] h-[28px] cursor-pointer dark:text-slate-200 text-[#22202E] hover:text-slate-950" />
              <p className="flex items-center justify-center text-[14px] absolute w-[18px] h-[18px] bg-blue-600 text-slate-100 rounded-xl -mt-9 ml-4">
                {totalItems}
              </p>
            </Link>
            <FaRegUserCircle className="md:block hidden   w-[28px] h-[28px] cursor-pointer dark:text-slate-200 text-[#22202E] hover:text-slate-950" />
            <ThemeSwitch />
            <button
              onClick={handleClick}
              className="pt-2 flex-col gap-1 justify-center items-center block md:hidden w-[32px] h-[32px] cursor-pointer dark:text-slate-200 text-[#22202E] hover:text-slate-950"
            >
              <span
                className={`bg-steel-500 block transition-all duration-300 ease-out
            h-1 w-8 rounded-md bg-black dark:bg-slate-200 ${
              isOpen
                ? "rotate-45 translate-y-[0.41rem]"
                : "-translate-y-[0.30rem]"
            }`}
              ></span>
              <span
                className={`bg-steel-500 block
            h-1 w-8 rounded-md my-0.5 bg-black dark:bg-slate-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
              ></span>
              <span
                className={`bg-steel-500 block transition-all duration-300 ease-out
            h-1 w-8 rounded-md bg-black dark:bg-slate-200  ${
              isOpen
                ? "-rotate-45 -translate-y-[0.35rem]"
                : "translate-y-[0.30rem]"
            }`}
              ></span>
            </button>
          </div>
        </div>
        <hr className=" md:block hidden pr-6 h-2" />
        <div className=" justify-center gap-6 hidden md:flex">
          <Link
            href={"#"}
            className="text-[#505977] dark:text-slate-400 dark:hover:text-slate-200 hover:text-[#110f16] cursor-pointer hover:font-normal"
          >
            Plant pots
          </Link>
          <Link
            href={"#"}
            className="text-[#505977] dark:text-slate-400 dark:hover:text-slate-200 hover:text-[#110f16]  cursor-pointer hover:font-normal"
          >
            Ceramics
          </Link>
          <Link
            href={"#"}
            className="text-[#505977] dark:text-slate-400 dark:hover:text-slate-200 hover:text-[#110f16]  cursor-pointer hover:font-normal"
          >
            Tables
          </Link>
          <Link
            href={"#"}
            className="text-[#505977] dark:text-slate-400 dark:hover:text-slate-200 hover:text-[#110f16]  cursor-pointer hover:font-normal"
          >
            Chairs
          </Link>
          <Link
            href={"#"}
            className="text-[#505977] dark:text-slate-400 dark:hover:text-slate-200 hover:text-[#110f16]  cursor-pointer hover:font-normal"
          >
            Crockery
          </Link>
          <Link
            href={"#"}
            className="text-[#505977] dark:text-slate-400 dark:hover:text-slate-200 hover:text-[#110f16]  cursor-pointer hover:font-normal"
          >
            Tableware
          </Link>
          <Link
            href={"#"}
            className="text-[#505977] dark:text-slate-400 dark:hover:text-slate-200 hover:text-[#110f16]  cursor-pointer hover:font-normal"
          >
            Cutlery
          </Link>
        </div>
        <div
          className={`${
            isOpen
              ? "translate-x"
              : "-translate-x-[420px] transation duration-400 ease-linier  "
          } absolute top-0 left-0 h-screen w-[50vw] bg-slate-200 dark:bg-[#162037] z-50 transation duration-200 ease-linear md:hidden shadow-md`}
        >
          <div className="flex flex-col gap-4 pl-8 pt-4">
            <p className="text-3xl font-normal text-[#101727] dark:text-white">
              Avion
            </p>
            <Link
              href="/about"
              className="text-[#505977] hover:text-[#110f16] cursor-pointer pt-4 hover:font-normal"
            >
              About us
            </Link>
            <Link
              href="/products"
              className="text-[#505977] hover:text-[#110f16]  cursor-pointer hover:font-normal"
            >
              Products
            </Link>
            <Link
              href="/cart"
              className="text-[#505977] hover:text-[#110f16]  cursor-pointer hover:font-normal"
            >
              Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Header;
