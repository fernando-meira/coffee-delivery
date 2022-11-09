export interface CoffeeCardProps {
  coffeeData: {
    id: number;
    image: string;
    title: string;
    price: number;
    stock: number;
    tags: string[];
    subtitle: string;
  };
}
