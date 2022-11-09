import React, { createContext, useContext, useState } from 'react';

import { CoffeeCardProps } from '~/interfaces/types/cart';

interface ItemsProps {
  id: number;
  image: string;
  title: string;
  price: number;
  amount: number;
}

interface CartContextType {
  items?: ItemsProps[];
  handleAddNewItem: ({ coffeeData }: CoffeeCardProps) => void;
  setCart: React.Dispatch<React.SetStateAction<ItemsProps[]>>;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as CartContextType);

function CartContextProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ItemsProps[]>([]);
  console.log('😁 ~ cart', cart);

  function handleAddNewItem({ coffeeData }: CoffeeCardProps) {
    const { id, price, image, title } = coffeeData;

    const hasThisItemInCart = cart.find((item) => item.id === id);

    const newItem = {
      id,
      image,
      title,
      price,
      amount: 1,
    };

    if (hasThisItemInCart) {
      return setCart((cart) =>
        cart.map((item) => {
          if (item.id === hasThisItemInCart.id) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        })
      );
    }

    return setCart((state) => [...state, newItem]);
  }

  return (
    <CartContext.Provider value={{ items: cart, setCart, handleAddNewItem }}>
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
