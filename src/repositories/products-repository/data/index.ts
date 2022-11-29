export const productsData: ProductType[] = [
  {
    value: "bread",
    price: 3,
    stock: 1300,
    made: "Sweden",
    id: 1,
  },
  {
    value: "milk",
    price: 2,
    stock: 246,
    made: "Poland",
    id: 2,
  },
  {
    value: "cucumber",
    price: 0.7,
    stock: 1521,
    made: "Australia",
    id: 3,
  },
  {
    value: "potato",
    price: 0.4,
    stock: 12928,
    made: "Poland",
    id: 4,
  },
  {
    value: "margarine",
    price: 1.9,
    stock: 729,
    made: "Canada",
    id: 5,
  },
  {
    value: "eggs",
    price: 2.2,
    stock: 8725,
    made: "New Zealand",
    id: 6,
  },
  {
    value: "baguette",
    price: 1.3,
    stock: 476,
    made: "France",
    id: 7,
  },
  {
    value: "apple",
    price: 1.4,
    stock: 42,
    made: "Australia",
    id: 8,
  },
  {
    value: "olive oil",
    price: 3.2,
    stock: 2533,
    made: "Greece",
    id: 9,
  },
  {
    value: "tomato",
    price: 1.8,
    stock: 239,
    made: "Netherlands",
    id: 10,
  },
  {
    value: "orange",
    price: 3.4,
    stock: 82,
    made: "United States",
    id: 11,
  },
];

export type ProductType = {
  value: string;
  price: number;
  stock: number;
  made: string;
  id: number;
};
