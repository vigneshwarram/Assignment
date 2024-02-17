import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import {Apptheme} from '../Assignment/Styles/themes'
import { SlidAnimation } from "./Animations/SlideAnimations";
import { enableScreens } from "react-native-screens";
import Products from './Screens/Products';



export default function App() {
  enableScreens();
  const Stack = createNativeStackNavigator();
  const PRODUCTSCREEN = {
    Products: Products,
  }
  function ProductStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {Object.entries({
          ...PRODUCTSCREEN,
        }).map(([name, component]) => (
          <Stack.Screen
            key={name}
            options={{
              ...SlidAnimation,
            }}
            name={name}
            component={component}
          />
        ))}
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer theme={Apptheme}>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          options={{
            ...SlidAnimation
          }}
          name={"ProductStack"}
          component={ProductStack}
        />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
