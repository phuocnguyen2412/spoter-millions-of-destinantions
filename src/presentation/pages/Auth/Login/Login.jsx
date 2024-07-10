import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";
import { Button, Heading, Input, Stack, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import styles from "./styleLogin";
import authService from "../../../../services/auth.service";
import InputComponent from "../../../components/InputComponent";
import { Lock, User } from "iconsax-react-native";
import {
    Apple,
    Facebook,
    Google,
    WhatsApp,
} from "../../../../assets/img/Button";
import {
    getDataFromStorage,
    setDataStorage,
} from "../../../../helpers/storage";

const LoginScreen = () => {
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const navigation = useNavigation();
    useEffect(() => {
        const handleLogin = async () => {
            try {
                const token = await getDataFromStorage("account");
                console.log(token);
                const res = await authService.refreshToken(token.accessToken);
                await setDataStorage("account", res.data);
                navigation.replace("in-app", { screen: "NewFeedScreen" });
            } catch (error) {
                console.log(error);
            }
        };
        handleLogin();
    }, []);

    const handleLogin = async () => {
        try {
            console.log(userInfo);
            setIsLoading(true);
            const response = await authService.login(
                userInfo.username.toLowerCase(),
                userInfo.password
            );

            await setDataStorage("account", response.data);
            navigation.replace("in-app", { screen: "NewFeedScreen" });
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View className="flex-1" style={{ backgroundColor: color.white }}>
            <View className="flex-row justify-center my-10">
                <Image
                    source={require("../../../../assets/img/logo-small.jpg")}
                />
            </View>

            <View className="px-5 pt-4 pb-[30.5] bg-white rounded-t-3xl ">
                <Text className="text-black text-2xl font-semibold font-['Montserrat'] leading-normal mb-5">
                    Sign in
                </Text>
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
                        className="mb-7 w-full rounded-xl py-5 text-center text-neutral-700 text-base font-medium font-['Montserrat'] leading-[18px]"
                        isLoading={isLoading}
                        onPress={handleLogin}
                    >
                        Continue
                    </Button>
                </View>
                <View className="w-[294px] h-[0px] border border-neutral-500 mx-auto"></View>
                <View className="mb-3 relative bottom-3 bg-white inline">
                    <Text className=" text-center text-neutral-500 text-sm font-medium font-['Montserrat'] leading-none inline">
                        or Log in with
                    </Text>
                </View>

                <View className="flex-row gap-x-3 justify-center mb-[150]">
                    <View>
                        <Facebook />
                    </View>
                    <View>
                        <Google />
                    </View>
                    <View>
                        <Apple />
                    </View>
                    <View>
                        <WhatsApp />
                    </View>
                </View>

                <Text
                    className="text-center text-neutral-400 text-sm font-normal font-['Open Sans'] leading-none tracking-tight"
                    onPress={() => navigation.navigate("register")}
                >
                    Don't have an account yet?
                    <Text
                        style={{ color: color.primary }}
                        className="text-center text-sky-800 text-sm font-normal font-['Open Sans'] underline leading-none tracking-tight"
                    >
                        {" "}
                        Sign up
                    </Text>
                </Text>
            </View>
        </View>
    );
};

export default LoginScreen;
