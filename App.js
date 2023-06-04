const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import EditProfile from "./screens/EditProfile";
import Profile from "./screens/Profile";
import AboutCompetition from "./screens/AboutCompetition";
import AboutEvent from "./screens/AboutEvent";
import StoreDetail from "./screens/StoreDetail";
import EventDetail from "./screens/EventDetail";
import Sidebar from "./screens/Sidebar";
import AllEvents from "./screens/AllEvents";
import Home from "./screens/Home";
import Register from "./screens/Register";
import Login from "./screens/Login";
import GetStarted from "./screens/GetStarted";
import Splash from "./screens/Splash";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    Poppins_black: require("./assets/fonts/Poppins_black.ttf"),
    Playball_regular: require("./assets/fonts/Playball_regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboutCompetition"
              component={AboutCompetition}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboutEvent"
              component={AboutEvent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StoreDetail"
              component={StoreDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EventDetail"
              component={EventDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sidebar"
              component={Sidebar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AllEvents"
              component={AllEvents}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GetStarted"
              component={GetStarted}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
