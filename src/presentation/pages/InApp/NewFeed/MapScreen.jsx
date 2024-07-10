import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Mapbox from "@rnmapbox/maps";

Mapbox.setAccessToken(
    "pk.eyJ1IjoicGh1b2NuZ3V5ZW4xMiIsImEiOiJjbHhxeXB1a2MwZng1MnJvb20xbHlnYXpuIn0.MRn9U9_PZ8g2Yhk9nqy5fg"
);
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
        <View style={styles.page}>
            <View style={styles.container}>
                <Mapbox.MapView style={styles.map} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        height: 300,
        width: 300,
    },
    map: {
        flex: 1,
    },
});
export default MapScreen;
