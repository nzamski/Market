import { addOrder } from "../repositories/orderRepository.js";
import { buyProduct } from "./productService.js";

const addNewOrder = async (products) => {
  products.forEach(({id, amountOrdered}) => {
    buyProduct(id, amountOrdered);
  });

  const totalOrderPayment = products.reduce(
    (sum, { amountOrdered, price }) => sum + price * amountOrdered,
    0
  );

  return addOrder(products, totalOrderPayment);
};

export { addNewOrder };
