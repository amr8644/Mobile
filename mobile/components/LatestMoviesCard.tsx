import { Text, View, Image } from "react-native";
import React from "react";
import instance from "../api/axios";
import requests from "../api/request";

const LatestMoviesCard = () => {
   const [db, setDB] = React.useState([]);

   React.useEffect(() => {
      const getMovies = async () => {
         const response = await instance.get(requests.fetchActionMovies);
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
                  className="mr-2 w-44 h-68  rounded-2xl flex items-center justify-center flex-col mx-1"
               >
                  <Image
                     source={{
                        uri: `https://image.tmdb.org/t/p/original/${e?.poster_path}`,
                     }}
                     style={{ width: 176, height: 224 }}
                     className="max-h-56  rounded-xl"
                  />

                  {/* <Text className="text-brand absolute top-10 right-2 text-xs bg-brandLight rounded-full px-[6px] py-[1px]">
                     {"Movie"}
                  </Text> */}

                  <View className="flex self-start">
                     <Text className="text-light font-bold text-lg">
                        {e?.name || e?.title || e?.original_title}
                     </Text>
                     <Text className="text-mid font-bold text-md">3h 12m</Text>
                  </View>
               </View>
            );
         })}
      </>
   );
};

export default LatestMoviesCard;
