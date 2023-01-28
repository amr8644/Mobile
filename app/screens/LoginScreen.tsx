// @ts-nocheck
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Image, Input } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
const LoginScreen = () => {
   return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
         <Text>LoginScreen</Text>
         <View style={styles.inputContainer}>
            <Input
               placeholder="Email"
               //    secureTextEntry={true}
               autoFocus
               type="email"
            />
            <Input
               placeholder="Password"
               secureTextEntry={true}
               type="password"
            />
            <Button title="Login" />
         </View>
      </View>
   );
};

export default LoginScreen;

const styles = StyleSheet.create({
   inputContainer: {},
});
