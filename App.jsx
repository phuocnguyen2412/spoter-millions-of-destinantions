import React, { useState } from "react";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppNavigation from "./src/presentation/navigations/AppNavigation";

import InAppNavigation from "./src/presentation/navigations/InAppNavigation";

import * as Font from "expo-font";

const fetchFonts = () => {
    return Font.loadAsync({
        Montserrat: require("./src/assets/fonts/Montserrat-Regular.ttf"),
    });
};
export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <InAppNavigation /> */}
            {/* <NavigationContainer>
                
                    
                </NavigationContainer> */}
            <AppNavigation />
        </SafeAreaView>
    );
}
