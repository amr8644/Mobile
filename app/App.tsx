// @ts-nocheck
import * as React from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";

// SplashScreen.preventAutoHideAsync();

export type StackParamsList = {
   Login: undefined;
};

const Stack = createNativeStackNavigator<StackParamsList>();
const globalScreenOptions = {
   headerStyle: { backgroundColor: "#006AFF" },
   headerTitleStyle: { color: "white" },
   headerTintColor: "white",
};

export default function App() {
   const [fontsLoaded] = useFonts({
      "Open-Sans": require("./assets/Open_Sans/static/OpenSans/OpenSans-Regular.ttf"),
   });

   const onLayoutRootView = React.useCallback(async () => {
      if (fontsLoaded) {
         await SplashScreen.hideAsync();
      }
   }, [fontsLoaded]);

   if (!fontsLoaded) {
      return null;
   }
   return (
      <SafeAreaView>
         <NavigationContainer>
            <Stack.Navigator screenOptions={globalScreenOptions}>
               <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
         </NavigationContainer>
      </SafeAreaView>
   );
}
