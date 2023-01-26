import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

const Header = () => {
   return (
      <View className="bg-dark pt-10 pb-5 px-5">
         <View className="flex flex-row items-center justify-between py-2">
            <Text className="text-mid text-xs">Welcome back,</Text>
            <View className="flex flex-row">
               <Icon name={"bell"} type={"entypo"} color={"#FAFAFA"} />
               <Icon
                  name={"magnifying-glass"}
                  type={"entypo"}
                  style={{ marginLeft: 16 }}
                  color={"#FAFAFA"}
               />
            </View>
         </View>
         <Text className="text-light text-2xl font-bold">Amr Ashebo</Text>
      </View>
   );
};

export default Header;
