import * as React from "react";
import { View, KeyboardAvoidingView, StyleSheet } from "react-native";
import { Button, Input } from "@rneui/base";

const RegisterScreen = () => {
   const [username, setUsername] = React.useState("");
   const [email, setEmail] = React.useState("");
   const [password, setPassword] = React.useState("");
   return (
      <KeyboardAvoidingView className=" bg-dark flex-1 justify-center items-center">
         <View className="w-full justify-center items-center flex-1 p-3">
            {/* <Input
               containerStyle={{ borderColor: "#22C55E" }}
               inputStyle={{ color: "#FAFAFA", borderColor: "#22C55E" }}
               placeholder={"Username"}
            />
            <Input
               containerStyle={{ borderColor: "#22C55E" }}
               inputStyle={{ color: "#FAFAFA", borderColor: "#22C55E" }}
               placeholder={"Email"}
            />
            <Input
               inputStyle={{ color: "#FAFAFA" }}
               secureTextEntry
               placeholder={"Password"}
            /> */}

            <Button
               title={"Sign Up"}
               buttonStyle={{
                  backgroundColor: "#22C55E",
                  marginTop: 20,
                  width: 250,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
               }}
            />
         </View>
      </KeyboardAvoidingView>
   );
};

export default RegisterScreen;
