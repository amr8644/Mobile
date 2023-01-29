// @ts-nocheck
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import React from "react";
import { Input, Button, Image } from "@rneui/themed";
import { auth } from "../firebase";

const RegisterScreen = () => {
   const [fullname, setfullname] = React.useState("");
   const [username, setusername] = React.useState("");
   const [emailAddress, setEmailAddress] = React.useState("");
   const [password, setPassword] = React.useState("");

   const register = () => {
      auth
         .CreateUserWithEmailAndPassword(emailAddress, password)
         .then((authUser: any) => {
            authUser.user.update({
               display: fullname,
            });
         });
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
            {/* <Input placeholder="Full Name" autoFocus type="text" /> */}
            <Input placeholder="Username" type="text" />
            <Input placeholder="Email" type="email" />
            <Input
               placeholder="Password"
               secureTextEntry={true}
               type="password"
            />
            <Button
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
      width: 400,
      alignItems: "center",
      justifyContent: "center",
   },
   buttonStyle: {
      width: 200,
      marginVertical: 10,
      borderColor: "#0084ff",
   },
});
