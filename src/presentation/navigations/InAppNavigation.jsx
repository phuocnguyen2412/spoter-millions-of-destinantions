import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SvgIcon from "../components/SvgIcon";

import Suggest from "../pages/InApp/Suggest/Suggest";
import Profile from "../pages/InApp/Profile/Profile";

import Challenge from "../pages/InApp/Challenge/Challenge";
import FeedNavigation from "./FeedNavigation";
import CameraNavigation from "./CameraNavigation";
import color from "../contants/color";

// Import SVG icons
import NewFeedIcon from "../../assets/img/Button/new-feed.svg";
import SuggestIcon from "../../assets/img/Button/kinhlup.svg";
import CameraIcon from "../../assets/img/Button/camera.svg";
import ChallengeIcon from "../../assets/img/Button/challenge.svg";
import ProfileIcon from "../../assets/img/Button/profile.svg";
import { View } from "react-native";
import { Camera } from "../../assets/img/Button";

const Tab = createBottomTabNavigator();

const TabArr = [
    {
        route: "new-feed",
        label: "New Feed",
        icon: NewFeedIcon,
        component: FeedNavigation,
        tabBarColor: color.primary,
        badge: false,
    },
    {
        route: "suggest",
        label: "Suggest",
        icon: SuggestIcon,
        component: Suggest,
        tabBarColor: color.green,
        badge: false,
    },
    {
        route: "camera",
        label: "Camera",
        icon: CameraIcon,
        component: CameraNavigation,
        tabBarColor: color.red,
        badge: false,
    },
    {
        route: "challenge",
        label: "Challenge",
        icon: ChallengeIcon,
        component: Challenge,
        tabBarColor: color.yellow,
        badge: true,
    },
    {
        route: "my-profile",
        label: "Profile",
        icon: ProfileIcon,
        component: Profile,
        tabBarColor: color.purple,
        badge: true,
    },
];

const InAppNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => {
                    const { icon: Icon } = TabArr.find(
                        (tab) => tab.route === route.name
                    );
                    if (route.name === "camera")
                        return (
                            <View className="w-[52px] h-[47px] left-0 bg-sky-900 rounded-[22px] flex-row items-center justify-center ">
                                <Camera />
                            </View>
                        );
                    return <Icon />;
                },
                tabBarActiveTintColor: color.primary,
                tabBarInactiveTintColor: "white",
                tabBarStyle: {
                    paddingVertical: "10px",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderTopWidth: 0.5,
                    borderColor: color.gray,

                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                },
            })}
        >
            {TabArr.map((tab, index) => (
                <Tab.Screen
                    key={index}
                    name={tab.route}
                    component={tab.component}
                    options={{
                        tabBarLabel: tab.label,
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default InAppNavigation;
