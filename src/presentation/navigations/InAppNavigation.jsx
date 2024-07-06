import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewFeed from "../pages/InApp/NewFeed/NewFeed";
import Map from "../pages/InApp/Map/Map";
import Suggest from "../pages/InApp/Suggest/Suggest";
import Profile from "../pages/InApp/Profile/Profile";
import Camera from "../pages/InApp/Camera/Camera";
import Challenge from "../pages/InApp/Challenge/Challenge";

const Tab = createBottomTabNavigator();
const InAppNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="new-feed" component={NewFeed} />
            <Tab.Screen name="suggest" component={Suggest} />
            <Tab.Screen name="camera" component={Camera} />
            <Tab.Screen name="map" component={Challenge} />
            <Tab.Screen name="my-profile" component={Profile} />
        </Tab.Navigator>
    );
};
export default InAppNavigation;
