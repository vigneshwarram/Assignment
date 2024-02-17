import React from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import ProductStyles from "../Styles/ProductStyles";

const ProductCard = ({ productData, addCart }) => {
  const renderProduct = ({ item }) => {
    const offerPercentage =
      (item?.compare_at_price_min / 100) * item?.price_min;
    const correctOfferInString =
      Math.round(offerPercentage).toString() + "% OFF";
    return (
      <View style={ProductStyles.cardContainer}>
        <ImageBackground
          source={{
            uri: item?.images["1"],
          }}
          resizeMode="cover"
          style={ProductStyles.imageContainer}
        >
          <View style={ProductStyles.cardTextPosition}>
            <Text style={ProductStyles.cardTextStyle}>{item?.tags[0]}</Text>
          </View>
          <View style={ProductStyles.cardOfferInnerContainer}>
            <Text style={ProductStyles.cardOfferTextStyle}>
              {correctOfferInString}
            </Text>
          </View>
          <View style={ProductStyles.watchListIconStyle}>
            <Image
              style={ProductStyles.imageStyle}
              resizeMode="contain"
              source={require("../assets/heart.png")}
            ></Image>
          </View>
        </ImageBackground>
        <View style={ProductStyles.h100}>
          <View style={ProductStyles.h65}>
            <Text style={ProductStyles.titleTextStyle}>{item.title}</Text>
            <View style={ProductStyles.containerRow}>
              <Text style={ProductStyles.containerCurrencyText}>
                {item.currency + " " + item.price_min}{" "}
              </Text>
              <Text style={ProductStyles.currencyTextStyle}>
                {item.currency + " " + item.compare_at_price_min}
              </Text>
            </View>
          </View>
          <View style={ProductStyles.containerPosition}>
            <Image
              style={ProductStyles.priceTag}
              source={require("../assets/price-tag.png")}
            ></Image>
            <Text style={ProductStyles.offerText}>
              {item["offer-message"]}{" "}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => addCart(item)}>
          <View style={ProductStyles.addCartContainer}>
            <Text style={ProductStyles.addCartButtonname}>Add To Bag</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={ProductStyles.container}>
      <View style={ProductStyles.mT30}>
        <FlatList
          initialNumToRender={8}
          numColumns={2}
          data={productData?.data?.products}
          renderItem={renderProduct}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default ProductCard;
