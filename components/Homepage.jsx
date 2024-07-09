"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import rocket from "@icons/rocket.svg";
import like from "@icons/likeIcon.svg";
import likedIcon from '@icons/likedIcon.png'
import phone from "@icons/phonecall.svg";
import truck from "@icons/truck.svg";
import Hero from "@images/hero.png";
import StarRating from "./StarRating";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useCart } from "@/providers/CartProvider";
import { FaLike } from "react-icons/fa6"

// Shared Tailwind CSS classes
const cardStyles = "bg-white rounded-lg shadow";
const textPrimary = "text-primary";
const textMutedForeground = "text-[8px] md:text-sm text-[#5D5D5D] font-bold";

const Features = [
  { image: rocket, title: "Worldwide Shipping", mode: "On Order Over 4 Items" },
  {
    image: truck,
    title: "14-Days Money Back Guarantee",
    mode: "On Order Over 4 Items",
  },
  {
    image: phone,
    title: "24/7 Full Customer Support",
    mode: "To All Our Items",
  },
];

const HomePage = () => {
  const { push } = useRouter();
  const { data, cartItems } = useCart();
  console.log(cartItems, "Cart");
  const StoreItems = data.slice(0,8);
  const NewArrival = data.slice(8, )
  const [likedItems, setLikedItems] = useState(Array(StoreItems.length).fill(false));
  const [mobile, setIsMobile] = useState(false);

  const handleLike = (index) => {
    setLikedItems((prev) =>
      prev.map((liked, i) => (i === index ? !liked : liked))
    );
  };
  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#E7E7E7] text-foreground pb-28">
      {/* Hero Section */}
      <section className="relative">
        <Image src={Hero} alt="hero-picture" />
        <div className="absolute inset-0 flex items-center justify-start md:justify-center bg-black bg-opacity-50">
          <div className="md:w-[600px] xl:w-[1140px] pl-[100px] md:pl-0 xl:pl-[100px]">
            <h1 className="w-[250px] md:w-[624px] text-2xl md:text-[60px] lg:text-[72px] font-bold text-white md:leading-[68px] lg:leading-[80px] lg:tracking-[1.44px]">
              Kitchen Cooking Wares
            </h1>
          </div>
        </div>
      </section>
      <div className="w-[82.29%] mx-auto">
        {/* Features Section */}
        <section className="flex justify-center items-center py-8 gap-20">
          {Features.map((item, index) => (
            <div
              key={item.title}
              className="flex justify-center items-center gap-2"
            >
              <Image
                aria-hidden="true"
                src={item.image}
                alt={item.title}
                width={54}
                height={54}
                className="w-[24px] md:w-[54px] h-[24px] md:h-[54px] p-3 border-b-2 md:border-r-2 border-[#757575]"
              />
              <div className="flex flex-col py-1 px-2">
                <span className="mt-2 text-xs md:text-base text-[#454545] font-bold">
                  {item.title}
                </span>
                <span className={textMutedForeground}>{item.mode}</span>
              </div>
            </div>
          ))}
        </section>
        {/* Deal Of The Week Section */}
        <section className="w-full flex flex-col gap-5">
          <p className="w-full text-xl font-bold text-start py-2 border-b border-[#D1D1D1]">
            New Arrivals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] md:gap-[30px]">
            {NewArrival.map((item, index) => (
              <div key={index} className={`${cardStyles}`}>
                <div className="relative group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={360}
                    height={202}
                    className="w-full"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end items-center gap-[33px] pt-[77px] pb-[20px] pl-[33px] pr-[32px] bg-black bg-opacity-50  opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-white text-center text-lg font-bold mb-2 leading-6 tracking-wide break-words">
                      {item.description}
                    </h3>
                    <button className="flex px-2 py-1 bg-neutral-100 rounded justify-center items-center gap-2.5">
                      <p className="text-neutral-800 text-xs font-bold capitalize leading-none tracking-tight">View Details</p>
                    </button>
                  </div>
                </div>
                <div className="mt-4 p-4">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <div className="flex items-center mt-2">
                    <StarRating
                      maxRating={5}
                      size={40}
                      defaultRating={item.rating}
                    />
                  </div>
                  <p className={`mt-2 ${textPrimary} font-bold`}>
                    ${parseFloat(item.price).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Pots And Pans Section */}
        <section className="w-full flex flex-col gap-5 mt-2">
          <p className="w-full text-xl font-bold text-start py-2 border-b border-[#D1D1D1]">
            Pots And Pans
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3 xl:gap-x-4 gap-y-5">
            {StoreItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 bg-white rounded-lg shadow p-2 hover:scale-105 hover:transition-all"
              >
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={`Product ${item.title}`}
                    width={261}
                    height={255}
                    className="w-full"
                  />
                  <div className="absolute top-0 right-0">
                    <div className="p-[10px]" onClick={() => handleLike(index)}>
                      <Image
                        src={likedItems[index] ? likedIcon : like}
                        alt="like button"
                        width={20}
                        height={20}
                        className={`${likedItems[index]? "w-[20px] h-[20px]": "w-[20px] h-[20px]"} w-full cursor-pointer`}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <StarRating
                    maxRating={5}
                    size={mobile? 12 : 30}
                    defaultRating={item.rating}
                  />
                  <div className="h-full">
                    <Button rounded onClick={() => push(`/${index}`)}>
                      View in Cart
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-1 px-1 py-2 border-t border-t-neutral-400">
                  <h3 className="text-[8px] md:text-xs font-semibold capitalize">
                    {item.title}
                  </h3>
                  <p className={`${textPrimary} font-semibold text-[8px] md:text-base`}>${parseFloat(item.price).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
