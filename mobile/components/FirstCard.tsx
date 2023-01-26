import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as React from "react";

const FirstCard = () => {
   return (
      <View className="mr-2 relative w-80 h-44 rounded-xl flex items-center justify-center flex-row mx-1">
         <Image
            source={{
               uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5sLgseJtBTleFdTJdNZ0crrvmIYNbHleJUTLBC1KkRQ&s",
            }}
            className="w-80 h-44 rounded"
         />

         <Text className="absolute bottom-20 left-1 text-light font-bold text-lg">
            HEllo world
         </Text>

         <TouchableOpacity className="bg-brand rounded-2xl  w-20  h-8 flex items-center justify-center absolute bottom-10 left-1 text-light">
            <Text className="text-light">Watch</Text>
         </TouchableOpacity>
      </View>
   );
};

export default FirstCard;

const styles = StyleSheet.create({});
