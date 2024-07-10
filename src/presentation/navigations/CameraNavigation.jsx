import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NewFeed from "../pages/InApp/NewFeed/NewFeed";
import DetailPostScreen from "../pages/InApp/DetailPostScreen";
import Camera from "../pages/InApp/Camera/Camera";
import CreatePostScreen from "../pages/InApp/Camera/CreatePostScreen";

const Stack = createStackNavigator();

const CameraNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="take-photo" component={Camera} />
            <Stack.Screen
                screenOptions={{
                    fotterShown: false,
                }}
                name="create-post"
                component={CreatePostScreen}
            />
        </Stack.Navigator>
    );
};

export default CameraNavigation;
