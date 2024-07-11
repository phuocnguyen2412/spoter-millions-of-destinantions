import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Mapbox, { LocationPuck } from "@rnmapbox/maps";
import * as Location from "expo-location";
import Pin from "../../../components/Pin";
import userService from "../../../../services/user.service";
import { MAPBOX_API_PUBLIC_KEY } from "@env";
Mapbox.setAccessToken(MAPBOX_API_PUBLIC_KEY || "");
Mapbox.setConnected;
Mapbox.setTelemetryEnabled(false);

const MapScreen = () => {
    const isFocused = useIsFocused();
    const navigation = useNavigation();
    const [userLocation, setUserLocation] = useState(null);
    const [user, setUser] = useState({});
    useEffect(() => {
        const getUserData = async () => {
            try {
                const data = await userService.getMyInfo();

                setUser(data.data);
            } catch (error) {
                console.log(error);
            }
        };
        getUserData();
    }, []);

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

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission to access location was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});

            setUserLocation([
                location.coords.longitude,
                location.coords.latitude,
            ]);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Mapbox.MapView
                style={styles.map}
                zoomEnabled={true}
                rotateEnabled={true}
                styleURL="mapbox://styles/phuocnguyen12/clxr16qkj00no01r2dkj0127g"
            >
                {userLocation && (
                    <>
                        <Mapbox.Camera
                            zoomLevel={15}
                            centerCoordinate={userLocation}
                            animationMode="flyTo"
                            animationDuration={6000}
                            pitch={60}
                            followUserLocation
                        />
                        {/* <Mapbox.PointAnnotation
                            id="marker"
                            coordinate={userLocation}
                        >
                            <Pin source={user.avatar} />
                        </Mapbox.PointAnnotation> */}
                        <LocationPuck
                            puckBearing="heading"
                            puckBearingEnabled
                            bearingImage={user.avatar}
                        />
                    </>
                )}
            </Mapbox.MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    map: {
        flex: 1,
    },
});

export default MapScreen;
