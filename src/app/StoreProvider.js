"use client";
import store from "@/lib/store";
import { Provider } from "react-redux";

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;

/**
 *  1. Crate a Store Provider component
 *  3. set Provider pass props store
 */
