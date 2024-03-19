"use client";
import { DandyChair } from "@/assets";
import { useCartStore } from "@/store/useCartStore";
// import { useProductsStore } from "@/store/useProductStore";
import allDatas from "@/store/useSingle";
import Image from "next/image";
// import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import { PiPlantBold } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
// type al = {
//   cart: null | string;
// };

const ProDetails = ({ product }: any) => {
  const [quantity, setQuantity] = useState(1);

  const pricePerProduct = 85;
  const [totalPrice, setTotalPrice] = useState(pricePerProduct);

  // let [c, setC] = useState(1);
  let { iddata, getDatas } = allDatas();
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    getDatas();
  }, []);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setTotalPrice(totalPrice + pricePerProduct);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice(totalPrice - pricePerProduct);
    }
  };

  return (
    <div className="container md:mx-auto  lg:px-[62px] px-[10px]">
      <div className="justify-center mx-auto  sm:flex  md:py-[50px] pt-[0px] pb-[20px]">
        <div className="  w-[100%] sm:w-[50%]">
          {/* <Image
            src={iddata.image}
            alt={iddata.title}
            className="h-[390px] w-[100%] sm:w-[550px] sm:h-[650px] md:h-[750px] md:w-[729px]"
          /> */}
          <img
            src={iddata.image}
            alt={iddata.name}
            className=" h-[390px] w-[100%] sm:w-[550px] sm:h-[650px] md:h-[750px] md:w-[729px]"
          ></img>
        </div>
        <div className=" w-[100%] sm:w-[60%] md:w-[50%] md:p-10 sm:p-8 pl-4 pt-4">
          <p className="sm:text-[32px] text-[24px] leading-10 dark:text-slate-200 text-[#1a253c] pb-8">
            {iddata.name}{" "}
          </p>
          <p className="text-2xl dark:text-slate-200 text-[#1a253c]">
            {iddata.price}
          </p>
          <p className="  md:pt-[80px]  pt-[20px] dark:text-slate-200 text-[#1a253c]">
            {iddata.description}
          </p>
          <p className="text-[18px] leading-7 dark:text-slate-200 text-[#1a253c]">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
          <ul className="pt-5">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>
          <p className="dark:text-slate-200 text-[#1a253c] pt-[27px]">
            Dimensions
          </p>
          <div className="flex justify-between max-w-[251px] pt-4 sm:pt-7">
            <div>
              <p>Height</p>
              <p>110cm</p>
            </div>
            <div>
              <p>Width</p>
              <p>75cm</p>
            </div>
            <div>
              <p>Depth</p>
              <p>50cm</p>
            </div>
          </div>
          <div className="flex items-center mt-5 md:pt-10">
            <div className="flex items-center gap-5 px-4">
              <button onClick={decreaseQuantity}>-</button>
              <p>{quantity}</p>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <button
              type="submit"
              onClick={() => addToCart(product)}
              className="w-[232px] mx-auto   text-[#fff] dark:bg-[#f9f9f93c] bg-[#1a253c] px-8 py-4"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-5">
        <p className=" text-[#1a253c] dark:text-slate-300 flex justify-center md:justify-start md:pt-[80px] text-3xl">
          New ceramics
        </p>
        <div className=" flex flex-wrap justify-center py-[20px] sm:py-[34px] gap-3 sm:gap-5">
          <div>
            <Image
              src={DandyChair}
              width={200}
              height={200}
              alt="DandyChair"
              className="w-[185px] sm:w-[300px] h-[201px] sm:h-[375px]"
            />
            <p className="text-[#1a253c] dark:text-slate-300 pt-6 text-[20px]">
              The Dandy chair{" "}
            </p>
            <p className="text-[#1a253c] dark:text-slate-300 pt-2 text-[18px]">
              £250
            </p>
          </div>
          <div>
            <Image
              src={DandyChair}
              width={200}
              height={200}
              alt="DandyChair"
              className="w-[185px] sm:w-[300px] h-[201px] sm:h-[375px]"
            />
            <p className="text-[#1a253c] dark:text-slate-300 pt-6 text-[20px]">
              The Dandy chair{" "}
            </p>
            <p className="text-[#1a253c] dark:text-slate-300 pt-2 text-[18px]">
              £250
            </p>
          </div>
          <div>
            <Image
              src={DandyChair}
              width={200}
              height={200}
              alt="DandyChair"
              className="w-[185px] sm:w-[300px] h-[201px] sm:h-[375px]"
            />
            <p className="text-[#1a253c] dark:text-slate-300 pt-6 text-[20px]">
              The Dandy chair{" "}
            </p>
            <p className="text-[#1a253c] dark:text-slate-300 pt-2 text-[18px]">
              £250
            </p>
          </div>
          <div>
            <Image
              src={DandyChair}
              width={200}
              height={200}
              alt="DandyChair"
              className="w-[185px] sm:w-[300px] h-[201px] sm:h-[375px]"
            />
            <p className="text-[#1a253c] dark:text-slate-300 pt-6 text-[20px]">
              The Dandy chair{" "}
            </p>
            <p className="text-[#1a253c] dark:text-slate-300 pt-2 text-[18px]">
              £250
            </p>
          </div>
        </div>
        <button className="w-[260px]  mx-auto  bg-gray-300 text- text-[#1a253c] dark:bg-[#f9f9f93c]  px-8 py-4 sm:w-[220px]">
          View collection
        </button>
      </div>
      <div>
        <p className="pb-[21px] md:pt-[100px] sm:pt-[70px] pt-[40px] dark:text-slate-200 text-2xl text-center text-[#1a253c]">
          What makes our brand different
        </p>
        <div className="flex flex-wrap justify-center gap-8 px-4 py-4">
          <div className="group w-[342px] md:w-[270px] p-3 rounded-md hover:shadow-2xl hover:z-10 duration-200 ">
            <TbTruckDelivery className="text-[24px] group-hover:text-cyan-700 duration-200" />
            <p className="text-xl  text-[#1a253c] dark:text-slate-300 pt-4">
              Next day as standard
            </p>
            <p className="text-[16px]  text-[#1a253c] dark:text-slate-300 pt-2">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="group w-[342px] md:w-[270px]  p-4 rounded-md hover:shadow-2xl hover:z-10 duration-200">
            <FaRegCheckCircle className="group-hover:text-green-500 text-[24px] duration-200" />
            <p className="text-xl  text-[#1a253c] dark:text-slate-300 pt-4">
              Made by true artisans
            </p>
            <p className="text-[16px]  text-[#1a253c] dark:text-slate-300 pt-2">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          <div className="group w-[342px] md:w-[270px]  p-4 rounded-md hover:shadow-2xl hover:z-10 duration-200">
            <CiCreditCard1 className="group-hover:text-yellow-300 text-[24px] duration-200" />
            <p className="text-xl  text-[#1a253c] dark:text-slate-300 pt-4">
              Unbeatable prices
            </p>
            <p className="text-[16px]  text-[#1a253c] dark:text-slate-300 pt-2">
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>
          <div className="group w-[342px]  md:w-[270px]  p-4 rounded-md hover:shadow-2xl hover:z-10 duration-200">
            <PiPlantBold className="text-[24px] group-hover:text-green-500 duration-200" />
            <p className="text-xl  text-[#1a253c] dark:text-slate-300 pt-4">
              Recycled packaging
            </p>
            <p className="text-[16px]  text-[#1a253c] dark:text-slate-300 pt-2">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[52px] mb-12 flex flex-col justify-center bg-white dark:bg-[#23314e] max-w-[1273px] sm:h-[364px] h-[320px] ">
        <p className="md:pt-[68px] px-1 pt-4 text-center sm:text-[32px] text-[20px]  text-[#2A254B] dark:text-slate-200">
          Join the club and get the benefits
        </p>
        <p className="pt-4 px-1 text-center max-w-[470px] mx-auto text-[#2A254B] dark:text-slate-200">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <form className="pt-[72px] flex mx-auto">
          <input
            type="email"
            className="outline-none  w-[170px] sm:w-[350px] md:w-[400px]  lg:w-[542px] py-4 pl-[16px] sm:pl-[32px] placeholder:pr-40 bg-slate-200 placeholder-[#2A254B] text-[#2A254B]"
            placeholder="your@email.com"
            required
          />
          <button
            type="submit"
            className="w-[100px] sm:w-[118px] bg-[#1a253c] text-slate-200 font-medium"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProDetails;
