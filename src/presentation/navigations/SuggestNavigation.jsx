import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DetailPostScreen from "../pages/InApp/DetailPostScreen";
import Suggest from "../pages/InApp/Suggest/Suggest";

const Stack = createStackNavigator();

const SuggestNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="suggests" component={Suggest} />
            <Stack.Screen name="detail-suggest" component={DetailPostScreen} />
        </Stack.Navigator>
    );
};

export default SuggestNavigation;
