import React, { useState, useContext, useEffect } from "react";
import { View, Switch, Image, Text } from "react-native";
import il8n, { languageRestart } from "./../Utils/i18n";
import CartContext from "../Context/CartContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HeaderStyle } from "../Styles/HeaderStyle";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    withSequence
  } from 'react-native-reanimated';
  import {Screens} from '../Styles/themes'

const Header = ({ getProducts }) => {
    const rotation = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{ rotateZ: `${rotation.value}deg` }],
      };
    });
  const cartData = useContext(CartContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = async () => {
    setIsEnabled((previousState) => !previousState);
  };
 useEffect(()=>{
  rotation.value = withSequence(
    withTiming(-10, { duration: 50 }),
    withRepeat(withTiming(10, { duration: 100 }), 6, true),
    withTiming(0, { duration: 50 })
  );
 },[cartData])
  useEffect(() => {
    changeLanguage();
  }, [isEnabled]);

  useEffect(() => {
    persisteLanguageSelection();
  }, []);
  const persisteLanguageSelection = async () => {
    const lang = await AsyncStorage.getItem("setLanguage");
    if (lang === "en") {
      setIsEnabled(false);
    } else {
      setIsEnabled(true);
    }
  };

  const changeLanguage = async () => {
    const lang = await AsyncStorage.getItem("setLanguage");
    console.log("lang", lang);
    if (isEnabled) {
      await AsyncStorage.setItem("setLanguage", "ar");
      il8n.changeLanguage("ar");
    } else {
      await AsyncStorage.setItem("setLanguage", "en");
      il8n.changeLanguage(lang === "en");
    }
    languageRestart();
    getProducts();
  };

  return (
    <View style={HeaderStyle.container}>
      <View style={HeaderStyle.row}>
        <Text style={HeaderStyle.title}>{"R E D T A G"}</Text>
      </View>
      <View style={HeaderStyle.row}>
        <View style={HeaderStyle.studiosCenter}>
          <Text style={HeaderStyle.lanText}>{"ENG"}</Text>
          <Switch
            trackColor={{ false: Screens.lightGray, true: Screens.black }}
            thumbColor={isEnabled ?Screens.red :Screens.pureWhite}
            ios_backgroundColor={Screens.darkGrey}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={HeaderStyle.textContainer}>{"AR"}</Text>
        </View>

        <Animated.View  style={[HeaderStyle.bagImage,animatedStyle]}>
          <Image
            style={HeaderStyle.imageContainer}
            resizeMode="contain"
            source={require("../assets/bag.png")}
          ></Image>
          {cartData && cartData?.length >= 1 && (
            <View style={HeaderStyle.cardRounder}>
              <Text style={HeaderStyle.cardText}>
                {cartData?.length.toString()}
              </Text>
            </View>
          )}
        </Animated.View >
      </View>
    </View>
  );
};

export default Header;
