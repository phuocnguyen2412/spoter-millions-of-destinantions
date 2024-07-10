import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const MapScreen = () => {
    const isFocused = useIsFocused();
    const navigation = useNavigation();
    useEffect(() => {
        if (isFocused) {
            navigation.getParent().setOptions({
                tabBarStyle: { display: "none" },
            });
        } else {
            navigation.getParent().setOptions({
                tabBarStyle: { display: "flex" },
            });
        }
    }, [isFocused]);
    return (
        <View>
            <Text>Map</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default MapScreen;
