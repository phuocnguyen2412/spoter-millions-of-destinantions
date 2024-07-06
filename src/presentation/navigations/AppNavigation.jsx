import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";

import AuthNavgation from "./AuthNavigation";
import InAppNavigation from "./InAppNavigation";
import { SafeAreaFrameContext } from "react-native-safe-area-context";
import { useSafeArea } from "native-base";

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="auth" component={AuthNavgation} />
                <Stack.Screen name="in-app" component={InAppNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});

export default AppNavigation;
