import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NewFeed from "../pages/InApp/NewFeed/NewFeed";
import DetailPostScreen from "../pages/InApp/DetailPostScreen";

const Stack = createStackNavigator();

const NewFeedStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="posts" component={NewFeed} />
            <Stack.Screen
                name="detail-post"
                component={DetailPostScreen}
                options={({ route }) => ({
                    tabBarStyle: { display: "none" }, // Hide tab bar on this screen
                })}
            />
        </Stack.Navigator>
    );
};

export default NewFeedStack;
