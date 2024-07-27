import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Profile from "../pages/InApp/Profile/Profile";
import CreateAds from "../pages/InApp/Profile/CreateAds";
import DetailPublicSuggestion from "../pages/InApp/Suggest/DetailPublicSuggestion";
import StripeScreen from "../pages/InApp/StripePayment/StripeScreen";

const Stack = createStackNavigator();

const ProfileNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="create-ads" component={CreateAds} />
            <Stack.Screen
                name="detail-collection"
                component={DetailPublicSuggestion}
            />
            <Stack.Screen name="stripe" component={StripeScreen} />
        </Stack.Navigator>
    );
};

export default ProfileNavigation;
