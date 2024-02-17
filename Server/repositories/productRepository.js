import products from "../data/products.json" assert { type: "json" };

const getProducts = async () => products;

const updateStorageAmount = async (id, amountOrdered) => {
  const products = await getProducts();
  const productToChange = products.find((currProduct) => currProduct.id === id);

  productToChange.inStockQuantity -= amountOrdered;
};

export { getProducts, updateStorageAmount };
