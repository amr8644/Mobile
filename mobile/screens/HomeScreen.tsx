import { StyleSheet, SafeAreaView } from "react-native";
import * as React from "react";
import FirstCardRow from "../components/FirstCardRow";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
   const navi = useNavigation();

   React.useLayoutEffect(() => {
      navi.setOptions({
         headerShown: false,
      });
   });
   return (
      <SafeAreaView>
         <Header />
         <FirstCardRow />
      </SafeAreaView>
   );
};

export default HomeScreen;

const styles = StyleSheet.create({
   container: {},
});
