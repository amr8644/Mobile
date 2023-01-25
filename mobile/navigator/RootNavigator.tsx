import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";

export type RootStackParamList = {
   Main: undefined;
   Login: undefined;
   Signup: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
   return (
      <RootStack.Navigator>
         <RootStack.Group>
            <RootStack.Screen name="Main" component={TabNavigator} />
         </RootStack.Group>
      </RootStack.Navigator>
   );
};

export default RootNavigator;
