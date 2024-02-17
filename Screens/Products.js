import React, { useEffect } from "react";
import { View } from "react-native";
import ProductStyles from "../Styles/ProductStyles";
import { stylesLoader } from "../Styles/LoaderStyle";
import { useFetch } from "../ServiceHook/useFetch";
// import SkeletonContent from 'react-native-skeleton-content';
import { GET_PRODUCTS } from "../Utils/constants";
import LoaderScreen from "../Components/LoaderScreen";
import ProductCard from "../Components/ProductCard";
const Products = () => {
  const {
    loading: productsLoading,
    data: productData,
    fetch: productFetch,
  } = useFetch();
  useEffect(() => {
    console.log("productsLoading", productData);
  }, [productsLoading]);
  useEffect(() => {
    productFetch(GET_PRODUCTS);
  }, []);

  return (
    <View style={ProductStyles.container}>
      {productsLoading ? (
        <LoaderScreen />
      ) : (
        <ProductCard productData={productData}></ProductCard>
      )}
    </View>
  );
};
export default Products;
