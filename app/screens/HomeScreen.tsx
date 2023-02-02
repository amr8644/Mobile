import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import React from "react";
import { Avatar } from "@rneui/themed";
import { API_URL } from "../api/url";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import CustomListItem from "../components/CustomListItem";

const HomeScreen = ({ navigation }: any) => {
   const logoutUser = async () => {
      try {
         const response = await fetch(`${API_URL}/logout`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
               "Content-Type": "application/json",
            },
         });
         console.log(response);

         navigation.replace("Login");

         return response;
      } catch (error) {
         console.log(error);
      }
   };

   React.useLayoutEffect(() => {
      navigation.setOptions({
         title: "iChat",
         headerStyle: { backgroundColor: "#fff" },
         headerTitleStyle: { color: "black" },
         headerTintColor: "black",
         headerLeft: () => (
            <View style={{ marginLeft: 20 }}>
               <TouchableOpacity onPress={logoutUser}>
                  <Avatar
                     rounded
                     source={{
                        uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
                     }}
                  />
               </TouchableOpacity>
            </View>
         ),
         headerRight: () => {
            <View
               style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: 80,
                  marginRight: 20,
               }}
            >
               <TouchableOpacity onPress={() => navigation.navigate("AddChat")}>
                  <AntDesign name="camerao" size={24} color="black" />
               </TouchableOpacity>
               <TouchableOpacity>
                  <SimpleLineIcons name="pencil" size={24} color="black" />
               </TouchableOpacity>
            </View>;
         },
      });
   }, []);

   return (
      <SafeAreaView>
         <ScrollView>
            <CustomListItem />
         </ScrollView>
      </SafeAreaView>
   );
};

export default HomeScreen;
