import {
    useNavigation,
    useRoute
} from "@react-navigation/native";
import { CameraView, useCameraPermissions } from "expo-camera";
import React, { useRef, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { CloseSquare, FlashCircle } from "iconsax-react-native";
import {
    Flash,
    RotateCamera,
    TakingPhoto
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
        <View className="flex-1 pt-9 bg-black">
            <View className="flex-row bg-black justify-between items-center py-4 px-6">
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                    className="flex-row"
                >
                    <CloseSquare color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleCameraFacing}>
                    <FlashCircle color="white" />
                </TouchableOpacity>
            </View>
            <View className="flex-1 justify-center">
                <View className="flex-1 bg-slate-600 p-5">
                    <CameraView
                        flash={flash}
                        cameraRatio="1:1"
                        style={styles.camera}
                        facing={facing}
                        className="flex-column justify-between"
                        ref={imageRef}
                    ></CameraView>
                </View>

                <View className="bg-white">
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
            </View>
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
