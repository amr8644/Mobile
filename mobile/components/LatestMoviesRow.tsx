import {
   ScrollView,
   Text,
   View,
   SafeAreaView,
   TouchableOpacity,
} from "react-native";
import React from "react";
import LatestMoviesCard from "./LatestMoviesCard";

const LatestMoviesRow = () => {
   return (
      <SafeAreaView className="bg-dark py-10">
         <View className="flex flex-row items-center justify-between">
            <Text className="text-light font-bold text-2xl mx-4">
               Latest Shows
            </Text>
            <TouchableOpacity className="text-brand font-bold text-md mx-4">
               <Text className="text-brand font-bold text-md">See all</Text>
            </TouchableOpacity>
         </View>
         <ScrollView
            contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
            horizontal
            showsHorizontalScrollIndicator={false}
         >
            <LatestMoviesCard />
         </ScrollView>
      </SafeAreaView>
   );
};

export default LatestMoviesRow;
