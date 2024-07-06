import React from "react";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppNavigation from "./src/presentation/navigations/AppNavigation";

export default function App() {
    return (
        <NativeBaseProvider>
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1 }}>
                    <AppNavigation />
                </SafeAreaView>
            </SafeAreaProvider>
        </NativeBaseProvider>
    );
}
