import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, Avatar } from "@rneui/themed";
import { API_URL } from "../api/url";
import { Button } from "@rneui/base";

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
   return (
      <View>
         <Card containerStyle={{ width: "100%", height: 100 }}>
            <View style={styles.profileContainer}>
               <Avatar
                  size={48}
                  rounded
                  source={{
                     uri: "https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg",
                  }}
               />
               <Text>Amr Ashebo</Text>
               <Button title={"Logout"} onPress={logoutUser} />
            </View>
         </Card>
      </View>
   );
};

export default HomeScreen;

const styles = StyleSheet.create({
   profileContainer: {
      // flex: 1,
      width: 100,
      flexDirection: "row",
      //   height: "100%",
   },
});
