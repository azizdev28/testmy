"use client";
// import { CartImage } from "@/assets";
import { useCartStore } from "@/store/useCartStore";
import useFromStore from "@/store/useFromStore";
// import { Product } from "@/types/Product";
// import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Cart = ({ product }: any) => {
  const [quantity, setQuantity] = useState(1);
  // const [totalPrice, setTotalPrice] = useState();
  // const [cartState, setCartState] = useState<Product[]>([]);
  const cart = useFromStore(useCartStore, (state) => state.cart);

  // CART ADD

  let total = 0;
  if (cart) {
    total = cart.reduce(
      (acc, product) => acc + product.price * (product.quantity as number),
      0
    );
  }

  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    // setTotalPrice(totalPrice + pricePerProduct);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      // setTotalPrice(totalPrice - pricePerProduct);
    }
  };

  return (
    <section>
      <div className="container mx-auto lg:px-[62px] px-[20px]">
        <p className="sm:text-[36px] text-[24px] md:pt-[64px] text-center md:text-start pb-[40px] sm:pb-[50px]">
          Your shopping cart
        </p>
        <div className="justify-between  hidden sm:flex pb-[12px] ">
          <p className="text-[14px] text-[#2A254B] dark:text-slate-200">
            Product
          </p>
          <p className="text-[14px] text-[#2A254B] dark:text-slate-200 pl-48">
            Quantity
          </p>
          <p className="text-[14px] text-[#2A254B] dark:text-slate-200">
            Total
          </p>
          <p></p>
        </div>
        <hr className=" pt-[12px]  hidden sm:flex" />
        {cart?.map((product) => (
          <div
            key={product.id}
            // product={product}
            className="flex sm:justify-between py-[20px] items-center justify-center"
          >
            <div className="flex">
              <img
                src={product.image}
                alt={product.name}
                className="sm:w-[109px] sm:h-[144px] w-[133px] h-[180px]"
              />
              <div className="flex flex-col">
                <p className="sm:text-[20px] text-[18px] text-[#2A254B] dark:text-slate-200 pl-[21px]">
                  {product.name}
                </p>
                <p className="text-[14px] sm:py-2  text-[#2A254B] dark:text-slate-200 pl-[21px] w-full sm:max-w-[179px]">
                  {product.description}{" "}
                </p>
                <p className=" text-[#2A254B] dark:text-slate-200 pl-[21px]">
                  £{product.price}
                </p>
                <div className="flex justify-between pt-2">
                  <div className="items-center gap-5 pl-[21px] flex sm:hidden">
                    <button onClick={decreaseQuantity}>-</button>
                    <p>{quantity}</p>
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button
                    title="Remove Product"
                    className="text-red-500 sm:hidden  hover:text-red-600 ml-4"
                    onClick={() => removeFromCart(product)}
                  >
                    <FaTrashAlt className="text-[20px] sm:text-[28px]" />
                  </button>
                </div>
              </div>
            </div>
            <div className="items-center gap-5 pl-[21px] hidden sm:flex">
              <button onClick={decreaseQuantity}>-</button>
              <p>{quantity}</p>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <p className="text-[18px] hidden sm:block">£ {total}</p>
            <button
              title="Remove Product"
              className="text-red-500 hidden sm:flex hover:text-red-600 ml-4"
              onClick={() => removeFromCart(product)}
            >
              <FaTrashAlt size={28} />
            </button>
          </div>
        ))}

        <div className="">
          <p className="sm:text-end text-center pt-4">${total.toFixed(2)} </p>
          <p className="sm:text-end text-center">
            Taxes and shipping are calculated at checkout
          </p>
          <div className="flex justify-center sm:justify-end">
            <button
              type="submit"
              className=" mb-[48px] mt-4 w-[172px]  flex  items-center justify-center h-[56px] bg-[#1a253c] text-slate-200 font-medium"
            >
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
