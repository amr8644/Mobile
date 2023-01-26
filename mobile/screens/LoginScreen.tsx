import * as React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { Button, Input } from "@rneui/base";

const LoginScreen = ({ navigation }: any) => {
   const [username, setUsername] = React.useState("");
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
               inputStyle={{ color: "#FAFAFA" }}
               secureTextEntry
               placeholder={"Password"}
            /> */}

            <Button
               title={"Login"}
               buttonStyle={{
                  backgroundColor: "#22C55E",
                  marginTop: 20,
                  width: 250,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
               }}
            />
            <Button
               onPress={() => navigation.navigate("Register")}
               type="outline"
               title={"Register"}
               titleStyle={{ color: "#FAFAFA" }}
               buttonStyle={{
                  borderColor: "#22C55E",
                  marginTop: 20,
                  width: 250,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
               }}
            />
            <Button
               onPress={() => navigation.replace("Home")}
               type="outline"
               title={"Regi"}
               titleStyle={{ color: "#FAFAFA" }}
            />
         </View>
      </KeyboardAvoidingView>
   );
};

export default LoginScreen;
