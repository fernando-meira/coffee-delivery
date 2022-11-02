import arabe from '~/assets/coffees/Type=Arabe.svg';
import latte from '~/assets/coffees/Type=Latte.svg';
import cubano from '~/assets/coffees/Type=Cubano.svg';
import cremoso from '~/assets/coffees/Type=Cremoso.svg';
import expresso from '~/assets/coffees/Type=Expresso.svg';
import havaiano from '~/assets/coffees/Type=Havaiano.svg';
import irlandes from '~/assets/coffees/Type=Irlandes.svg';
import americano from '~/assets/coffees/Type=Expresso.svg';
import gelado from '~/assets/coffees/Type=CafeGelado.svg';
import capuccino from '~/assets/coffees/Type=Capuccino.svg';
import macchiato from '~/assets/coffees/Type=Macchiato.svg';
import mochaccino from '~/assets/coffees/Type=Mochaccino.svg';
import comLeite from '~/assets/coffees/Type=CafecomLeite.svg';
import chocolateQuente from '~/assets/coffees/Type=ChocolateQuente.svg';

export const coffeesData = [
  {
    id: 0,
    image: expresso,
    tags: ['tradicional'],
    title: 'Expresso Tradicional',
    subtitle: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    stock: 10,
  },
  {
    id: 1,
    image: americano,
    tags: ['tradicional'],
    title: 'Expresso Americano',
    subtitle: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    stock: 10,
  },
  {
    id: 2,
    image: cremoso,
    tags: ['tradicional'],
    title: 'Expresso Cremoso',
    subtitle: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    stock: 10,
  },
  {
    id: 3,
    image: gelado,
    tags: ['tradicional', 'gelado'],
    title: 'Expresso Gelado',
    subtitle: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    stock: 10,
  },
  {
    id: 4,
    image: comLeite,
    tags: ['tradicional', 'com leite'],
    title: 'Café com Leite',
    subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    stock: 10,
  },
  {
    id: 5,
    image: latte,
    tags: ['tradicional', 'com leite'],
    title: 'Latte',
    subtitle:
      'Uma dose de café expresso co       dobro de leite e espuma cremosa',
    price: 9.9,
    stock: 10,
  },
  {
    id: 6,
    image: capuccino,
    tags: ['tradicional', 'com leite'],
    title: 'Capuccino',
    subtitle: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    stock: 10,
  },
  {
    id: 7,
    image: macchiato,
    tags: ['tradicional', 'com leite'],
    title: 'Macchiato',
    subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    stock: 10,
  },
  {
    id: 8,
    image: irlandes,
    tags: ['especial', 'alcoólico'],
    title: 'Irlandês',
    subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    stock: 10,
  },
  {
    id: 9,
    image: mochaccino,
    tags: ['tradicional', 'com leite'],
    title: 'Mocaccino',
    subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    stock: 10,
  },
  {
    id: 10,
    image: chocolateQuente,
    tags: ['especial', 'com leite'],
    title: 'Chocolate Quente',
    subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    stock: 10,
  },
  {
    id: 11,
    image: cubano,
    tags: ['especial', 'alcoólico', 'gelado'],
    title: 'Cubano',
    subtitle: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    stock: 10,
  },
  {
    id: 12,
    image: havaiano,
    tags: ['especial'],
    title: 'Havaiano',
    subtitle: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    stock: 10,
  },
  {
    id: 13,
    image: arabe,
    tags: ['especial'],
    title: 'Árabe',
    subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    stock: 10,
  },
];
