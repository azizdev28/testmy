"use client";
import { useCartStore } from "@/store/useCartStore";
import { useProductsStore } from "@/store/useProductStore";
import allDatas from "@/store/useSingle";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Products = ({ product }: any) => {
  const [isOpenSorting, setIsOpenSorting] = useState(false);
  const { products, isLoading, error, fetchData } = useProductsStore();
  const [displayCount, setDisplayCount] = useState(6);
  let { getIddata } = allDatas();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Add to cart
  const addToCart = useCartStore((state) => state.addToCart);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const toggleDropdownSorting = () => {
    setIsOpenSorting(!isOpenSorting);
  };

  // LOAD MORE
  const loadMore = () => {
    setDisplayCount(displayCount + 3);
  };

  // Filter and Sort

  return (
    <div>
      <div>
        <div className="bg-[url('/pro-bg.jpg')] w-full h-[250px] -mt-12 ">
          <p className="container mx-auto text-[36px] sm:justify-start flex justify-center pt-32 pl-[10%]  text-white ">
            All products
          </p>
        </div>
        <div className="sm:flex container mx-auto lg:pl-[80px] sm:pl-[20px] pl-[10px] sm:pr-[20px] pr-[10px] pt-[48px]">
          {/* Dropdown in phone */}
          <div className="flex justify-between">
            <div className="sm:hidden">
              <div>
                <select
                  name="all"
                  id="all"
                  className="inline-flex justify-center  dark:bg-[#253454] dark:text-slate-200 rounded-md border border-gray-300 shadow-sm py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-[120px]"
                >
                  <option
                    value="furniture"
                    className="opacity-85 text-[0.875rem]"
                  >
                    Furniture
                  </option>
                  <option
                    value="homeware"
                    className="opacity-85 text-[0.875rem]"
                  >
                    Homeware
                  </option>
                  <option value="sofas" className="opacity-85 text-[0.875rem]">
                    Sofas
                  </option>
                  <option
                    value="lightFittings"
                    className="opacity-85 text-[0.875rem]"
                  >
                    Light fittings
                  </option>
                  <option
                    value="accessories"
                    className="opacity-85 text-[0.875rem]"
                  >
                    Accessories
                  </option>
                </select>
              </div>
            </div>

            <div className="sm:hidden">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center  rounded-md border border-gray-300 shadow-sm px-4 py-2  dark:bg-[#253454] dark:text-slate-200 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-[120px]"
                  onClick={toggleDropdownSorting}
                >
                  Sorting
                </button>
                {isOpenSorting && (
                  <div className="dropdown-content flex flex-col absolute right-2 text-gray-900 dark:bg-[#253454] bg-slate-200 opacity-85 dark:border-gray-600 dark:text-slate-200 rounded-lg w-[120px] mt-1">
                    <div className="w-full rounded-t-lg dark:border-gray-600">
                      <div className="flex items-center ps-3">
                        <input
                          id="vue-checkbox"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="vue-checkbox"
                          className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          0 - 100
                        </label>
                      </div>
                    </div>
                    <div className="w-full rounded-t-lg dark:border-gray-600">
                      <div className="flex items-center ps-3">
                        <input
                          id="vue-checkbox"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="vue-checkbox"
                          className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          101 - 250
                        </label>
                      </div>
                    </div>
                    <div className="w-full rounded-t-lg dark:border-gray-600">
                      <div className="flex items-center ps-3">
                        <input
                          id="vue-checkbox"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="vue-checkbox"
                          className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          250 +
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-[30vh] hidden sm:block">
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Product type
            </h3>
            <ul className="w-48 text-sm font-medium text-gray-900 dark:bg-[#253454] bg-white dark:border-gray-600 dark:text-white">
              <li className="w-full rounded-t-lg dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="vue-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="vue-checkbox"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Furniture
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="react-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="react-checkbox"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Homeware
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="angular-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="angular-checkbox"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Sofas
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="laravel-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="laravel-checkbox"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Light fittings
                  </label>
                </div>
              </li>

              <li className="w-full rounded-t-lg dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="laravel-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="laravel-checkbox"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Accessories
                  </label>
                </div>
              </li>
            </ul>
            <h3 className="mb-4 pt-[48px] font-semibold text-gray-900 dark:text-white">
              Price
            </h3>
            <ul className="w-48 text-sm font-medium text-gray-900  dark:bg-[#253454] bg-white dark:border-gray-600 dark:text-white">
              <li className="w-full rounded-t-lg dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="vue-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="vue-checkbox"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    0 - 100
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="react-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="react-checkbox"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    101 - 250
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="angular-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="angular-checkbox"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    250 +
                  </label>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            {isLoading ? (
              <p className="text-3xl text-center flex justify-center p-5">
                Loading...
              </p>
            ) : (
              <div className=" flex flex-wrap justify-center py-[20px] sm:py-[34px] gap-3 sm:gap-5 ">
                {products.slice(0, displayCount).map((product) => (
                  <div key={product.id}>
                    <div className="group overflow-hidden">
                      <Link
                        href={"/proDetails"}
                        onClick={() => getIddata(product.id)}
                        key={product.id}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className=" w-[163px] sm:w-[300px] h-[201px] sm:h-[375px]"
                        ></img>
                      </Link>
                      <div className="opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                        <button
                          onClick={() => addToCart(product)}
                          className="invisible opacity-75  group-hover:visible  relative flex items-center justify-center -mt-12 h-9 sm:h-12  bg-black w-full"
                        >
                          <p className="sm:text-xl text-base text-slate-200 font-medium">
                            Add to Cart
                          </p>
                        </button>
                      </div>
                    </div>
                    <p className="text-[#1a253c] dark:text-slate-300 pt-6 text-[20px]">
                      {product.name}{" "}
                    </p>
                    <p className="text-[#1a253c] dark:text-slate-300 pt-2 text-[18px]">
                      £{product.price}
                    </p>
                  </div>
                ))}
              </div>
            )}
            {displayCount < products.length && (
              <button
                onClick={loadMore}
                className="w-[260px] mb-8 mx-auto bg-gray-300 text-[#1a253c] dark:bg-[#f9f9f93c] px-8 py-4 sm:w-[220px]"
              >
                Load more
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
