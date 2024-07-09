

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/providers/CartProvider";
import deleteIcon from "@icons/delete.svg";

const Checkout = () => {
    const { cartItems, setCartItems } = useCart();

  const handleQuantityChange = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + change, 1) } : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) =>
        item.id !== id
      )
    );
  }



  const subtotal = cartItems?.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const shipping = 10.0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <main className="mt-4 flex flex-col w-[82.29%] mx-auto">
        <h1 className="text-2xl font-bold p-2 border-b">Checkout</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-neutral-500 text-xl capitalize leading-loose tracking-tight">
              <th className="text-left pt-4 pb-4 pr-4 pl-[150px]">Product</th>
              <th className="text-left p-4">Price</th>
              <th className="text-left p-4">Quantity</th>
              <th className="text-left p-4">Total</th>
            </tr>
          </thead>
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
                  <div className="flex flex-col text-[#454545] text-base">
                    <span className="block font-bold">{item.title}</span>
                    <span>{item.desc}</span>
                  </div>
                </td>
                <td
                  className="p-4 text-neutral-800 text-2xl font-bold capitalize leading-loose tracking-wide"
                >
                  ${item.price.toFixed(2)}
                </td>
                <td className="p-4 ">
                    <div className="flex justify-center items-center border border-[#B0B0B0] h-fit w-fit">
                        <button
                            onClick={() => handleQuantityChange(item.id, -1)}
                            className="w-9 aspect-square text-[#262626] bg-[#B0B0B0] text-xl cursor-pointer"
                        >
                            <span className="p-2 text-4xl">-</span>
                        </button>
                        <span className="px-4 text-xl font-bold">{item.quantity}</span>
                        <button
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="w-9 aspect-square text-[#262626] bg-[#B0B0B0] text-xl cursor-pointer"
                        >
                            <span className="p-2 text-4xl">+</span>
                        </button>
                    </div>
                </td>
                <td className="p-4 text-neutral-800 text-2xl font-bold capitalize leading-loose tracking-wide">
                    <span className="flex justify-center items-center gap-3">
                        <span>${(item.quantity * item.price).toFixed(2)}</span>
                        <button className='cursor-pointer' onClick={() => handleDelete(item.id)}>
                            <Image src={deleteIcon} alt='' width={30} height={30} className=''/>
                        </button>
                    </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-8 w-[368px] self-end mr-[98px] flex flex-col gap-1">
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
          <button className="w-full rounded-md bg-neutral-800 text-neutral-100 py-3 mt-4 text-xl font-bold capitalize leading-7 tracking-tight">
            Checkout
          </button>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
