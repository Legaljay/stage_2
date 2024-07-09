"use client"

import Button from '@/components/Button'
import Image from 'next/image'
import React, { useState } from 'react'
import Testimonials from '@/components/Testimonials';
import Description from '@/components/Description';
import AddInfo from '@/components/AddInfo';
import { useRouter } from 'next/navigation';
import { useCart } from '@/providers/CartProvider';

const Individualpage = ({ params }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [count, setCount] = useState(0);
  const { push } = useRouter();
  const { cartItems, setCartItems, data } = useCart();

  const tabs = ["Description", "Customer's Review", "Additional Information"];

  const Item = data[params.id];

  const handleButtonClick = () => {
    if (count <= 0) return;
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === Item.id);
  
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === Item.id ? { ...item, quantity: item.quantity + count } : item
        );
      } else {
        return [...prevItems, { ...Item, quantity: count }];
      }
    });
    push('/checkout');
  }

  const selectTab = (activeTab) => {
    setActiveTab(activeTab);
  }

  const addCount = () => {
    setCount((prev) => prev + 1);
  }

  const reduceCount = () => {
    setCount((prev) => prev != 0 ? prev - 1 : 0);
  }

  return (
    <div className='w-[82.29%] mx-auto'>
      <div className="w-full h-full p-2 border-b border-gray-300 justify-start items-center inline-flex">
        <div className="text-center text-gray-800 text-xl font-inter font-bold capitalize leading-8 tracking-wide break-words">
            Product Details
        </div>
    </div>
      <div className='flex py-9 gap-[85px] border-t border-[#B0B0B0]'>
        <div className='w-full bg-white flex items-center justify-center p-4'>
          <Image src={Item.image} alt={Item?.title} width={37} height={372} className='w-full aspect-square'/>
        </div>
        <div className='flex flex-col justify-between'>
          <div>
            <p className='text-[#262626] font-bold text-[28px]'>{Item?.title}</p>
            <p className='text-[#4F4F4F] font-bold text-[28px]'>(Your Kitchen&apos;s New Best Friend!)</p>
            <p className='text-[#757575] font-bold text-base capitalize leading-7 tracking-[0.32px]'>{Item?.description}</p>
          </div>
          <div className='flex flex-col gap-3'>
            <p className='text-[#262626] font-bold text-[28px]'>Price: ${Item?.price.toFixed(2)}</p>
            <div className='flex gap-3'>
              <span className='text-[#262626] font-semibold text-xs'>Category:</span>
              <span className='text-[#262626] font-medium text-xs'>{Item?.category}</span>
            </div>
            <div className='flex gap-3'>
              <span className='text-[#262626] font-semibold text-xs'>Available:</span>
              <span className='text-[#262626] font-medium text-xs'>{Item?.available}</span>
            </div>
            <div className='flex justify-between'>
              <div className='border border-[#B0B0B0] w-fit'>
                <button className='w-9 aspect-square text-[#262626] bg-[#B0B0B0] text-xl' onClick={reduceCount}>-</button>
                <span className='text-xl px-7 bg-white'>{count}</span>
                <button className='w-9 aspect-square text-[#262626] bg-[#B0B0B0] text-xl' onClick={addCount}>+</button>
              </div>
              <div className='flex gap-9'>
                <Button onClick={handleButtonClick} size='medium' rounded>Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-start border-t border-[#D1D1D1] px-8 pb-24'>
        <div className={`w-4/5 flex justify-between p-3 `}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => selectTab(index)}
              className={`w-fit flex justify-center items-center gap-3 cursor-pointer pt-2 transition-all body-medium ${ activeTab == index && "border-b-2 border-[#4F4F4F]"}`}> {/* ${activeTab == index ? 'bg-white font-regular' : 'hover:bg-white'} */}
              <p className='whitespace-nowrap text-[#4F4F4F] font-bold'>{tab}</p>
            </button>
          ))}
        </div>
        {activeTab === 0 && (
            <Description/>
          )}
          {activeTab === 1 && (
            <Testimonials/>
          )}
          {activeTab === 2 && (
            <AddInfo/>
          )}
      </div>
    </div>
  )
}

export default Individualpage