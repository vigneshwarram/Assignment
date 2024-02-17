import React, { useState } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import ProductStyles from "../Styles/ProductStyles";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
} from "react-native-reanimated";
const ProductCard = ({ productData, addCart, addWishList }) => {
  const rotation = useSharedValue(0);
  const [selectedItem, setSelectedItem] = useState();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

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
          <TouchableOpacity onPress={() => addWishList(item)}>
            <View style={ProductStyles.watchListIconStyle}>
              <Image
                style={ProductStyles.imageStyle}
                resizeMode="contain"
                source={
                  item?.isWishList
                    ? require("../assets/heartred.png")
                    : require("../assets/heart.png")
                }
              ></Image>
            </View>
          </TouchableOpacity>
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
        <TouchableOpacity
          onPress={() => {
            rotation.value = withRepeat(withTiming(10), 6, true);
            setSelectedItem(item);
            addCart(item);
          }}
        >
          <Animated.View
            style={[
              ProductStyles.addCartContainer,
              selectedItem?.title === item?.title && animatedStyle,
              {
                backgroundColor:
                  selectedItem?.title === item?.title ? "#000" : "transparent",
              },
            ]}
          >
            <Text
              style={[
                ProductStyles.addCartButtonname,
                {
                  color: selectedItem?.title === item?.title ? "#fff" : "#000",
                },
              ]}
            >
              Add To Bag
            </Text>
          </Animated.View>
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
