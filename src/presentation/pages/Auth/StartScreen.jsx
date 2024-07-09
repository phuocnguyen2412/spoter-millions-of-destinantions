import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import color from "../../contants/color";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const StartScreen = () => {
    const navigation = useNavigation();
    return (
        <View
            className="flex-1 align-center p-4 justify-center"
            style={{ backgroundColor: color.white }}
        >
            <Text className="text-4xl text-center text-black font-bold mb-10">
                Let's Get Started!
            </Text>
            <View className="flex-row justify-center mb-12">
                <Image source={require("../../../assets/img/logo-big.jpg")} />
            </View>
            <TouchableOpacity
                className="flex-row justify-center mb-4 py-3 rounded-xl "
                style={{ backgroundColor: color.primary }}
                onPress={() => {
                    navigation.navigate("register");
                }}
            >
                <Text className="text-white font-semibold">Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity
                className="flex-row justify-center"
                onPress={() => navigation.navigate("login")}
            >
                <Text className="text-black font-semibold">
                    Already have an account?
                </Text>
                <Text
                    className=" font-semibold"
                    style={[
                        {
                            color: color.primary,
                        },
                    ]}
                >
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default StartScreen;
