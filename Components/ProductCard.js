import React from "react";
import { View, FlatList, Image, Text, ImageBackground } from "react-native";
import ProductStyles from "../Styles/ProductStyles";

const ProductCard = ({ productData }) => {
  const renderProduct = ({ item }) => {
    const offerPercentage =
      (item?.compare_at_price_min / 100) * item?.price_min;
    const correctOfferInString =
      Math.round(offerPercentage).toString() + "% OFF";
    return (
      <View
        style={{
          flex: 1,
          marginHorizontal: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageBackground
          source={{
            uri: item?.images["1"],
          }}
          resizeMode="cover"
          style={{ width: "95%", aspectRatio: 0.7, height: 300 }}
        >
          <View
            style={{
              position: "absolute",
              bottom: 10,
              right: 10,
              width: 50,
              height: 20,
              backgroundColor: "#fde8e8",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 9, color: "#000", fontWeight: "bold" }}>
              {item?.tags[0]}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 10,
              left: 10,
              width: 50,
              height: 20,
              backgroundColor: "#fde8e8",
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 0.5,
              borderColor: "#e93347",
              borderRadius: 5,
            }}
          >
            <Text
              style={{ fontSize: 12, color: "#e93347", fontWeight: "bold" }}
            >
              {correctOfferInString}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              width: 50,
              height: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
              source={require("../assets/heart.png")}
            ></Image>
          </View>
        </ImageBackground>
        <View style={{ height: 100 }}>
          <View style={{ height: 65 }}>
            <Text style={{ color: "#000", fontWeight: "bold" }}>
              {item.title}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 14, color: "#e93347" }}>
                {item.currency + " " + item.price_min}{" "}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  textDecorationLine: "line-through",
                  color: "#000",
                  marginLeft: 10,
                }}
              >
                {item.currency + " " + item.compare_at_price_min}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 150,
              height: 25,
              backgroundColor: "#000",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              flexDirection: "row",
            }}
          >
            <Image
              style={{ width: 10, height: 10, tintColor: "#ffd331" }}
              source={require("../assets/price-tag.png")}
            ></Image>
            <Text
              style={{
                fontSize: 9,
                color: "#ffd331",
                fontWeight: "bold",
                marginLeft: 3,
              }}
            >
              {item["offer-message"]}{" "}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 150,
            height: 30,
            borderWidth: 1,
            borderColor: "gray",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "#000",
              fontWeight: "bold",
              marginLeft: 3,
            }}
          >
            Add To Bag
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={ProductStyles.container}>
      <View style={{ marginTop: 30 }}>
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
