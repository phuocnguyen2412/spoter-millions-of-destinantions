import React, { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import AppNavigation from "./src/presentation/navigations/AppNavigation";

import * as Font from "expo-font";
SplashScreen.preventAutoHideAsync();
export default function App() {
    const [loaded, error] = Font.useFonts({
        "Montserrat-Black": require("./src/assets/fonts/Montserrat-Black.ttf"),
        "Montserrat-BlackItalic": require("./src/assets/fonts/Montserrat-BlackItalic.ttf"),
        "Montserrat-Bold": require("./src/assets/fonts/Montserrat-Bold.ttf"),
        "Montserrat-BoldItalic": require("./src/assets/fonts/Montserrat-BoldItalic.ttf"),
        "Montserrat-ExtraBold": require("./src/assets/fonts/Montserrat-ExtraBold.ttf"),
        "Montserrat-ExtraBoldItalic": require("./src/assets/fonts/Montserrat-ExtraBoldItalic.ttf"),
        "Montserrat-ExtraLight": require("./src/assets/fonts/Montserrat-ExtraLight.ttf"),
        "Montserrat-ExtraLightItalic": require("./src/assets/fonts/Montserrat-ExtraLightItalic.ttf"),
        "Montserrat-Italic": require("./src/assets/fonts/Montserrat-Italic.ttf"),
        "Montserrat-Light": require("./src/assets/fonts/Montserrat-Light.ttf"),
        "Montserrat-LightItalic": require("./src/assets/fonts/Montserrat-LightItalic.ttf"),
        "Montserrat-Medium": require("./src/assets/fonts/Montserrat-Medium.ttf"),
        "Montserrat-MediumItalic": require("./src/assets/fonts/Montserrat-MediumItalic.ttf"),
        "Montserrat-Regular": require("./src/assets/fonts/Montserrat-Regular.ttf"),
        "Montserrat-SemiBold": require("./src/assets/fonts/Montserrat-SemiBold.ttf"),
        "Montserrat-SemiBoldItalic": require("./src/assets/fonts/Montserrat-SemiBoldItalic.ttf"),
        "Montserrat-Thin": require("./src/assets/fonts/Montserrat-Thin.ttf"),
        "Montserrat-ThinItalic": require("./src/assets/fonts/Montserrat-ThinItalic.ttf"),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <InAppNavigation /> */}
            {/* <NavigationContainer>
                
                    
                </NavigationContainer> */}
            <AppNavigation />
        </SafeAreaView>
    );
}
