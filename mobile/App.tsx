//@ts-nocheck
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

export type StackParamList = {
   Login: undefined;
   Register: undefined;
   Home: undefined;
   Details: undefined;
};

const globalScreenOptions = {
   headerStyle: { backgroundColor: "#0F172A" },
   headerTitleStyle: { color: "#FAFAFA" },
   headerTintColor: "white",
};

const Stack = createNativeStackNavigator<StackParamList>();
export default function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={globalScreenOptions}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
