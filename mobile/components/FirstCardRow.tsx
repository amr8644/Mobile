import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FirstCard from "./FirstCard";

const FirstCardRow = () => {
   return (
      <ScrollView
         contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
         className="bg-dark w-full h-full "
         horizontal
         showsHorizontalScrollIndicator={true}
      >
         <FirstCard />
         <FirstCard />
         <FirstCard />
      </ScrollView>
   );
};

export default FirstCardRow;

const styles = StyleSheet.create({});
