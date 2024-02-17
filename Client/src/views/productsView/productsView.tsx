import { Grid } from "@mui/material";
import { Product } from "src/components/Product";
import { useGetAllProducts } from "src/services/productsService";

export const ProductsView = () => {
  const { data: products, isPending } = useGetAllProducts();

  return (
    <>
      <h1>המוצרים שלנו</h1>

      {isPending ? (
        <h1>Pending</h1>
      ) : (
        <Grid container spacing={2}>
          {products.map((product: any) => (
            <Grid item xs={3} key={product.id}>
              <Product
                id={product.id}
                name={product.name}
                price={product.price}
                inStockQuantity={product.inStockQuantity}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
