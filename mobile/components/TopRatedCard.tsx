import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import instance from "../api/axios";
import truncateString from "../api/axios";
import requests from "../api/request";

const TopRatedCard = () => {
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
            <View className=" bg-dark relative mr-2 w-72 rounded-2xl flex items-center justify-center flex-col mx-1">
               <Image
                  source={{
                     uri: `https://image.tmdb.org/t/p/original${e?.backdrop_path}`,
                  }}
                  className="relative w-64 h-32  rounded-xl"
               />

               <Text className="text-brand absolute top-3 right-2 text-xs bg-brandLight rounded-full px-[6px] py-[1px]">
                  Series
               </Text>

               <View className="absolute bottom-1 left-2 ">
                  <Text className=" text-light font-bold text-lg">
                     {e?.name || e?.title || e?.original_title}
                  </Text>
                  <Text className="text-mid font-bold text-md">
                     On going - Fantasy
                  </Text>
               </View>
            </View>;
         })}
      </>
   );
};

export default TopRatedCard;

const styles = StyleSheet.create({});
