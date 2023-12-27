import { create } from "zustand";

interface IStockStore {
  stockState: number;
  setStockStae: () => void;
  handleAdd: () => void;
  handleRemove: () => void;
}
const useStockStore = create<IStockStore>((set) => ({
  stockState: 0,
  setStockStae: () => set((state) => ({ stockState: state.stockState })),
  handleAdd: () => set((state) => ({ stockState: state.stockState - 1 })),
  handleRemove: () => set((state) => ({ stockState: state.stockState + 1 })),
}));

export default useStockStore;
