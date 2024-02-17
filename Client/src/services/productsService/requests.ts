import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "http://localhost:3000/products";
const PRODUCTS_KEY = "products";

const useGetAllProducts = () =>
  useQuery({
    queryKey: [PRODUCTS_KEY],
    queryFn: () => axios.get(BASE_URL).then((response) => response.data),
  });

export { useGetAllProducts };
