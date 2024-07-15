import {
    useIsFocused,
    useNavigation,
    useRoute,
} from "@react-navigation/native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Image } from "expo-image";
import React, { useEffect, useRef, useState } from "react";
import { Button, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import {
    Delete,
    Flash,
    RotateCamera,
    TakingPhoto,
} from "../../../../assets/img/Button";

const Camera = () => {
    const data = useRoute().params?.images || [];
    console.log(data);
    const [facing, setFacing] = useState("back");
    const [flash, setFlash] = useState(false);
    const [permission, requestPermission] = useCameraPermissions();
    const [images, setImages] = useState(data);

    const imageRef = useRef(null);
    const navigation = useNavigation();
    const isFocused = useIsFocused();
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
    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center" }}>
                    We need your permission to show the camera
                </Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing((current) => (current === "back" ? "front" : "back"));
    }
    const textPicture = async () => {
        if (imageRef) {
            try {
                const photo = await imageRef.current.takePictureAsync();
                setImages((current) => [...current, photo]);
                navigation.navigate("create-post", {
                    images: [...images, photo],
                });
            } catch (e) {
                console.error(e);
            }
        }
    };
    const toggleFlash = () => {
        setFlash(!flash);
    };
    return (
        <View style={styles.container}>
            <CameraView
                flash={flash}
                cameraRatio="1:1"
                style={styles.camera}
                facing={facing}
                className="flex-column justify-between"
                ref={imageRef}
            >
                <View className="flex-row bg-white">
                    <TouchableOpacity
                        onPress={() => {
                            array.splice(0, array.length);
                            navigation.goBack();
                        }}
                        className="flex-row"
                    >
                        <Delete />
                    </TouchableOpacity>
                </View>
                <View className="h-[150] w-full bg-white">
                    <View className="flex-row justify-between items-center w-full py-6 px-10">
                        <TouchableOpacity onPress={toggleFlash}>
                            <Flash />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                textPicture();
                            }}
                        >
                            <TakingPhoto />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleCameraFacing}>
                            <RotateCamera />
                        </TouchableOpacity>
                    </View>
                </View>
            </CameraView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "transparent",
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: "flex-end",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
});

export default Camera;
