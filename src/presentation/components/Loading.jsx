import LottieView from "lottie-react-native";
import React from "react";
import { View } from "react-native";
import { LoadingRefresh } from "../../assets/animations";

const Loading = () => {
    return (
        <View className="flex-1 items-center justify-start">
            <LottieView
                source={LoadingRefresh}
                loop={true}
                autoPlay
                className="w-[180] h-[180]"
            />
        </View>
    );
};

export default Loading;
