import { useRoute } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Calender, PinChallenge } from "../../../../assets/img/Button";

const DetailChanllenge = () => {
    const { title, image, time, position, host, hostImage, description } =
        useRoute().params.info;
    return (
        <ScrollView className="flex-1  bg-white">
            <View className="rounded-bl-[15px] rounded-br-[15px] overflow-hidden mb-[25.3]">
                <Image source={image} className="w-full h-[200] " />
            </View>
            <View className="px-6">
                <View className="mb-[30]">
                    <Text className="text-neutral-800 text-[26px] font-semibold font-['Montserrat'] leading-[30px] tracking-wide">
                        {title}
                    </Text>
                </View>
                <View>
                    <Info
                        title={time}
                        description={"32 days remaining"}
                        icon={<Calender />}
                    />
                    <Info
                        title={position}
                        description={"Starbucks Bachdang, Star..."}
                        icon={<PinChallenge />}
                    />
                    <Info
                        title={host}
                        description={"Organizer"}
                        icon={
                            <Image
                                source={hostImage}
                                className="w-full h-full"
                            />
                        }
                        prefix={
                            <TouchableOpacity className="px-[13px] py-2 bg-sky-100 rounded-[10px] justify-center items-center inline-flex">
                                <Text className="text-sky-900 text-[10px] font-normal font-['Montserrat'] leading-[10px]">
                                    Follow
                                </Text>
                            </TouchableOpacity>
                        }
                    />
                </View>

                <View>
                    <Text className="text-neutral-800 text-xl font-normal  leading-tight">
                        About event
                    </Text>
                    <Text>{description}</Text>
                </View>
            </View>
        </ScrollView>
    );
};
const Info = ({ icon, title, description, prefix }) => {
    console.log(icon);
    return (
        <View className="flex-row mb-[25] items-center justify-between">
            <View className="flex-row items-center flex-1">
                <View className="w-[60px] h-[60px] bg-sky-100 rounded-[10px] mr-5 flex-row items-center justify-center overflow-hidden">
                    {icon}
                </View>
                <View className="flex-1">
                    <Text className="text-neutral-800 text-base font-semibold font-['Montserrat'] ">
                        {title}
                    </Text>
                    <Text className="text-neutral-400 text-sm font-normal font-['Montserrat'] ">
                        {description}
                    </Text>
                </View>
            </View>
            <View>{prefix}</View>
        </View>
    );
};
const styles = StyleSheet.create({});

export default DetailChanllenge;
