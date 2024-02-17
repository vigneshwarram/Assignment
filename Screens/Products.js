import React, { useEffect, useState } from "react";
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
    setData
  } = useFetch();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const addCart = (productItem) => {
    const tempProductArray = [...selectedProducts];
    tempProductArray.push(productItem);
    setSelectedProducts(tempProductArray);
  };

  const addWishList =(item)=>{
    const tempItem = { ...productData };
    let temProducts = [...productData?.data?.products];
    
    temProducts = temProducts.map((productItem) => {
      //all the data api ID IS SAME SO I HAVE COMPARED WITH TITLE
      if (item.title === productItem.title) {
        return { ...productItem, isWishList: !productItem?.isWishList };
      }
      return productItem;
    });
    
    const subItem = { ...tempItem.data };
    subItem.products = temProducts;
    tempItem.data = subItem;
    setData(tempItem);

  }


  useEffect(() => {
    getProducts();
  }, []); // Dependency array includes language

  const getProducts = async () => {
    const storedLanguage = await AsyncStorage.getItem('setLanguage');
    if (storedLanguage === 'ar') {
     
      productFetch(GET_PRODUCTS_AR);
    } else {
      productFetch(GET_PRODUCTS_EN);
    }
  };

  return (
    <CartConext.Provider value={selectedProducts}>
      <View style={ProductStyles.container}>
        <Header  getProducts={getProducts} />
        {productsLoading ? (
          <LoaderScreen />
        ) : (
          <ProductCard
            addWishList={addWishList}
            addCart={addCart}
            productData={productData}
          ></ProductCard>
        )}
      </View>
    </CartConext.Provider>
  );
};

export default Products;
