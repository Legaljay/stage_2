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
        <div className='mx-auto mt-[173px] mb-[189px] flex flex-col gap-[60px] items-center justify-center w-[485px]'>
            <div className='flex flex-col gap-7 items-center justify-center'>
                <div className={`p-12 flex items-center justify-center rounded-[80px] ${success? 'bg-[#DBFEDA]' : "bg-[#FFC6C6]" }`}>
                    <Image src={success ? checkIcon : cartBig} alt='check icon' className='w-full aspect-square'/>
                </div>
                {success ?
                    <div className='p-2'>
                    <p className='text-[#115613] text-center capitalize text-[32px] font-medium'>Your order has been saved!</p>
                    <p className='text-[#757575] text-center capitalize text-2xl font-medium'>Add your personal information and payment detail to complete order</p>
                </div>
                :
                <div className='p-2'>
                    <p className='text-[#EB2828] text-center capitalize text-[32px] font-medium'>Opps!! Nothing in your cart?</p>
                    <p className='text-[#757575] text-center capitalize text-2xl font-medium'>Looks like you haven’t added anything to your cart yet.</p>
                </div>
                }
            </div>
            <div>
                <Button size='large' rounded onClick={() => {success ? push("/") : push("/")}}>{success? "Proceed to Payment" : "Continue shopping"}</Button>
            </div>
        </div>
    </div>
  )
}

export default Notify