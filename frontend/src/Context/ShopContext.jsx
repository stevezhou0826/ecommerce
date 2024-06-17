import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContent = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_product };

  return (
    <ShopContent.Provider value={contextValue}>
      {props.children}
    </ShopContent.Provider>
  );
};

export default ShopContextProvider;
