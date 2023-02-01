import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, Avatar } from "@rneui/themed";

const HomeScreen = () => {
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
