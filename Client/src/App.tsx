import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductsView } from "src/views/productsView/productsView";
import { ShoppingCartContext } from "src/context/shoppingCartContext";

const App = () => {
  const theme = createTheme({
    direction: "rtl",
  });
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ShoppingCartContext.Provider value={[]}>
          <ProductsView />
        </ShoppingCartContext.Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
