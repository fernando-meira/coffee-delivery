import React, { createContext, useContext, useState } from 'react';

interface ItemsProps {
  id: 0;
  image: string;
  title: string;
  price: number;
  amount: number;
}

interface CartContextType {
  items?: ItemsProps[];
  setCart: React.Dispatch<React.SetStateAction<never[]>>;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as CartContextType);

function CartContextProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ items: cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart(): CartContextType {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within an CartProvider');
  }

  return context;
}

export { useCart, CartContextProvider };
