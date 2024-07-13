import React from "react";

import NewFeed from "../pages/InApp/NewFeed/NewFeed";
import DetailPostScreen from "../pages/InApp/DetailPostScreen";
import Camera from "../pages/InApp/Camera/Camera";
import CreatePostScreen from "../pages/InApp/Camera/CreatePostScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

const CameraNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="take-photo"
                component={Camera}
                options={{
                    presentation: "formSheet",
                    sheetAllowedDetents: 'all',
                    sheetCornerRadius: 30,
                    sheetGrabberVisible: true,
                    
                }}
            />
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
