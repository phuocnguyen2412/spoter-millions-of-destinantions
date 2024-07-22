import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getDataFromStorage, setDataStorage } from "../../../helpers/storage";
import authService from "../../../services/auth.service";
import color from "../../contants/color";

const StartScreen = () => {
    const navigation = useNavigation();
    const [isLogin, setIsLogin] = React.useState(true);
    React.useEffect(() => {
        (async () => {
            try {
                const token = await getDataFromStorage("account");
                if (!token) return;
                const res = await authService.refreshToken(token?.accessToken);
                await setDataStorage("account", res?.data);

                navigation.replace("in-app", { screen: "NewFeedScreen" });
            } catch (error) {
                setIsLogin(false);
                console.log(error);
            }
        })();
    }, []);
    return isLogin ? (
        <View className="flex-1 justify-center items-center bg-white">
            <Image source={require("../../../assets/img/logo-big.jpg")} />
        </View>
    ) : (
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
                className="flex-row justify-center mb-4 py-4 rounded-xl "
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
                    {" "}
                    Sign in
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default StartScreen;
