import { HomeLast } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import { PiPlantBold } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";

const About = () => {
  return (
    <div>
      <div className="container mx-auto lg:px-[62px] px-[20px]">
        <p className="sm:text-[36px] text-[24px] pt-[32px] max-w-[709px] w-full  mx-auto text-[#1a253c] dark:text-slate-200">
          A brand built on the love of craftmanship, quality and outstanding
          customer service
        </p>
        <div className=" w-full md:flex    md:pt-[65px] pt-[20px]">
          <div className=" md:w-[50%] w-[100%]  mx-auto md:p-10 sm:p-8 p-4">
            <p className="sm:text-[32px]  text-[20px] leading-10 dark:text-white text-[#23314e]  pb-8">
              From a studio in London to a global brand with over 400 outlets
            </p>
            <p>
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market.
            </p>
            <p className="text-[18px] leading-7 pt-4 dark:text-white text-[#23314e]">
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>
            <Link href={"#"} className="mx-auto">
              <button className="w-[232px] mt-[62px] text-[#23314e] dark:bg-[#f9f9f9] px-8 py-4 sm:w-[220px]">
                Get in touch
              </button>
            </Link>
          </div>
          <div className="md:w-[50%] w-[100%] ">
            <Image src={HomeLast} alt="DandyChair" className=" h-full w-full" />
          </div>
        </div>
        <div className=" w-full md:flex">
          <div className="md:w-[50%] w-[100%] ">
            <Image src={HomeLast} alt="DandyChair" className=" h-full w-full" />
          </div>
          <div className=" md:w-[50%] w-[100%]  mx-auto md:p-10 sm:p-8 p-4">
            <p className="sm:text-[32px]  text-[20px] leading-10 dark:text-white text-[#23314e]  pb-8">
              From a studio in London to a global brand with over 400 outlets
            </p>
            <p>
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market.
            </p>
            <p className="text-[18px] leading-7 pt-4 dark:text-white text-[#23314e]">
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>
            <Link href={"#"} className="mx-auto">
              <button className="w-[232px] mt-[62px] text-[#23314e] dark:bg-[#f9f9f9] px-8 py-4 sm:w-[220px]">
                Get in touch
              </button>
            </Link>
          </div>
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
      </div>
      <div className="bg-[url('/EmailSignUp.png')]">
        <div className="mt-[52px] flex flex-col justify-center container mx-auto  max-w-[1273px] sm:h-[364px] h-[320px] ">
          <p className="md:pt-[68px] px-1 pt-4 text-center sm:text-[32px] text-[20px] text-slate-200">
            Join the club and get the benefits
          </p>
          <p className="pt-4 px-1 text-center max-w-[470px] mx-auto text-slate-200">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
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
    </div>
  );
};

export default About;
