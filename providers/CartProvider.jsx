"use client";

import { mergedItems } from '@/constants/data';
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState(mergedItems)
  

  const [total, setTotal] = useState(0)

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, total, setTotal, data }}>
            {children}
    </CartContext.Provider>
  );
};
