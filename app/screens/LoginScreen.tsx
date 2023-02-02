// @ts-nocheck
import * as React from "react";
import {
   View,
   StyleSheet,
   KeyboardAvoidingView,
   Text,
   Dimensions,
} from "react-native";
import { Button, Image, Input } from "@rneui/themed";
import { API_URL } from "../api/url";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoginScreen = ({ navigation }: any) => {
   const [username, setUsername] = React.useState("");
   const [password, setPassword] = React.useState("");
   const [isError, setIsError] = React.useState("");

   const loginUser = async () => {
      const payload = {
         Username: { String: username, Valid: true },
         Password: { String: password, Valid: true },
      };
      try {
         const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "include",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
         });

         console.log(response.status);
         if (response.status === 401) {
            setIsError("Invalid Credentials");
         }

         return response;
      } catch (error) {
         console.log(error);
      }
   };
   React.useLayoutEffect(() => {
      navigation.setOptions({
         headerShown: false,
      });
   }, []);

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
            <Text
               style={{
                  fontSize: 30,
                  fontWeight: "600",
                  alignSelf: "start",
               }}
            >
               Login
            </Text>
            <Input
               placeholder="Username"
               autoFocus
               type="text"
               value={username}
               errorMessage={isError}
               onChangeText={(e: any) => setUsername(e)}
            />
            <Input
               placeholder="Password"
               secureTextEntry={true}
               type="password"
               value={password}
               errorMessage={isError}
               onChangeText={(e: any) => setPassword(e)}
            />
            <Button
               onPress={loginUser}
               title="Login"
               containerStyle={styles.buttonStyle}
               buttonStyle={{ backgroundColor: "#0084ff" }}
            />
            <Button
               onPress={() => navigation.navigate("Register")}
               title="Register"
               type="outline"
               containerStyle={styles.buttonStyle}
               titleStyle={{ color: "#0084ff" }}
            />
         </View>
      </KeyboardAvoidingView>
   );
};

export default LoginScreen;

const styles = StyleSheet.create({
   inputContainer: {
      width: windowWidth * 0.8,
      alignItems: "center",
      justifyContent: "center",
   },
   buttonStyle: {
      width: windowWidth * 0.7,
      marginVertical: 10,
      borderColor: "#0084ff",
      borderRadius: 10,
   },
});
