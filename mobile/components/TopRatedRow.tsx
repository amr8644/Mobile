import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
} from "react-native";
import React from "react";
import TopRatedCard from "./TopRatedCard";

const TopRatedRow = () => {
   return (
      <SafeAreaView className="bg-dark py-3">
         <View className="flex flex-row items-center justify-between">
            <Text className="text-light font-bold text-2xl mx-4">
               Top Rated
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
            <TopRatedCard />
            <TopRatedCard />
            <TopRatedCard />
            <TopRatedCard />
         </ScrollView>
      </SafeAreaView>
   );
};

export default TopRatedRow;

const styles = StyleSheet.create({});
