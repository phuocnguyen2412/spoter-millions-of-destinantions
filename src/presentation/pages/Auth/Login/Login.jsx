import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";
import { Button, Heading, Input, Stack, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import styles from "./styleLogin";
import authService from "../../../../services/auth.service";
import InputComponent from "../../../components/InputComponent";
import { Lock, User } from "iconsax-react-native";

const LoginScreen = () => {
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const navigation = useNavigation();

    const handleLogin = async () => {
        try {
            setIsLoading(true);
            //const response = await authService.login(username, password);
            navigation.replace("in-app", { screen: "NewFeedScreen" });
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View className="flex-1" style={{ backgroundColor: color.white }}>
            <View className="flex-row justify-center my-14">
                <Image
                    source={require("../../../../assets/img/logo-small.jpg")}
                />
            </View>

            <View className="px-5 py-4 bg-white rounded-t-3xl ">
                <Text className=" font-bold mb-5 text-2xl ">Login</Text>
                <View>
                    <InputComponent
                        value={userInfo.username}
                        onChangeText={(e) =>
                            setUserInfo({ ...userInfo, username: e })
                        }
                        placeholder="User name"
                        affix={<User size={22} color="gray" />}
                    />
                    <InputComponent
                        isPassword
                        value={userInfo.password}
                        onChangeText={(e) =>
                            setUserInfo({ ...userInfo, password: e })
                        }
                        affix={<Lock size={22} color="gray" />}
                        placeholder="*********"
                    />
                    <Button
                        style={{ backgroundColor: color.primary }}
                        className="mb-5 w-full rounded-xl mt-8"
                        isLoading={isLoading}
                        onPress={handleLogin}
                    >
                        Continue
                    </Button>
                </View>
                <View className="w-[294px] h-[0px] border border-neutral-500 mx-auto"></View>
                <View className="mb-4 relative bottom-3 bg-white inline">
                    <Text className=" text-center text-neutral-500 text-sm font-medium font-['Montserrat'] leading-none inline">
                        or Log in with
                    </Text>
                </View>

                <View className="flex-row gap-3 justify-center mb-4">
                    <FontAwesome
                        name="facebook-square"
                        size={40}
                        color="#3b5998"
                    />
                    <AntDesign name="google" size={40} color="#DB4437" />
                    <Ionicons name="logo-apple" size={40} color="black" />
                    <Ionicons name="logo-whatsapp" size={40} color="#25D366" />
                </View>

                <Text
                    className=" text-center"
                    onPress={() => navigation.navigate("register")}
                >
                    Don't have an account yet?{" "}
                    <Text style={styles.signUpLink}>Sign up</Text>
                </Text>
            </View>
        </View>
    );
};

export default LoginScreen;
