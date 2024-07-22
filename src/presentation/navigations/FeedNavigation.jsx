import {
    useFocusEffect,
    useNavigation,
    useRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DetailPostScreen from "../pages/InApp/DetailPostScreen";
import MapScreen from "../pages/InApp/NewFeed/MapScreen";
import NewFeed from "../pages/InApp/NewFeed/NewFeed";
import NotificationScreen from "../pages/InApp/NewFeed/NotificationScreen";
import SaveScreen from "../pages/InApp/NewFeed/SaveScreen";
import SearchDestinationScreen from "../pages/InApp/NewFeed/SearchDestinationScreen";
const Stack = createNativeStackNavigator();

const NewFeedStack = () => {
    const navigation = useNavigation();
    const route = useRoute();
    useFocusEffect(
        React.useCallback(() => {
            const hideTabBar = () =>
                navigation
                    .getParent()
                    .setOptions({ tabBarStyle: { display: "none" } });
            const showTabBar = () =>
                navigation
                    .getParent()
                    .setOptions({ tabBarStyle: { display: "flex" } });

            navigation.addListener("focus", hideTabBar);
            navigation.addListener("blur", showTabBar);

            return () => {
                navigation.removeListener("focus", hideTabBar);
                navigation.removeListener("blur", showTabBar);
            };
        }, [navigation])
    );
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="posts" component={NewFeed} />
            <Stack.Screen name="detail-post" component={DetailPostScreen} />
            <Stack.Screen name="map" component={MapScreen} />
            <Stack.Screen name="notification" component={NotificationScreen} />
            <Stack.Screen
                name="search-destination"
                component={SearchDestinationScreen}
            />

            <Stack.Screen
                screenOptions={{
                    fotterShown: false,
                }}
                name="save"
                component={SaveScreen}
                options={{
                    presentation: "formSheet",
                    sheetAllowedDetents: "large",
                    sheetCornerRadius: 30,
                    sheetGrabberVisible: true,
                }}
            />
        </Stack.Navigator>
    );
};

export default NewFeedStack;
