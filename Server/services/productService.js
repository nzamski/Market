import {
  getProducts,
  updateStorageAmount
} from "../repositories/productRepository.js";

const getAllProducts = () => getProducts();

const buyProduct = async (id, amountOrdered) => {
  updateStorageAmount(id, amountOrdered);
};

export { getAllProducts, buyProduct };
