import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import instance from "../api/axios";
import requests from "../api/request";

const TopRatedCard = () => {
   const [db, setDB] = React.useState([]);

   React.useEffect(() => {
      const getMovies = async () => {
         const response = await instance.get(requests.fetchTopRated);
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
                  className=" relative mr-2 w-72 rounded-2xl flex items-center justify-center flex-col mx-1"
               >
                  <Image
                     source={{
                        uri: `https://image.tmdb.org/t/p/original${e?.backdrop_path}`,
                     }}
                     className="w-72 h-32  rounded-xl"
                  />

                  <View className="absolute bottom-1 left-2">
                     <Text className=" text-light font-bold text-lg">
                        {e?.name || e?.title || e?.original_title}
                     </Text>
                     <Text className="text-mid font-bold text-md">
                        On going - Fantasy
                     </Text>
                  </View>
               </View>
            );
         })}
      </>
   );
};

export default TopRatedCard;
