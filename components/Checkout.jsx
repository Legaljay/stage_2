import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/providers/CartProvider";
import deleteIcon from "@icons/delete.svg";
import useScreenSize from "@/hooks/useScreenSize";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const { cartItems, setCartItems } = useCart();
  const { mobile, setIsMobile } = useScreenSize();
  const { push } = useRouter();

  const handleQuantityChange = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + change, 1) }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems?.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const shipping = 10.0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <main className="mt-0 md:mt-4 flex flex-col w-[95%] md:w-[82.29%] mx-auto">
        <h1 className="text-2xl font-bold p-2 border-b">Checkout</h1>
        <table className="w-full border-collapse">
          {!mobile && (
            <thead>
              <tr className="border-b text-neutral-500 md:text-sm lg:text-lg xl:text-xl capitalize leading-loose tracking-tight">
                <th className="text-left pt-4 pb-4 pr-4 pl-[150px]">Product</th>
                <th className="text-left p-4">Price</th>
                <th className="text-left p-4">Quantity</th>
                <th className="text-left p-4">Total</th>
              </tr>
            </thead>
          )}
          {mobile ? (
            <Mobile
              cartItems={cartItems}
              deleteItem={handleDelete}
              handleQuantityChange={handleQuantityChange}
              total={total}
            />
          ) : (
            <tbody>
              {cartItems.map((item, i) => (
                <tr key={item.id} className="border-b">
                  <td className="p-4 flex items-center gap-8">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={163}
                      height={163}
                    />
                    <div className="flex flex-col text-[#454545] md:text-sm lg:text-base">
                      <span className="block font-bold">{item.title}</span>
                      <span>{item.desc}</span>
                    </div>
                  </td>
                  <td className="p-4 text-neutral-800 md:text-base lg:text-xl xl:text-2xl font-bold capitalize leading-loose tracking-wide">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="p-4 ">
                    <div className="flex justify-center items-center border border-[#B0B0B0] h-fit w-fit">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="w-7 md:w-9 aspect-square text-[#262626] bg-[#B0B0B0] text-xl cursor-pointer"
                      >
                        <span className="p-2 md:text-sm lg:text-xl xl:text-4xl">
                          -
                        </span>
                      </button>
                      <span className="px-4 md:text-sm lg:text-base xl:text-xl font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="w-7 md:w-9 aspect-square text-[#262626] bg-[#B0B0B0] text-xl cursor-pointer"
                      >
                        <span className="p-2 md:text-base lg:text-2xl xl:text-4xl">
                          +
                        </span>
                      </button>
                    </div>
                  </td>
                  <td className="p-4 text-neutral-800 md:text-base lg:text-xl xl:text-2xl font-bold capitalize leading-loose tracking-wide">
                    <span className="flex justify-center items-center gap-3">
                      <span>${(item.quantity * item.price).toFixed(2)}</span>
                      <button
                        className="cursor-pointer"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Image
                          src={deleteIcon}
                          alt=""
                          width={30}
                          height={30}
                          className=""
                        />
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        <div className="mt-8 w-full md:w-[368px] self-end ml-[50px] md:mr-[98px] flex flex-col gap-1">
          <div className="flex justify-between text-base font-bold capitalize leading-7 tracking-tight">
            <span className="text-neutral-500">Subtotal:</span>
            <span className="text-neutral-800">${subtotal.toFixed(2)}</span>
          </div>
          <div className="pt-5 pb-4 flex justify-between mt-2 text-base font-bold capitaliz leading-7 tracking-tight">
            <span className="text-neutral-500">International Shipping:</span>
            <span className="text-neutral-800">${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-2 font-bold py-2.5 border-t border-[#757575] text-neutral-800 text-base capitalize leading-7 tracking-tight">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button onClick={() => push('checkout/success')} className="w-full rounded-md bg-neutral-800 text-neutral-100 py-3 mt-4 text-xl font-bold capitalize leading-7 tracking-tight">
            Checkout
          </button>
        </div>
      </main>
    </div>
  );
};

export default Checkout;

const Mobile = ({ cartItems, deleteItem, total, handleQuantityChange }) => {
  return (
    <tbody>
      {cartItems.map((item, i) => (
        <tr key={item.id} className="border-b">
          <td className="p-4 w-2/4">
            <div className="relative">
              <Image
                src={item.image}
                alt={item.title}
                width={163}
                height={163}
              />
              <button
                onClick={() => deleteItem(item.id)}
                className="absolute top-2 left-2 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </td>
          <td className="p-4 w-2/4">
            <div className="flex flex-col justify-between h-full">
              <div className="font-bold text-[#454545] tracking-[0.32px] leading-6 capitalize">
                <h3 className="">{item.title}</h3>
                <p className="">(Your Kitchen&lsquo;s New Best Friend!)</p>
              </div>
              <div className="flex items-center mt-4">
                <div className="flex justify-center items-center border border-[#B0B0B0] h-fit w-fit">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="px-2 py-1 border text-[#262626] bg-[#B0B0B0] cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="px-2 py-1 border text-[#262626] bg-[#B0B0B0] cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <span className="ml-auto text-lg font-bold">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
