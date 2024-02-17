import React, { useEffect, createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";
import ProductStyles from "../Styles/ProductStyles";
import { useFetch } from "../ServiceHook/useFetch";
import { GET_PRODUCTS_EN, GET_PRODUCTS_AR } from "../Utils/constants";
import LoaderScreen from "../Components/LoaderScreen";
import ProductCard from "../Components/ProductCard";
import Header from "../Components/Header";
import CartConext from "../Context/CartContext";
const Products = () => {
  const {
    loading: productsLoading,
    data: productData,
    fetch: productFetch,
  } = useFetch();
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addCart = (productItem) => {
    const tempProductArray = [...selectedProducts];
    tempProductArray.push(productItem);
    setSelectedProducts(tempProductArray);
  };
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const language = await AsyncStorage.getItem("setLanguage");
    console.log("language", language);
    if (language === "ar") {
      productFetch(GET_PRODUCTS_AR);
    } else {
      productFetch(GET_PRODUCTS_EN);
    }
  };

  return (
    <CartConext.Provider value={selectedProducts}>
      <View style={ProductStyles.container}>
        <Header getProducts={getProducts} />
        {productsLoading ? (
          <LoaderScreen />
        ) : (
          <ProductCard
            addCart={addCart}
            productData={productData}
          ></ProductCard>
        )}
      </View>
    </CartConext.Provider>
  );
};
export default Products;
