import React, { createContext, useContext, useState } from 'react';
import { ItemCounter } from '~/components/CartButton/styles';

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
  removeItem: (id: number) => void;
  addItem: ({ coffeeData }: CoffeeCardProps) => void;
  setCart: React.Dispatch<React.SetStateAction<ItemsProps[]>>;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as CartContextType);

function CartContextProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ItemsProps[]>([]);

  function addItem({ coffeeData }: CoffeeCardProps) {
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

  function removeItem(id: number) {
    const hasItemInCart = cart.find((item) => item.id === id);

    if (!!hasItemInCart) {
      return setCart((cart) =>
        cart.map((item) => {
          if (item.id === hasItemInCart.id && item.amount > 1) {
            return { ...item, amount: item.amount - 1 };
          }

          return item;
        })
      );
    }

    return console.log(`Remover ${id}`);
  }

  return (
    <CartContext.Provider value={{ items: cart, setCart, addItem, removeItem }}>
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
