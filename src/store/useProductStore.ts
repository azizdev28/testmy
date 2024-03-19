import { create } from "zustand";
import { Product } from "@/types/Product";

interface State {
  products: Product[];
  isLoading: boolean;
  error: any;
}

interface Actions {
  fetchData: () => Promise<void>;
}

const INITIAL_STATE: State = {
  products: [],
  isLoading: false,
  error: null,
};

export const useProductsStore = create<State & Actions>((set) => ({
  products: INITIAL_STATE.products,
  isLoading: INITIAL_STATE.isLoading,
  error: INITIAL_STATE.error,
  fetchData: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch(
        "https://65bb677f52189914b5bc02b7.mockapi.io/products"
      );
      const data = await response.json();
      set({ products: data, isLoading: false });
      console.log(data);
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));
