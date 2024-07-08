import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewFeed from "../pages/InApp/NewFeed/NewFeed";

import Suggest from "../pages/InApp/Suggest/Suggest";
import Profile from "../pages/InApp/Profile/Profile";
import Camera from "../pages/InApp/Camera/Camera";
import Challenge from "../pages/InApp/Challenge/Challenge";
import DetailPostScreen from "../pages/InApp/DetailPostScreen";
import { createStackNavigator } from "@react-navigation/stack";
import FeedNavigation from "./FeedNavigation";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const InAppNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="new-feed" component={FeedNavigation} />
            <Tab.Screen name="suggest" component={Suggest} />
            <Tab.Screen name="camera" component={Camera} />
            <Tab.Screen name="challenge" component={Challenge} />
            <Tab.Screen name="my-profile" component={Profile} />
        </Tab.Navigator>
    );
};
export default InAppNavigation;
