import React, { useState } from "react";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppNavigation from "./src/presentation/navigations/AppNavigation";

import InAppNavigation from "./src/presentation/navigations/InAppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
const fetchFonts = () => {
    return Font.loadAsync({
        Montserrat: require("./src/assets/fonts/Montserrat-Regular.ttf"),
    });
};
export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoaded(true)}
                onError={(err) => console.log(err)}
            />
        );
    }
    return (
        <NativeBaseProvider>
            <SafeAreaView style={{ flex: 1 }}>
                {/* <InAppNavigation /> */}
                {/* <NavigationContainer>
                
                    
                </NavigationContainer> */}
                <AppNavigation />
            </SafeAreaView>
        </NativeBaseProvider>
    );
}
