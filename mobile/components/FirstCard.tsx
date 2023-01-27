import {
   StyleSheet,
   Text,
   View,
   Image,
   TouchableOpacity,
   ScrollView,
} from "react-native";
import * as React from "react";
import instance from "../api/axios";
import requests from "../api/request";
import { BottomSheet, Button, Icon } from "@rneui/themed";

const FirstCard = ({ navigation }: any) => {
   const [isVisible, setIsVisible] = React.useState(false);
   const [db, setDB] = React.useState([]);

   React.useEffect(() => {
      const getMovies = async () => {
         const response = await instance.get(requests.fetchTrending);
         setDB(response.data.results);
         return response;
      };
      getMovies();
   });

   return (
      <>
         {db?.map((e: any) => {
            return (
               <View
                  key={e?.id}
                  className="mr-2 relative w-80  h-52 rounded-xl flex items-center justify-center flex-row mx-3"
               >
                  <Image
                     source={{
                        uri: `https://image.tmdb.org/t/p/original${e?.backdrop_path}`,
                     }}
                     className="w-80 h-52 rounded"
                  />

                  <Text className="absolute bottom-20 left-1 text-light font-bold text-lg">
                     {e?.name || e?.title || e?.original_title}
                  </Text>

                  <TouchableOpacity
                     onPress={() => {
                        navigation.navigate("Details");
                     }}
                     className="bg-brand rounded-2xl  w-20  h-8 flex items-center justify-center absolute bottom-10 left-1 text-light"
                  >
                     <Text className="text-light">Watch</Text>
                  </TouchableOpacity>
               </View>
            );
         })}
      </>
   );
};

export default FirstCard;

// const styles = StyleSheet.create({
//    line: {
//       width: 75,
//       height: 4,
//       backgroundColor: "grey",
//       alignSelf: "center",
//       marginVertical: 15,
//       borderRadius: 2,
//    },
// });
