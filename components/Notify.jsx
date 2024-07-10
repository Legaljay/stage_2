"use client"

import Image from 'next/image'
import React from 'react'
import checkIcon from "@icons/checkIcon.svg"
import cartBig from "@icons/cartBig.svg"
import Button from './Button'
import { useRouter } from 'next/navigation'

const Notify = ({success}) => {
    const { push } = useRouter();
  return (
    <div className='h-full w-full'>
        <div className="px-6 w-full h-full justify-start items-center flex">
            <div className=" p-3 w-full border-b border-gray-300 text-start text-gray-800 text-xl font-inter font-bold capitalize leading-8 tracking-wide break-words">
                Your Cart
            </div>
        </div>
        <div className='mx-auto mt-12 md:mt-[173px] mb-[140px] md:mb-[189px] flex flex-col gap-[60px] items-center justify-center w-[90%] md:w-[485px]'>
            <div className='flex flex-col gap-7 items-center justify-center'>
                <div className={`p-12 flex items-center justify-center rounded-full ${success? 'bg-[#DBFEDA]' : "bg-[#FFC6C6]" }`}>
                    <Image src={success ? checkIcon : cartBig} alt='check icon' className='w-full aspect-square'/>
                </div>
                {success ?
                    <div className='p-2 flex flex-col gap-2'>
                    <p className='text-[#115613] text-center capitalize text-xl md:text-[32px] font-medium'>Your order has been saved!</p>
                    <p className='text-[#757575] text-center capitalize text-sm md:text-2xl font-medium'>Add your personal information and payment detail to complete order</p>
                </div>
                :
                <div className='p-2 flex flex-col gap-2'>
                    <p className='text-[#EB2828] text-center capitalize text-2xl md:text-[32px] font-medium'>Opps!! Nothing in your cart?</p>
                    <p className='text-[#757575] text-center capitalize text-sm md:text-2xl font-medium'>Looks like you haven’t added anything to your cart yet.</p>
                </div>
                }
            </div>
            <div>
                <Button size='large' variation='large' rounded onClick={() => {success ? push("/") : push("/")}}>{success? "Proceed to Payment" : "Continue shopping"}</Button>
            </div>
        </div>
    </div>
  )
}

export default Notify