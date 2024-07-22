import { MAPBOX_API_PUBLIC_KEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import Mapbox, {
    Images,
    LocationPuck,
    ShapeSource,
    SymbolLayer,
    Image as ImageMB,
    UserTrackingMode,
    PointAnnotation,
    Annotation,
} from "@rnmapbox/maps";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import userService from "../../../../services/user.service";

import {
    BackRightToLeft,
    Microphone,
    PinChallenge,
    PinMap,
} from "../../../../assets/img/Button";
import BottomSheetMap from "../../../components/BottomSheetMap";

import { Image, ImageBackground } from "react-native";
import feedService from "../../../../services/feed.service";
import FloatingButtonComponent from "../../../components/FloatingButtonComponent";
import SelectMapModal from "../../../components/SelectMapModal";
import { UserContext } from "../../../../context/user";
import { featureCollection, point } from "@turf/helpers";
import _posts from "../../../../data/posts";
import PinImage from "../../../../assets/img/token.jpg";
Mapbox.setAccessToken(MAPBOX_API_PUBLIC_KEY || "");

const MapScreen = () => {
    const navigation = useNavigation();
    const [userLocation, setUserLocation] = useState(null);
    const { user } = React.useContext(UserContext);
    const [selectedLoaction, setSelectedLoaction] = useState(null);
    const [urlMap, setUrlMap] = useState(
        "mapbox://styles/phuocnguyen12/clxr16qkj00no01r2dkj0127g"
    );
    const [posts, setPost] = useState(null);
    const fecthData = async () => {
        try {
            const data = await feedService.getAllFeed(10, 0);

            setPost(data.data);
        } catch (error) {
            console.log(error);
        }
    };
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
    useEffect(() => {
        fecthData();
    }, []);

    const points = posts
        ? posts.map((post) =>
              point([+post.longitude, +post.latitude], { post: post })
          )
        : _posts;
    const featureCollectionData = featureCollection(points);
    console.log(featureCollectionData);
    return (
        <View className="flex-1">
            <Mapbox.MapView
                className="flex-1"
                zoomEnabled={true}
                rotateEnabled={true}
                styleURL={urlMap}
            >
                <SafeAreaView>
                    <View className="px-6">
                        <View className="flex-row px-[20px] py-2 bg-neutral-50 rounded-[35px] shadow items-center w-full justify-between mb-[15]">
                            <View className="flex-row justify-center items-center">
                                <PinMap className="mr-5" />
                                <TouchableOpacity
                                    className=""
                                    onPress={() =>
                                        navigation.navigate(
                                            "search-destination"
                                        )
                                    }
                                >
                                    <Text className="text-neutral-500 text-sm font-normal font-['Montserrat']">
                                        Search here...
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View className="flex-row justify-center items-center">
                                <Microphone className="mr-5" />
                                <Image
                                    source={user.avatar}
                                    className="w-[40] h-[40] rounded-full"
                                />
                            </View>
                        </View>
                        <View className="flex-row justify-between">
                            <FloatingButtonComponent
                                icon={<BackRightToLeft />}
                                onPress={() => navigation.navigate("posts")}
                            />
                            {selectedLoaction && (
                                <View className="w-[181px] h-[54px] px-5 py-[11px] bg-neutral-50 rounded-[15px] shadow justify-between items-center inline-flex"></View>
                            )}
                            <SelectMapModal
                                urlMap={urlMap}
                                setUrlMap={setUrlMap}
                            />
                        </View>
                    </View>
                </SafeAreaView>

                <ShapeSource id="pin" shape={featureCollectionData}>
                    <SymbolLayer
                        id="pin-icon"
                        style={{
                            iconImage: "PinImage",
                            iconSize: 1,
                        }}
                    />
                </ShapeSource>
                <Images
                    images={{
                        PinImage: PinImage,
                    }}
                >
                    <ImageMB name="user-pin">
                        <Image
                            source={{ uri: user.avatar }}
                            className="w-[55px] h-14 rounded-full"
                        />
                    </ImageMB>
                </Images>
                {userLocation && (
                    <>
                        <Mapbox.Camera
                            zoomLevel={15}
                            centerCoordinate={[108.2234, 16.0605]}
                            animationMode="flyTo"
                            animationDuration={6000}
                            pitch={60}
                        />
                        {/* <LocationPuck
                            puckBearingEnabled={true}
                            puckBrearing="heading"
                            visible={true}
                            pulsing={{
                                isEnabled: true,
                                color: "teal",
                                radius: 50.0,
                            }}
                        /> */}
                    </>
                )}
            </Mapbox.MapView>
            {selectedLoaction && <BottomSheetMap info={selectedLoaction} />}
        </View>
    );
};

export default MapScreen;
