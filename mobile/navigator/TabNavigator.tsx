import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/LoginScreen";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";

export type TabStackParamList = {
   Login: undefined;
   Signup: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
   const navigation = useNavigation();
   React.useLayoutEffect(() => {
      navigation.setOptions({
         headerShown: false,
      });
   }, []);

   return (
      <Tab.Navigator
         screenOptions={({ route }) => ({
            tabBarActiveBackgroundColor: "black",
            tabBarActiveTintColor: "#006AFF",
            tabBarInactiveTintColor: "gray",
            tabBarIcon: ({ focused }) => {
               if (route.name == "Login") {
                  return (
                     <Icon
                        name="login"
                        type="entypo"
                        color={focused ? "#006AFF" : "gray"}
                     />
                  );
               }
            },
         })}
      >
         <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
   );
};

export default TabNavigator;
