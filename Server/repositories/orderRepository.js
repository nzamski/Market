import orders from "../data/orders.json" assert { type: "json" };

const addOrder = (products, totalOrderPayment) => {
  const order = {
    id: orders.length + 1,
    products: products,
    totalOrderPayment: totalOrderPayment
  };
  orders.push(order);
  
  return order;
};

export { addOrder };
