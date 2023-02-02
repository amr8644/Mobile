// @ts-nocheck
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import React from "react";
import { Input, Button, Image } from "@rneui/themed";
import { API_URL } from "../api/url";

const RegisterScreen = () => {
   const [username, setUsername] = React.useState("");
   const [email, setEmail] = React.useState("");
   const [password, setPassword] = React.useState("");

   const registerUser = async () => {
      const payload = {
         Username: { String: username, Valid: true },
         Email: { String: email, Valid: true },
         Password: { String: password, Valid: true },
      };
      try {
         const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
         });

         navigation.replace("Home");
         
         return response;
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <KeyboardAvoidingView
         behavior="padding"
         style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
         }}
      >
         <View style={styles.inputContainer}>
            <Input
               placeholder="Username"
               type="text"
               value={username}
               onChangeText={(e: any) => setUsername(e)}
            />
            <Input
               placeholder="Email"
               type="email"
               value={email}
               onChangeText={(e: any) => setEmail(e)}
            />
            <Input
               placeholder="Password"
               secureTextEntry={true}
               type="password"
               value={password}
               onChangeText={(e: any) => setPassword(e)}
            />
            <Button
               onPress={registerUser}
               title="Register"
               containerStyle={styles.buttonStyle}
               buttonStyle={{ backgroundColor: "#0084ff" }}
            />
         </View>
      </KeyboardAvoidingView>
   );
};

export default RegisterScreen;

const styles = StyleSheet.create({
   inputContainer: {
      width: 300,
      alignItems: "center",
      justifyContent: "center",
   },
   buttonStyle: {
      width: 200,
      marginVertical: 10,
      borderColor: "#0084ff",
   },
});
