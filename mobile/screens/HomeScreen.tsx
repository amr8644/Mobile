import { StyleSheet, ScrollView } from "react-native";
import * as React from "react";
import FirstCardRow from "../components/FirstCardRow";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import LatestMoviesRow from "../components/LatestMoviesRow";
import TopRatedRow from "../components/TopRatedRow";

const HomeScreen = ({ navigation }: any) => {
   const navi = useNavigation();

   React.useLayoutEffect(() => {
      navi.setOptions({
         headerShown: false,
      });
   });
   return (
      <ScrollView>
         <Header />
         <FirstCardRow navigation={navigation} />
         <LatestMoviesRow />
         <TopRatedRow />
      </ScrollView>
   );
};

export default HomeScreen;

const styles = StyleSheet.create({
   container: {},
});
