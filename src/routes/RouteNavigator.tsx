import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export const navigationContainerRef = React.createRef();
const RouteNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteNavigator;
