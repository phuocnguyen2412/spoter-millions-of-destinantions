import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import Profile from "../pages/InApp/Profile/Profile";

import color from "../contants/color";
import CameraNavigation from "./CameraNavigation";
import FeedNavigation from "./FeedNavigation";

// Import SVG icons
import { View } from "react-native";
import { Camera } from "../../assets/img/Button";
import CameraIcon from "../../assets/img/Button/camera.svg";
import ChallengeIcon from "../../assets/img/Button/challenge.svg";
import SuggestIcon from "../../assets/img/Button/kinhlup.svg";
import NewFeedIcon from "../../assets/img/Button/new-feed.svg";
import ProfileIcon from "../../assets/img/Button/profile.svg";
import { UserContext } from "../../context/user";
import userService from "../../services/user.service";
import ChallengeNavigation from "./ChallengeNavigation";
import SuggestNavigation from "./SuggestNavigation";
import { useNavigation } from "@react-navigation/native";
import ProfileNavigation from './ProfileNavigation';

const Tab = createBottomTabNavigator();

const TabArr = [
    {
        route: "new-feed",
        label: "New Feed",
        icon: NewFeedIcon,
        component: FeedNavigation,

        badge: false,
    },
    {
        route: "suggest",
        label: "Suggest",
        icon: SuggestIcon,
        component: SuggestNavigation,

        badge: false,
    },
    {
        route: "camera",
        label: "Camera",
        icon: CameraIcon,
        component: CameraNavigation,

        badge: false,
    },
    {
        route: "challenge",
        label: "Challenge",
        icon: ChallengeIcon,
        component: ChallengeNavigation,

        badge: true,
    },
    {
        route: "my-profile",
        label: "Profile",
        icon: ProfileIcon,
        component: ProfileNavigation,
    },
];

const InAppNavigation = () => {
    const navigation = useNavigation();
    const { updateUser } = React.useContext(UserContext);
    React.useEffect(() => {
        (async () => {
            try {
                const data = await userService.getMyInfo();
                updateUser(data.data);
            } catch (error) {
                navigation.navigate("login");
            }
        })();
    }, []);
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
                    flexDirection: "row",
                    alignItems: "center",
                },
            })}
        >
            {TabArr.map((tab, index) => (
                <Tab.Screen
                    screenOptions={{
                        headerShown: false,
                    }}
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
