import { SafeAreaView, Text } from "react-native";
import * as React from "react";
import {
   CompositeNavigationProp,
   useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Button } from "@rneui/base";
// import { TextInput } from "react-native";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
   BottomTabNavigationProp<TabStackParamList, "Login">,
   NativeStackNavigationProp<RootStackParamList>
>;

const LoginScreen = () => {
   const navigation = useNavigation();
   React.useLayoutEffect(() => {
      navigation.setOptions({
         headerShown: false,
      });
   }, []);

   return (
      <SafeAreaView className=" bg-black flex-1 justify-center items-center">
         <Text className="text-white  text-4xl">Login</Text>
         <View className=" bg-black w-full justify-center items-center">
            <View className="bg-black w-11/12">
               <Text className="text-white text-lg">Username</Text>
               <TextInput
                  className="border border-gray-700 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  placeholder="Email"
               />
            </View>
            <TextInput
               placeholder="Username"
               className="border border-gray-700  rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-11/12"
            />
            <TextInput
               placeholder="Password"
               className="border border-gray-700  rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-11/12"
            />
            <TouchableOpacity className="w-11/12 inline-flex items-center justify-center px-4 py-2  bg-blue-700 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition">
               <Text className="text-white text-lg">Login</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   );
};

export default LoginScreen;
