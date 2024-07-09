"use client";

import Checkout from '@/components/Checkout'
import Notify from '@/components/Notify';
import { useCart } from '@/providers/CartProvider';
import React from 'react'

const Checkoutpage = () => {
    const { cartItems } = useCart();
  return (
    <div>
        {cartItems.length > 0 ?
            <Checkout/> : <Notify success={false}/>
        }
    </div>
  )
}

export default Checkoutpage