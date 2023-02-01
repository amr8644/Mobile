// @ts-nocheck
import * as React from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button, Image, Input } from "@rneui/themed";

const LoginScreen = ({ navigation }: any) => {
   const [username, setUsername] = React.useState("");
   const [password, setPassword] = React.useState("");

   return (
      <KeyboardAvoidingView
         behavior="padding"
         style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
         }}
      >
         {/* <Image
            source={{
               uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fmessenger-logo&psig=AOvVaw2HCUap5wNhSCxwR5aKO2th&ust=1675090727555000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNjGqbCF7fwCFQAAAAAdAAAAABAE",
            }}
            style={{ width: 200, height: 200 }}
         /> */}
         <View style={styles.inputContainer}>
            <Input
               placeholder="Username"
               autoFocus
               type="text"
               value={username}
               onChangeText={(e: any) => setUsername(e)}
            />
            <Input
               placeholder="Password"
               secureTextEntry={true}
               type="password"
               value={password}
               onChangeText={(e: any) => setPassword(e)}
            />
            <Button
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
