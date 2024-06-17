import React from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContent = React.createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_product };

  return (
    <ShopContextProvider value={contextValue}>
      {props.children}
    </ShopContextProvider>
  );
};

export default ShopContextProvider;
