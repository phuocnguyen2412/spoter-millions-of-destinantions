import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NewFeed from "../pages/InApp/NewFeed/NewFeed";
import DetailPostScreen from "../pages/InApp/DetailPostScreen";
import MapScreen from "../pages/InApp/NewFeed/MapScreen";
import NotificationScreen from "../pages/InApp/NewFeed/NotificationScreen";

const Stack = createStackNavigator();

const NewFeedStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="posts" component={NewFeed} />
            <Stack.Screen
                name="detail-post"
                component={DetailPostScreen}
                options={({ route }) => ({
                    // Hide tab bar on this screen
                })}
            />
            {/* <Stack.Screen
                name="map"
                component={MapScreen}
                screenOptions={{
                    fotterShown: false,
                }}
            /> */}
            <Stack.Screen
                name="notification"
                component={NotificationScreen}
                options={({ route }) => ({
                    // Hide tab bar on this screen
                })}
            />
        </Stack.Navigator>
    );
};

export default NewFeedStack;
