import { Nullable } from "../../common";
import { productsData, ProductType } from "./data";
export const productRepository = {
  findProduct: async (value?: string): Promise<ProductType[]> => {
    if (value) {
      return productsData.filter((product) => product.value.includes(value));
    }
    return productsData;
  },

  findProductById: async (id: number): Promise<Nullable<ProductType>> => {
    const foundProduct = productsData.find((product) => product.id === id);
    if (foundProduct) {
      return foundProduct;
    }
    return null;
  },

  deleteProduct: async (id: number): Promise<Boolean> => {
    const productIndex = productsData.findIndex((product) => product.id === id);
    if (productIndex > -1) {
      productsData.splice(productIndex, 1);
      return true;
    }
    return false;
  },

  createProduct: async (data: ProductType): Promise<ProductType> => {
    const schemeKeys = Object.keys(productsData[0]) as (keyof ProductType)[];
    const dataKeys = Object.keys(data) as (keyof ProductType)[];
    dataKeys.forEach((key) => {
      if (!schemeKeys.includes(key)) {
        delete data[key];
      }
    });
    const newProduct = {
      ...data,
      id: +new Date(),
    };
    productsData.unshift(newProduct);
    return newProduct;
  },

  updateProduct: async (
    id: number,
    data: Partial<ProductType>
  ): Promise<Boolean> => {
    const product = productsData.find((product) => product.id === id);
    const dataKeys = Object.keys(data) as (keyof typeof product)[];

    if (product && dataKeys.length) {
      dataKeys.forEach((key) => {
        if (product[key] && key !== "id") {
          product[key] = data[key];
        }
      });

      return true;
    }

    return false;
  },
};
