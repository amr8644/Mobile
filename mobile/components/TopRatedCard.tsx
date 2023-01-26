import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const TopRatedCard = () => {
   return (
      <View className="relative mr-2 w-72 rounded-2xl flex items-center justify-center flex-col mx-1">
         <Image
            source={{
               uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5sLgseJtBTleFdTJdNZ0crrvmIYNbHleJUTLBC1KkRQ&s",
            }}
            className="relative w-64 h-32  rounded-xl"
         />

         <Text className="text-brand absolute top-3 right-2 text-xs bg-brandLight rounded-full px-[6px] py-[1px]">
            Series
         </Text>

         <View className="absolute bottom-1 left-2 ">
            <Text className=" text-light font-bold text-lg">
               Avatar: The Way of Water
            </Text>
            <Text className="text-mid font-bold text-md">
               On going - Fantasy
            </Text>
         </View>
      </View>
   );
};

export default TopRatedCard;

const styles = StyleSheet.create({});
