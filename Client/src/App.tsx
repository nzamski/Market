import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductsView } from "./views/productsView/productsView";
import { ThemeProvider, createTheme } from "@mui/material";
import { ShoppingCartContext } from "context/shoppingCartContext";

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
