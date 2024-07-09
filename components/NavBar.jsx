"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import shop from "@icons/shoppingCart.svg";
import { useCart } from "@/providers/CartProvider";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  const { cartItems } = useCart();
  const [mobile, setIsMobile] = useState(false);

  const qttytotal = cartItems?.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems?.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const shipping = 10.0;
  const total = subtotal + shipping;

  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="p-6 bg-[#F6F6F6] shadow-md">
      <div className="flex justify-between items-center w-[95%] md:w-[82.29%] mx-auto">
        <div className="flex flex-col gap-1 md:gap-4 text-xs md:text-[28px] font-bold ">
          <span className="text-[#262626]">Culinary</span>
          <span className="text-[#6B92C5]">Charm</span>
        </div>
        <div className="flex items-center">
          {mobile ? (
            <span className="flex items-center justify-center px-4 py-2 rounded-lg bg-[#E7E7E7] w-[56px] h-[56px]">
              <FaSearch size={20} color="#262626" />
            </span>
          ) : (
            <>
              <input
                type="text"
                placeholder="Search for items here"
                className="bg-[#FFFFFF] rounded-s-lg p-[12px_20px] w-[455px] outline-none"
              />
              <button className="bg-[#262626] text-primary-foreground px-4 py-3 rounded-e-lg">
                <p className="text-white">Search</p>
              </button>
            </>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 rounded-lg bg-[#D1D1D1] w-[56px] h-[56px] relative">
            <Image src={shop} alt="Cart Icon" width={20} height={20} />
            {qttytotal > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#5D5D5D] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                {qttytotal}
              </span>
            )}
          </button>
          <div className="flex flex-col text-xs text-[#1F2632] font-semibold">
            <p>My Cart</p>
            <span>${subtotal == 0 ? 0 : total}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
