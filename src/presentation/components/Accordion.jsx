import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Animated,
    Easing,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
const Form = ({ title, description, setChecked, checked }) => {
    return (
        <View className=" rounded-tr-[15px] shadow mb-3 px-[38] ">
            <View className="w-full h-[0px] border border-neutral-200 mb-[10]"></View>
            <View className="flex-row justify-between items-center ">
                <View>
                    <Text className="text-black text-sm font-medium font-['Montserrat'] leading-none">
                        {title}
                    </Text>
                    <Text className="text-black text-[10px] font-normal font-['Montserrat'] leading-[14px]">
                        {description}
                    </Text>
                </View>
                <TouchableOpacity onPress={setChecked}>
                    {checked ? (
                        <Image
                            className="w-6 h-6"
                            source={require("../../assets/img/Button/checked.svg")}
                        />
                    ) : (
                        <Image
                            className="w-6 h-6"
                            source={require("../../assets/img/Button/unchecked.svg")}
                        />
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
};
const Accordion = () => {
    const [expanded, setExpanded] = useState(false);
    const [animation, setAnimation] = useState(new Animated.Value(1));

    const toggleAccordion = () => {
        const finalValue = expanded ? 0 : 1;
        Animated.timing(animation, {
            toValue: finalValue,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
        setExpanded(!expanded);
    };

    const height = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 184], // Adjust height as necessary
    });

    return (
        <View className="w-full bg-stone-100 rounded-tl-[15px] rounded-tr-[15px] shadow">
            <Animated.View style={[{ height }]}>
                <View>
                    <Form
                        title="Pin on Map"
                        description="Enabling pin will allow everybody can see"
                        checked={true}
                    />
                    <Form
                        checked={false}
                        title="Comment"
                        description="You allow people to comment your post"
                    />
                </View>
            </Animated.View>
            <TouchableOpacity
                onPress={toggleAccordion}
                className="flex-row  justify-between bg-stone-100 px-[38] py-3 rounded-tl-[15px] rounded-tr-[15px] "
            >
                <View className="flex-row gap-6 justify-between ">
                    <Image
                        source={require("../../assets/img/Button/add-photo.svg")}
                        className="w-6 h-6"
                    />

                    <Image
                        source={require("../../assets/img/Button/crop-photo.svg")}
                        className="w-6 h-6"
                    />
                </View>
                <Ionicons
                    name={expanded ? "chevron-down" : "chevron-up"}
                    size={24}
                    className="text-stone-100"
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Accordion;
